var userView = ( () => {
    'use strict';
    var self = this;

    init();

    return {
        render: render,
        showDetail:showDetail,
        hideDetail: hideDetail,
        showLoadIndicator: showLoadIndicator,
        hideLoadIndicator: hideLoadIndicator
    };

    /////////////

    function init() {
        //init stuff
        self.userListDiv = document.getElementById('user-list');
    }

    function showLoadIndicator () {
        //TODO
    }

    function hideLoadIndicator () {
        self.userListDiv.innerHTML = "";
    }

    function render(users) {
        for (let i = 0; i < users.length; i++) {
            createUserRow(users[i]);
        }
    }

    function createUserRow(user) {
        let rowDiv = document.createElement("div"),
            name = document.createElement("div"),
            id = document.createElement("div");

        rowDiv.className = 'body_row';
        name.textContent = user.userName;
        id.textContent = user.id;
        rowDiv.appendChild(name);
        rowDiv.appendChild(id);
        // rowDiv.setAttribute('id',`row-user-${user.id}`);
        self.userListDiv.appendChild(rowDiv);
    }

    function showDetail(userId) {
        if (!userId) return;

        let detailUserDiv = document.querySelector('#user-detail-container'),
            user = userModel.getUser(userId);

        setDetailUserDiv(user);

        detailUserDiv.className = 'make-hidden';
        setTimeout( ()=> {//animation
            detailUserDiv.className = 'make-visible';
        },300);
    }

    function setDetailUserDiv(user) {
        let firstName = document.querySelector('#user_firstName'),
            lastName = document.querySelector('#user_lastName'),
            isAdmin = document.querySelector('#user_isAdmin'),
            groupId = document.querySelector('#user_group_id');

        firstName.textContent = user.firstName;
        lastName.textContent = user.lastName;
        isAdmin.textContent = user.isAdmin;
        groupId.textContent = user.group_id;

    }

    function hideDetail() {
        let detailUserDiv = document.querySelector('#user-detail-container');
        detailUserDiv.className = 'make-hidden';
    }
})();



