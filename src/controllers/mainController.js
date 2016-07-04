export default ( () => {
    const self = {};

    return { init };

    ///////////////

    function init(models,views) {
        //init model data
        const modelUser = models.userModel.fetchAll(),
            modelGroup = models.groupModel.fetchAll(),
            modelsFetchPromises = [modelUser,modelGroup];

        self.views = { ...views };// store view references

        //call render
        modelUser.then( (users) => {
            self.views.userView.hideLoadIndicator();
            self.views.userView.render(users);
        });

        modelGroup.then( (groups) => {
            self.views.groupView.hideLoadIndicator();
            self.views.groupView.render(groups);
        });

        //load event handling after collect & render all data
        Promise.all(modelsFetchPromises).then( () => {
            setTimeout( () => {
                loadDetailsEvent();
            },100); //just in case.
        });
    }


    //show details rows users, groups
    function showRelatedDetail(e) {
        const modelID = e.target.lastElementChild.innerText,
            relatedView = e.srcElement.parentElement.id === 'group-list' ? self.views.groupView : self.views.userView;

        relatedView.showDetail(+modelID);
    }

    function loadDetailsEvent() {
        function addEventListenerByClass(className, event, fn) {
            const list = document.querySelectorAll(className);

            for (let i = 0; i < list.length; i++) {
                list[i].addEventListener(event, fn, false);
            }
        }
        addEventListenerByClass('.body_row', 'click', showRelatedDetail);
    }
})();
