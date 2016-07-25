import config from '../config.js';

export default ( (config) => {
    const model = {
        url: [config.backendUrl, 'groups'].join('/')
    };

    function fetchAll () {
        return getMocGroups().then( (groups) => {
            model.groups = groups;
            return groups;
        });
    }

    function getMocGroups() {
        return new Promise( (resolve, reject) => {
            const reqObj = new XMLHttpRequest();

            reqObj.overrideMimeType('application/json');
            reqObj.open('GET', model.url, true); //local file
            reqObj.onreadystatechange = () => {
                if (reqObj.readyState === 4 && reqObj.status === 200) {
                    const data = JSON.parse(reqObj.responseText);

                    setTimeout( () => {
                        resolve(data);
                    },2000);
                } else if (reqObj.readyState === 4 && reqObj.status !== 200) {
                    reject('loading error');
                }
            };
            reqObj.send(null);
        });
    }

    ////////////

    model.fetchAll = fetchAll;
    model.getGroups = getMocGroups;

    return model;
})(config);
