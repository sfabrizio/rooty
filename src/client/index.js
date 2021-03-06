import userModel from './models/user';
import groupModel from  './models/group';
import userView from './views/userView';
import groupView from './views/groupView';
import mainController from './controllers/mainController';


const userIsLogged = () => {
    //TODO: request to login view here for see if the user is still logged
    return true;
};

if ( userIsLogged() ) {
    initApp();
} else {//redirect to login page
    window.location.href = '/login'; //TODO: have a login page
}

function initApp() {
    //collect references
    const models = {
            userModel,
            groupModel
        },
        views = {
            userView,
            groupView
        };

    //load main controller
    mainController.init(models,views);
}


//general app event handling
//check online-offline status
window.addEventListener('load', () => {
    function updateOnlineStatus() {
        const status = document.getElementById('connection-status'),
            condition = navigator.onLine ? 'online' : 'offline';

        status.className = condition;
        status.innerHTML = condition.toUpperCase();
    }

    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});
