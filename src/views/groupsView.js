var groupView = (() => {
    'use strict';

    init();

    return {
        loadGroups: loadGroups,
        showDetail:showDetail,
        hideDetail: hideDetail
    };

    /////////////

    function init() {
        //init groupView
    }

    function loadGroups(groups) {
        for (let i = 0; i < groups.length; i++) {
            createGroupRow(groups[i]);
        }
    }

    function createGroupRow(group) {
        let groupListDiv = document.getElementById('group-list'),
            rowDiv = document.createElement("div"),
            name = document.createElement("div"),
            id = document.createElement("div");

        rowDiv.className = 'body_row';
        name.textContent = group.name;
        id.textContent = group.id;
        rowDiv.appendChild(name);
        rowDiv.appendChild(id);
        groupListDiv.appendChild(rowDiv);
    }

    function showDetail(modelID) {
        let detailGroupxDiv = document.querySelector('#group-detail-container');
        detailGroupDiv.style.display = 'block';
    }

    function hideDetail() {
        let detailGroupxDiv = document.querySelector('#group-detail-container');
        detailGroupDiv.style.display = 'none';
    }
})();




