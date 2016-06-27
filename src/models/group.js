var groupModel = ( () => {
    'use strict';
    var model = {};

    function getMocGroups() {

        return new Promise(function (resolve, reject) {
            let reqObj = new XMLHttpRequest();
            reqObj.overrideMimeType("application/json");
            reqObj.open('GET', 'data.json', true); //local file
            reqObj.onreadystatechange = () => {
                if (reqObj.readyState == 4 && reqObj.status == "200") {
                    const data = JSON.parse(reqObj.responseText);
                    resolve(data.groups);
                } else if (reqObj.readyState == 4 && reqObj.status != "200") {
                    reject('loading error');
                }
            };
            reqObj.send(null);
        });
    }

    model.getGroups = getMocGroups;

    return model;

})();
