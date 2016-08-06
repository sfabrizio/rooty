import { _document, _fetch } from '../globals';

const imports = [ _document, _fetch];

export default ( (_document, _fetch) => {
    const self = {};

    self.templateUrl = 'templates/groupView.html';

    init();

    return {
        render,
        showDetail,
        hideLoadIndicator
    };

    /////////////

    function init() {
        self.template = loadTemplate().then( (response) => {
            return response.text();
        }).then( (templateString) => {
            const containerSpan = document.createElement('span');

            self.mainDivSelector = _document.querySelector('#group-container');
            containerSpan.innerHTML = templateString;
            self.mainDivSelector.appendChild(containerSpan);
            self.groupListDiv = _document.querySelector('#group-list');
        });
    }

    function loadTemplate () {
        return _fetch(self.templateUrl);
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
