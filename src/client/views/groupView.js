import { _document } from '../globals';

const imports = [ _document];

export default ( (_document) => {
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
        self.groupListDiv = _document.querySelector('#group-list');
    }

    function hideLoadIndicator () {
        self.groupListDiv.innerHTML = '';
    }

    function render(groups) {
        for (let i = 0; i < groups.length; i++) {
            createGroupRow(groups[i]);
        }
    }

    function createGroupRow(group) {
        const groupListDiv = _document.querySelector('#group-list'),
            rowDiv = _document.createElement('div'),
            name = _document.createElement('div'),
            id = _document.createElement('div');

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
})(...imports);
