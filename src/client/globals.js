/*
This file contain the globals allowed to use from the browser,
these globals will be mocked on test running
*/

let _document;

try {
    _document = document;
} catch (err) {
    //mock for document
    _document = {
        querySelector: () => {}
    };
}

export  { _document };