export const ADD_BOOK = "ADD_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const UPDATE_BOOK = "UPDATE_BOOK";

export const addBook = (book:any) => ({
    type: ADD_BOOK,
    payload: book,
});

export const deleteBook = (id:any) => ({
    type: DELETE_BOOK,
    payload: id,
});

export const updateStatus = (id:any) => ({
    type: UPDATE_STATUS,
    payload: id,
});

export const updateBook = (book:any) => ({
    type: UPDATE_BOOK,
    payload: book,
});
