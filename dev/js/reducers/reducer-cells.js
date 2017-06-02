/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    let cols = [
        { id: 'firstName', label: 'First Name' },
        { id: 'lastName', label: 'Last Name' }
    ];

    let data = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Bob', lastName: 'Marley' }
    ];

    let tableData = {
        cols: cols,
        data: data,
    };

    return tableData;
}
