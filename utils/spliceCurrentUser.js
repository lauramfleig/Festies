
module.exports = function (arrayOfObjects, currentUser) {
    let indexOfCurrentUser;
    arrayOfObjects.forEach(object => {
        if(object.email === currentUser) {
            indexOfCurrentUser = arrayOfObjects.indexOf(object);
        }
    });
    const splicedObject = arrayOfObjects.splice(indexOfCurrentUser, 1);
    return splicedObject;
};