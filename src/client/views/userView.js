import { _document } from '../globals';
import userModel from '../models/user';

export default ( (_document, userModel) => {
    const self = {};

    self.userListDiv = _document.querySelector('#user-list');

    return {
        render,
        showDetail,
        hideDetail,
        hideLoadIndicator
    };

    /////////////


    function hideLoadIndicator () {
        self.userListDiv.innerHTML = '';
    }

    function render(users) {
        for (let i = 0; i < users.length; i++) {
            createUserRow(users[i]);
        }
    }

    function createUserRow(user) {
        const rowDiv = _document.createElement('div'),
            name = _document.createElement('div'),
            id = _document.createElement('div');

        rowDiv.className = 'body_row';
        name.textContent = user.userName;
        id.textContent = user.id;
        rowDiv.appendChild(name);
        rowDiv.appendChild(id);
        self.userListDiv.appendChild(rowDiv);
    }

    function showDetail(userId) {
        if (!userId) { return; }

        const detailUserDiv = _document.querySelector('#user-detail-container'),
            user = userModel.getUser(userId);

        setDetailUserDiv(user);

        detailUserDiv.className = 'make-hidden';
        setTimeout( () => {//animation
            detailUserDiv.className = 'make-visible';
        },300);
    }

    function setDetailUserDiv(user) {
        const firstName = _document.querySelector('#user_firstName'),
            lastName = _document.querySelector('#user_lastName'),
            isAdmin = _document.querySelector('#user_isAdmin'),
            groupId = _document.querySelector('#user_group_id');

        firstName.textContent = user.firstName;
        lastName.textContent = user.lastName;
        isAdmin.textContent = user.isAdmin;
        groupId.textContent = user.group_id;
    }

    function hideDetail() {
        const detailUserDiv = _document.querySelector('#user-detail-container');

        detailUserDiv.className = 'make-hidden';
    }
})(_document, userModel);
