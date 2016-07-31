import userModel from '../models/user';

export default ( (userModel) => {
    const self = {};

    self.userListDiv = document.getElementById('user-list');

    return {
        render,
        showDetail,
        hideDetail
    };

    /////////////

    function render(users) {
        for (let i = 0; i < users.length; i++) {
            createUserRow(users[i]);
        }
    }

    function createUserRow(user) {
        const rowDiv = document.createElement('div'),
            name = document.createElement('div'),
            id = document.createElement('div');

        rowDiv.className = 'body_row';
        name.textContent = user.userName;
        id.textContent = user.id;
        rowDiv.appendChild(name);
        rowDiv.appendChild(id);
        self.userListDiv.appendChild(rowDiv);
    }

    function showDetail(userId) {
        if (!userId) { return; }

        const detailUserDiv = document.querySelector('#user-detail-container'),
            user = userModel.getUser(userId);

        setDetailUserDiv(user);

        detailUserDiv.className = 'make-hidden';
        setTimeout( () => {//animation
            detailUserDiv.className = 'make-visible';
        },300);
    }

    function setDetailUserDiv(user) {
        const firstName = document.querySelector('#user_firstName'),
            lastName = document.querySelector('#user_lastName'),
            isAdmin = document.querySelector('#user_isAdmin'),
            groupId = document.querySelector('#user_group_id');

        firstName.textContent = user.firstName;
        lastName.textContent = user.lastName;
        isAdmin.textContent = user.isAdmin;
        groupId.textContent = user.group_id;
    }

    function hideDetail() {
        const detailUserDiv = document.querySelector('#user-detail-container');

        detailUserDiv.className = 'make-hidden';
    }
})(userModel);
