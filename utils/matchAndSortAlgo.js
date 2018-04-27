const spliceCurrentUser = require('./spliceCurrentUser');

module.exports = function (currentUserEmail, festivalName, usersAtTheFestival) {
    
    // we know the currentUser and we know the name of the festival so we need to 
    // filter out the other festivals from the currentUser festival_data array
    // then grab the lineupAnswers from the only remaining item in that filtered 
    // array
    const { currentUser, otherUsers } = spliceCurrentUser(usersAtTheFestival, currentUserEmail);
    let currentUserChoices = currentUser
        .festival_data
        .filter(festival => festival.festivalDetails.displayName === festivalName)[0]
        .lineupAnswers

    // initialize an object where we are going to store the matched users    
    const matchedUsers = [];

    const mapMatch = otherUsers.map(dbUser => {
        
        // object for frienduser that matches
        let matchObject = {
            user: dbUser,
            matchedArtists: []
        };

        // here we need to single out the festival that we both have in common
        // so that we can compare the artists we chose in the survey
        dbUser.festival_data.forEach(festival => {
            // if the festival name is the same as one of my festivals, then we will check to 
            // see if we have any artist matches at that festival
            if (festival.festivalDetails.displayName === festivalName) {

                // if the festival names are the same, we are going to loop through
                // the artists we both chose, to see if we have any matches
                
                // loop through my choices
                for (let i = 0; i < currentUserChoices.length; i++) {

                    // loop through the potential match's choices
                    for (let x = 0; x < festival.lineupAnswers.length; x++) {
                        
                        if (currentUserChoices[i] === festival.lineupAnswers[x]) {

                            matchObject.matchedArtists.push(festival.lineupAnswers[x]);

                        }
                    }
                }

            }
        })
            
        if (matchObject.matchedArtists.length) {
            matchedUsers.push(matchObject);
        }
       
    });
    
    return matchedUsers.sort((userA, userB) => (userA.matchedArtists.length - userB.matchedArtists.length));
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