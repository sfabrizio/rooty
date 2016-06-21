groups.getGroups().then( (groups) => {
    console.log('groups', groups);

    let groupListDiv = document.getElementById('group-list');

    for (let i=0; i < groups.length; i++){
        createGroupRow(groups[i]);
    }

    function createGroupRow(group) {
        let rowDiv = document.createElement("div"),
            name = document.createElement("div"),
            id = document.createElement("div");

        rowDiv.className = 'body_row';
        name.textContent = group.name;
        id.textContent = group.id;

        rowDiv.appendChild(name);
        rowDiv.appendChild(id);
        groupListDiv.appendChild(rowDiv);
    }
});
