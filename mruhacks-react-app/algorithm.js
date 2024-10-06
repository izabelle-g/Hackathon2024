async function global() {
    try {
        let response = await fetch("https://lovely-separate-dill.glitch.me/api/client/spencer");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        let json = await response.json();
        let me = json;

        response = await fetch("https://lovely-separate-dill.glitch.me/api/requests");
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
      
        json = await response.json();
        let others = json;

        const differences = (me, others) => {

            
            let difflist = [];
            others.forEach(element => {
                let diffsum = 0;
                let difference = me.talkativity-element.client.talkativity;
                diffsum += difference * difference;
                difference = me.formality-element.client.formality;
                diffsum += difference * difference;
                difference = me.friendliness-element.client.friendliness;
                diffsum += difference * difference;
                difference = me.extroversion-element.client.extroversion;
                diffsum += difference * difference;
                difflist.push(diffsum);
            });
        
            return difflist;
        }
        
        let difference = differences(me,others);
        let format = (difference,others) => {
            let array = [];
            let count = 0;
            difference.forEach(score => {
                array.push([score,others[count].client.name]);
            });
            return array;
        }
        let formatted = format(difference,others);
        console.log(formatted);
      } catch (error) {
        console.error(error.message);
      }
}
global()
// // Function to calculate cosine similarity between two profiles
// function cosineSimilarity(profileA, profileB) {
//     let dotProduct = 0;
//     let normA = 0;
//     let normB = 0;

//     for (let key in profileA) {
//         dotProduct += profileA[key] * profileB[key];
//         normA += profileA[key] ** 2;
//         normB += profileB[key] ** 2;
//     }

//     normA = Math.sqrt(normA);
//     normB = Math.sqrt(normB);

//     return dotProduct / (normA * normB);
// }

// // Function to find best matches for a given user profile
// function findBestMatches(userProfile, profiles) {
//     let similarities = profiles.map((profile) => ({
//         profile: profile,
//         score: cosineSimilarity(userProfile, profile)
//     }));

//     similarities.sort((a, b) => b.score - a.score);
//     return similarities;
// }

// // Optional: Add filtering logic for specific criteria (e.g., language, availability, etc.)
// function filterProfiles(userProfile, profiles, filters) {
//     return profiles.filter(profile => {
//         for (let key in filters) {
//             if (profile[key] !== filters[key]) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }

// // Example usage
// let userProfileA = {
//     talkativity: 0.7,  // normalized between 0 and 1
//     formality: 0.4,
//     friendliness: 0.9,
//     extroversion: 0.3
// };

// let profiles = [
//     { talkativity: 0.8, formality: 0.5, friendliness: 0.7, extroversion: 0.4 },
//     { talkativity: 0.4, formality: 0.9, friendliness: 0.5, extroversion: 0.2 },
//     { talkativity: 0.9, formality: 0.6, friendliness: 0.8, extroversion: 0.7 }
// ];

// // Find best matches for userProfileA
// let matches = findBestMatches(userProfileA, profiles);
// console.log("Best matches:", matches);

// // Optional: Apply filtering (e.g., language) before finding matches
// let filters = { language: 'English' };  // example filter (can be modified)
// let filteredProfiles = filterProfiles(userProfileA, profiles, filters);
// let matchesAfterFilter = findBestMatches(userProfileA, filteredProfiles);
// console.log("Matches after filtering:", matchesAfterFilter);
