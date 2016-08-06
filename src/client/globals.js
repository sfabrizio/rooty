/*
This file contain the globals allowed to use from the browser,
these globals will be mocked on test running
*/

let _document, _fetch;

try {
    _document = document;
} catch (err) {
    //mock for document
    _document = {
        querySelector: () => {}
    };
}

try { //TODO: add fetch polyfill
    _fetch = window.fetch;
} catch (err) {
    _fetch = () => {};
}

export  { _document, _fetch };
