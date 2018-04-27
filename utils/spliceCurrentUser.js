
module.exports = function (allUsers, currentUserEmail) {
    let indexOfCurrentUser;
    allUsers.forEach((user, index) => {
        if (user.email === currentUserEmail) {
            indexOfCurrentUser = index;
        }
    });
    const currentUser = allUsers[indexOfCurrentUser];
    allUsers.splice(indexOfCurrentUser, 1);
    return {
        currentUser,
        otherUsers: allUsers
    };
};