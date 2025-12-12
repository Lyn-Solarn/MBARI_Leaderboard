import fathomnetEndpoints from "./api/fathomnetApi.js";

async function load() {
    const [organizations, observers, reviewer] = await Promise.all([
        fathomnetEndpoints.organizationStats(),
        fathomnetEndpoints.observerCounts(),
        fathomnetEndpoints.reviewerCounts()
    ]);

    // Checks if Observer and/or Reviewer have an email in the name
    const isEmail = (value) => /\S+@\S+\.\S+/.test(value);

    const fetchDisplayName = async (email) => {
        try {
            const data = await fathomnetEndpoints.getIdentityByEmail(email);
            return data?.displayName || email;
        } catch (error) {
            console.error("Failed to fetch display name:", error);
            return email;
        }
    };

    const observersProcessed = await Promise.all(
        observers.map(async (o) => {
            let name = o.observer;
            if (isEmail(name)) {
                name = await fetchDisplayName(name);
            }
            return {
                name,
                count: o.count
            };
        })
    );

    const reviewersProcessed = await Promise.all(
        reviewer.map(async (v) => {
            let name = v.reviewer;
            if (isEmail(name)) {
                name = await fetchDisplayName(name);
            }
            return {
                name,
                count: v.count
            };
        })
    );

    return {
        organizations: organizations.filter(o => o.ownerInstitutionCode && o.ownerInstitutionCode.trim() !== "")
            .map(o => ({
                ownerInstitutionCode: o.ownerInstitutionCode.trim(),
                images: Number(o.totalImages ?? 0),
                uploads: Number(o.totalUploads ?? 0)
            })),
        observers: observersProcessed,
        reviewer: reviewersProcessed
    };
}

const fathomnetData = await load();

export default fathomnetData;