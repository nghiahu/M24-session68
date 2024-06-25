// reducers/bookReducer.js
import { ADD_BOOK, DELETE_BOOK, UPDATE_STATUS, UPDATE_BOOK } from "../../actions/actions";
import { Book } from "../../interface/interface";

const initialBook: Book[] = [
    {
        id: 1,
        name: "dạy con làm giàu",
        borrow: "24/06/2024",
        pay: "25/06/2024",
        student: "huyền",
        status: false,
    },
    {
        id: 2,
        name: "nhà giả kim",
        borrow: "24/06/2024",
        pay: "27/06/2024",
        student: "quỳnh",
        status: true,
    },
    {
        id: 3,
        name: "cha giàu cha nghèo",
        borrow: "20/06/2024",
        pay: "29/06/2024",
        student: "lan anh",
        status: false,
    },
];

export const bookReducer = (state = initialBook, action: any) => {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, action.payload];
        case DELETE_BOOK:
            return state.filter((book) => book.id !== action.payload);
        case UPDATE_STATUS:
            let confirmUpdateStatus = window.confirm("bạn có muốn update trạng thái hay không?");
            if (!confirmUpdateStatus) {
                return state;
            }
            return state.map((book) =>
                book.id === action.payload ? { ...book, status: !book.status } : book
            );
        case UPDATE_BOOK:
            return state.map((book) =>
                book.id === action.payload.id ? { ...book, ...action.payload } : book
            );
        default:
            return state;
    }
};
