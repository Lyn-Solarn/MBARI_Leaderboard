const fathomnetURL = "/fathomnet"; 
const mode = "cors";
const fathomnetEndpoints = {
    stats: {
        organizationStats: fathomnetURL + "/stats/list/contributions",
        observerCounts: fathomnetURL + "/boundingboxes/query/counts/observer",
        verifierCounts: fathomnetURL + "/boundingboxes/query/counts/verifier"
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

    verifierCounts() {
        return fetch(fathomnetEndpoints.stats.verifierCounts, {
            mode: mode
        }).then(r => r.json());
    }
}