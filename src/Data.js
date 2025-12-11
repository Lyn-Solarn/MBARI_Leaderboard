import fathomnetEndpoints from "./api/fathomnetApi.js";

// async function load() {
//     const [organizations, observers, verifiers] = await Promise.all([
//         fathomnetEndpoints.stats.organizationStats(),
//         fathomnetEndpoints.stats.observerCounts(),
//         fathomnetEndpoints.stats.verifierCounts()
//     ]);

//     return {
//         organizations: organizations.map((o, i) => ({
//             id: i+1,
//             ownerInstitutionCode: o.ownerInstitutionCode,
//             boundingBoxes: o.boundingBoxes,
//             images: o.images,
//             uploads: o.uploads
//         })),
//         observers: observers.map((o, i) => ({
//             id: i+1,
//             name: o.observer,
//             count: o.count
//         })),
//         verifiers: verifiers.map((v, i) => ({
//             id: i+1,
//             name: v.verifier,
//             count: v.count
//         }))
//     };
// }

// const fathomnetData = await load();

// Activate this export once API endpoints have been implemented
// export default fathomnetData;

// Temporary data for setting up the table while the new API endpoints are being implemented
// Can be removed later once obsolete
export default {
    organizations: [
        { id: 'u-001', ownerInstitutionCode: 'MBARI', boundingBoxes: 12840, images: 4021, uploads: 23 },
        { id: 'u-002', ownerInstitutionCode: 'UniOfPlym', boundingBoxes: 11750, images: 3895, uploads: 19 },
        { id: 'u-003', ownerInstitutionCode: 'Schmidt Ocean Institute', boundingBoxes: 11080, images: 3750, uploads: 21 },
        { id: 'u-004', ownerInstitutionCode: 'NOAA OER', boundingBoxes: 9820, images: 3402, uploads: 16 },
        { id: 'u-005', ownerInstitutionCode: 'Ocean Networks Canada', boundingBoxes: 1210, images: 3338, uploads: 15 },
        { id: 'u-006', ownerInstitutionCode: 'NOAA Ocean Exploration', boundingBoxes: 9090, images: 3215, uploads: 14 },
        { id: 'u-007', ownerInstitutionCode: 'Joost Daniels', boundingBoxes: 8750, images: 2980, uploads: 25 },
        { id: 'u-008', ownerInstitutionCode: 'CVision AI', boundingBoxes: 8410, images: 2854, uploads: 31 },
        { id: 'u-009', ownerInstitutionCode: 'POSCO', boundingBoxes: 5653, images: 4056, uploads: 12 },
        { id: 'u-010', ownerInstitutionCode: 'OE', boundingBoxes: 2213, images: 6244, uploads: 26 },
    ],

    observers: [
        { id: 'u-001', name: 'Mia', count: 12840 },
        { id: 'u-002', name: 'Brian', count: 11750 },
        { id: 'u-003', name: 'George', count: 11080 },
        { id: 'u-004', name: 'Kyle', count: 9820 },
        { id: 'u-005', name: 'Kevin', count: 1210 },
        { id: 'u-006', name: 'Thomas', count: 9090 },
        { id: 'u-007', name: 'Daniel', count: 8750 },
        { id: 'u-008', name: 'Sam', count: 8410 },
        { id: 'u-009', name: 'Milo', count: 5653 },
        { id: 'u-010', name: 'Jeremy', count: 2213 },
    ],

    verifiers: [
        { id: 'u-001', name: 'Ryan', count: 1240 },
        { id: 'u-002', name: 'Elia', count: 1750 },
        { id: 'u-003', name: 'George', count: 11080 },
        { id: 'u-004', name: 'Kyle', count: 4820 },
        { id: 'u-005', name: 'Kevin', count: 6210 },
        { id: 'u-006', name: 'Thomas', count: 1090 },
        { id: 'u-007', name: 'Daniel', count: 4750 },
        { id: 'u-008', name: 'Peter', count: 12410 },
        { id: 'u-009', name: 'Leon', count: 653 },
        { id: 'u-010', name: 'Jeremy', count: 2213 },
    ]
}