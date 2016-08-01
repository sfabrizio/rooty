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
