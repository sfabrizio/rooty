users.getUsers().then( (users) => {
    console.log('users', users);

    let userListDiv = document.getElementById('user-list');

    for (let i=0; i < users.length; i++){
        createUserRow(users[i]);
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
        userListDiv.appendChild(rowDiv);
    }
});
