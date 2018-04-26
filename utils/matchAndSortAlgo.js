// In Development

module.exports = function(object) {
    let initialQuery = object;
    let currentUser = initialQuery.pop();
    let currentUserChoices = currentUser.festival_data[0].lineupAnswers;

    let dbUsers = initialQuery;

    console.log(dbUsers);
    console.log(currentUserChoices);

    let userMatches = {
        matches: 0,
        userLineup: currentUserChoices,
        filteredResults: [],
    };

    const mapMatch = dbUsers.map(dbUser => {
        for (var z = 0; z < dbUsers.length; z++) {
            let matchScore = {
                user: '',
                score: 0,
                musicMatch: [],
            };

            let matchCheck = false;

            for (let i = 0; i < currentUserChoices.length; i++) {
                /* if (dbUser.festival_data[0].linpupAnswers.length === 0){continue;} */
                for (let x = 0; x < dbUser.festival_data[0].lineupAnswers.length; x++) {
                    if (currentUserChoices[i] === dbUser.festival_data[0].lineupAnswers[x]) {
                        matchCheck = true;
                        matchScore.score++;
                        matchScore.user = dbUser.username;
                        console.log(dbUser.festival_data[0].lineupAnswers[x] + '+++++++++++++++++');
                        matchScore.musicMatch.push(dbUser.festival_data[0].lineupAnswers[x]);
                    }
                }
            }
            console.log(matchScore);
            if (matchCheck) {
                userMatches.matches++;
                console.log(matchScore);
                return matchScore;
            }
        }
    });
    userMatches.matches = userMatches.matches - userMatches.filteredResults.length;
    userMatches.filteredResults = mapMatch;
    console.log('HERE>>>>>' + mapMatch + '++++++++++');
    console.log(userMatches);
    let sortedMatches = bubbleSort(userMatches.filteredResults);
    userMatches.filteredResults = sortedMatches;
    return userMatches;

}

function bubbleSort(arrayOfUsers) {
    let ary = arrayOfUsers;

    for (var x = 0; x < ary.length; x++) {
        for (var i = 0; i < ary.length - 1; i++) {
            if (ary[i].score < ary[i + 1].score) {
                let hold = ary[i];

                let hold2 = ary[i + 1];

                ary[i] = hold2;

                ary[i + 1] = hold;
            } else if (ary[i].score > ary[i + 1].score) {
                continue;
            }
        }
    }
    return arrayOfUsers;
}