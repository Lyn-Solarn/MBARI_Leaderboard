const fathomnetURL = "/fathomnet";
const mode = "cors";
const fathomnetEndpoints = {
    stats: {
        organizationStats: fathomnetURL + "/stats/list/contributions",
        observerCounts: fathomnetURL + "/boundingboxes/list/counts/observer",
        reviewerCounts: fathomnetURL + "/boundingboxes/list/counts/reviewer"
    },
    users: {
        getIdentity(email) {
            return `${fathomnetURL}/users/query/email/${encodeURIComponent(email)}`;
        }
    }
}

export default {
    organizationStats() {
        return fetch(fathomnetEndpoints.stats.organizationStats, {
            mode: mode
        }).then(r => r.json());
    },

    observerCounts() {
        return fetch(fathomnetEndpoints.stats.observerCounts, {
            mode: mode
        }).then(r => r.json());
    },

    reviewerCounts() {
        return fetch(fathomnetEndpoints.stats.reviewerCounts, {
            mode: mode
        }).then(r => r.json());
    },

    getIdentityByEmail(email) {
    return fetch(fathomnetEndpoints.users.getIdentity(email), { mode })
        .then(async (res) => {
            if (!res.ok) {
                // 404 → user not found — valid case.
                if (res.status === 404) {
                    console.warn("No user found for email:", email);
                    return null;
                }

                console.error("Identity lookup error:", res.status, email);
                return null;
            }

            const text = await res.text();
            if (!text) return null;

            try {
                return JSON.parse(text);
            } catch (err) {
                console.error("Invalid JSON for email:", email);
                return null;
            }
        })
        .catch(err => {
            console.error("Fetch failed for identity lookup:", email, err);
            return null;
        });
}
}