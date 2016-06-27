// this return models so this seem to be more a collection than a model.

var userModel = {};

function getMocUsers() {

    return new Promise(function (resolve, reject) {

        if (userModel.users && userModel.users.length > 0) {
            return userModel.users;
        }

        let reqObj = new XMLHttpRequest();
        reqObj.overrideMimeType("application/json");
        reqObj.open('GET', 'data.json', true); //local file
        reqObj.onreadystatechange = () => {
            if (reqObj.readyState == 4 && reqObj.status == "200") {
                //avoid async mode with the callback
                let data = JSON.parse(reqObj.responseText);
                resolve(data.users);
            } else if (reqObj.readyState == 4 && reqObj.status != "200") {
                reject('loading error');
            }
        };
        reqObj.send(null);
    });
}

function getUser(userId) {
    let user = userModel.users.filter( (user) => {
        return user.id == userId;
    });

    return user[0] || [];
}

//replace with the real methods here:
userModel.getUsers = getMocUsers;
userModel.getUser = getUser;


(function init (){
    getMocUsers().then( (users) => {
        userModel.users = users;
    });
})();
