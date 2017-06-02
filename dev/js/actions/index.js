export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const selectCell = (cell) => {
    console.log("You clicked on cell: ", cell.first);
    return {
        type: 'CELL_SELECTED',
        payload: cell
    }
};
