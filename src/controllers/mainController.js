export default ( () => {
    var self = {};

    return {
        init : init
    };

    ///////////////

    function init(models,views) {
        //connect models with the views
        //controller
        let modelsFetchPromises,
            modelUser,
            modelGroup;

        self.views = { views };// store view references

        //init model data
        modelUser = models.userModel.fetchAll();
        modelGroup = models.groupModel.fetchAll();

        modelsFetchPromises = [modelUser,modelGroup];

        //call render
        modelUser.then( (users) => {
            views.userView.hideLoadIndicator();
            views.userView.render(users);
        });

        modelGroup.then( (groups) => {
            views.groupView.hideLoadIndicator();
            views.groupView.render(groups);
        });

        //load event handling after collect & render all data
        Promise.all(modelsFetchPromises).then( () => {
            setTimeout( () => {
                loadDetailsEvent();
            },100); //just in case.
        });
    }


    //show details rows users, groups
    function showRelatedDetail(e){
        let modelID = e.target.lastElementChild.innerText,
            relatedView = e.srcElement.parentElement.id === 'group-list' ? self.views.groupView : self.views.userView;
        relatedView.showDetail(modelID);
    }

    function loadDetailsEvent(){
        function addEventListenerByClass(className, event, fn) {
            const list = document.querySelectorAll(className);

            for (let i = 0; i < list.length; i++) {
                list[i].addEventListener(event, fn, false);
            }
        }
        addEventListenerByClass('.body_row', 'click', showRelatedDetail);
    }
})();
