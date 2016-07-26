import config from '../../config.js';

export default ( (config) => {
    const model = {
        url: [config.backendUrl, 'users'].join('/')
    };

    function fetchAll () {
        return getMocUsers().then( (users) => {
            model.users = users;
            return users;
        });
    }

    function getMocUsers() {
        return new Promise( (resolve, reject) => {
            if (model.users && model.users.length > 0) {
                return model.users;
            }

            const reqObj = new XMLHttpRequest();

            reqObj.overrideMimeType('application/json');
            reqObj.open('GET', model.url , true);

            reqObj.onreadystatechange = () => {
                if (reqObj.readyState === 4 && reqObj.status === 200) {
                    const data = JSON.parse(reqObj.responseText);

                    setTimeout( () => {
                        resolve(data);
                    },3000);
                } else if (reqObj.readyState === 4 && reqObj.status !== 200) {
                    reject('loading error');
                }
            };
            reqObj.send(null);
        });
    }

    function getUser(userId) {
        const user = model.users.filter( (user) => {
            return user.id === userId;
        });

        return user[0] || [];
    }

    //////////

    model.getUser = getUser;
    model.fetchAll = fetchAll;

    return model;
})(config);
