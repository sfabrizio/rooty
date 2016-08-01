export default ( () => {
    const self = {};

    init();

    return {
        render,
        showDetail,
        hideLoadIndicator
    };

    /////////////

    function init() {
        //init stuff
        self.groupListDiv = document.getElementById('group-list');
    function hideLoadIndicator () {
        self.groupListDiv.innerHTML = '';
    }

    function render(groups) {
        for (let i = 0; i < groups.length; i++) {
            createGroupRow(groups[i]);
        }
    }

    function createGroupRow(group) {
        const groupListDiv = document.getElementById('group-list'),
            rowDiv = document.createElement('div'),
            name = document.createElement('div'),
            id = document.createElement('div');

        rowDiv.className = 'body_row';
        name.textContent = group.name;
        id.textContent = group.id;
        rowDiv.appendChild(name);
        rowDiv.appendChild(id);
        groupListDiv.appendChild(rowDiv);
    }

    function showDetail(modelID) {
        //TODO
    }
})();
