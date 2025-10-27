const axios = require('axios');

module.exports.config = {
    name: "autopost",
    eventType: ["log:subscribe"],
    version: "1.0.0",
    credits: "Lunar Krystal",
    description: "Auto post cat facts to timeline every 2 minutes"
};

module.exports.onLoad = function({ api }) {
    const postInterval = 2 * 60 * 1000;
    
    setInterval(async () => {
        try {
            const response = await axios.get('https://catfact.ninja/fact');
            const catFact = response.data.fact;
            
            const message = `🐱 Cat Fact:\n\n${catFact}\n\n#CatFacts #AutoPost`;
            
            api.createPost(message, (err) => {
                if (err) {
                    console.log(`[AUTOPOST] Error posting to timeline: ${err}`);
                } else {
                    console.log(`[AUTOPOST] Successfully posted cat fact to timeline`);
                }
            });
        } catch (error) {
            console.log(`[AUTOPOST] Error fetching cat fact: ${error.message}`);
        }
    }, postInterval);
    
    console.log('[AUTOPOST] Auto-post module initialized. Posting cat facts every 2 minutes.');
};

module.exports.run = async function({ api, event }) {
    return;
};
