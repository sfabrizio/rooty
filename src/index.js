const userIsLogged = () => {
    //request to login endpoint
    return true;
};

const initApp = () => {
    'use strict';
};


function documentReady() {
    console.log('documentReady');
    var event = new Event('loaded');
    document.dispatchEvent(event);
}

if (userIsLogged()){
    initApp();
} else {//redirecto to login page
    window.location.href = "/login";
}
