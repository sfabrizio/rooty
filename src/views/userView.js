var userView = (() => {
    'use strict';

    init();

    return {
        loadUsers: loadUsers,
        showDetail:showDetail,
        hideDetail: hideDetail
    };

    /////////////

    function init() {
        //init userView
    }

    function loadUsers(users) {
        for (let i = 0; i < users.length; i++) {
            createUserRow(users[i]);
        }
    }

    function createUserRow(user) {
        let userListDiv = document.getElementById('user-list'),
            rowDiv = document.createElement("div"),
            name = document.createElement("div"),
            id = document.createElement("div");

        rowDiv.className = 'body_row';
        name.textContent = user.userName;
        id.textContent = user.id;
        rowDiv.appendChild(name);
        rowDiv.appendChild(id);
        userListDiv.appendChild(rowDiv);
    }

    function showDetail(e) {
        let modelID = e.target.lastElementChild.innerText,
            detailUserxDiv = document.querySelector('#user-detail-container');
        detailUserDiv.style.display = 'block';
    }

    function hideDetail() {
        let detailUserxDiv = document.querySelector('#user-detail-container');
        detailUserDiv.style.display = 'none';
    }
})();



