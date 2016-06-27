//App Main controller:

var views = {};

const userIsLogged = () => {
    //TODO: request to login view here for see if the user is still logged
    return true;
};

if ( userIsLogged() ){
    initApp();
} else {//redirect to login page
    window.location.href = "/login"; //TODO: have a login page
}

function initApp() {
    //connect models with the views:
    //controller
    let modelsFetchPromises,
        modelUser,
        modelGroup;

    //do the initial fetchs
    modelUser = userModel.init();
    modelGroup = groupModel.init();

    modelsFetchPromises = [modelUser,modelGroup];

    modelUser.then( (users) => {
        views.userView = userView;
        views.userView.loadUsers(users);
    });

    modelGroup.then( (groups) => {
        views.groupView = groupView;
        views.groupView.loadGroups(groups);
    });

    //load event handling
    Promise.all(modelsFetchPromises).then( () => {
        loadDetailsEvent();
    });
}


//general app event handling:


//show details rows users, groups

function showRelatedDetail(e){
    let modelID = e.target.lastElementChild.innerText,
        relatedView = e.srcElement.parentElement.id === 'group-list' ? views.groupView : views.userView;
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

//online-offline status
window.addEventListener('load', function() {

    function updateOnlineStatus() {
        let status = document.getElementById("connection-status");
        const condition = navigator.onLine ? "online" : "offline";
        status.className = condition;
        status.innerHTML = condition.toUpperCase();
    }

    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});
