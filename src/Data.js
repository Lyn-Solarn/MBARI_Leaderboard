import fathomnetEndpoints from "./api/fathomnetApi.js";

async function load() {
    const [organizations, observers, verifiers] = await Promise.all([
        fathomnetEndpoints.stats.organizationStats(),
        fathomnetEndpoints.stats.observerCounts(),
        fathomnetEndpoints.stats.verifierCounts()
    ]);

    return {
        organizations,
        observers,
        verifiers
    };
}

const fathomnetData = await load();

// Reactivate this export once API endpoints have been implemented
// export default fathomnetData;

// Temporary data for setting up the table while the new API endpoints are being implemented
// Can be removed later once obsolete
export default {
    organizations: [
        { id: 'u-001', ownerInstititutionCode: 'MBARI', boundingBoxes: 12840, images: 4021, uploads: 23 },
        { id: 'u-002', ownerInstititutionCode: 'UniOfPlym', boundingBoxes: 11750, images: 3895, uploads: 19 },
        { id: 'u-003', ownerInstititutionCode: 'Schmidt Ocean Institute', boundingBoxes: 11080, images: 3750, uploads: 21 },
        { id: 'u-004', ownerInstititutionCode: 'NOAA OER', boundingBoxes: 9820, images: 3402, uploads: 16 },
        { id: 'u-005', ownerInstititutionCode: 'Ocean Networks Canada', boundingBoxes: 1210, images: 3338, uploads: 15 },
        { id: 'u-006', ownerInstititutionCode: 'NOAA Ocean Exploration', boundingBoxes: 9090, images: 3215, uploads: 14 },
        { id: 'u-007', ownerInstititutionCode: 'Joost Daniels', boundingBoxes: 8750, images: 2980, uploads: 25 },
        { id: 'u-008', ownerInstititutionCode: 'CVision AI', boundingBoxes: 8410, images: 2854, uploads: 31 },
        { id: 'u-009', ownerInstititutionCode: 'POSCO', boundingBoxes: 5653, images: 4056, uploads: 12 },
        { id: 'u-010', ownerInstititutionCode: 'OE', boundingBoxes: 2213, images: 6244, uploads: 26 },
    ],

    observers: [
        { id: 'u-001', observer: 'Mia', count: 12840 },
        { id: 'u-002', observer: 'Brian', count: 11750 },
        { id: 'u-003', observer: 'George', count: 11080 },
        { id: 'u-004', observer: 'Kyle', count: 9820 },
        { id: 'u-005', observer: 'Kevin', count: 1210 },
        { id: 'u-006', observer: 'Thomas', count: 9090 },
        { id: 'u-007', observer: 'Daniel', count: 8750 },
        { id: 'u-008', observer: 'Sam', count: 8410 },
        { id: 'u-009', observer: 'Milo', count: 5653 },
        { id: 'u-010', observer: 'Jeremy', count: 2213 },
    ],

    verifiers: [
        { id: 'u-001', verifier: 'Ryan', count: 1240 },
        { id: 'u-002', verifier: 'Elia', count: 1750 },
        { id: 'u-003', verifier: 'George', count: 11080 },
        { id: 'u-004', verifier: 'Kyle', count: 4820 },
        { id: 'u-005', verifier: 'Kevin', count: 6210 },
        { id: 'u-006', verifier: 'Thomas', count: 1090 },
        { id: 'u-007', verifier: 'Daniel', count: 4750 },
        { id: 'u-008', verifier: 'Peter', count: 12410 },
        { id: 'u-009', verifier: 'Leon', count: 653 },
        { id: 'u-010', verifier: 'Jeremy', count: 2213 },
    ]
}