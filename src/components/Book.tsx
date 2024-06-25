import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, deleteBook, updateStatus, updateBook } from '../actions/actions';
import { Book } from '../interface/interface';

export default function TodoBook() {
    const books: Book[] = useSelector((state: any) => state.bookReducer);
    const dispatch = useDispatch();

    const [newBook, setNewBook] = useState<Book>({
        id: 0,
        name: '',
        borrow: '',
        pay: '',
        student: '',
        status: false,
    });

    const handleAddBook = () => {
        dispatch(addBook({ ...newBook, id: books.length + 1 }));
        setNewBook({ id: 0, name: '', borrow: '', pay: '', student: '', status: false });
    };

    const handleDeleteBook = (id: number) => {
        dispatch(deleteBook(id));
    };

    const handleUpdateStatus = (id: number) => {
        dispatch(updateStatus(id));
    };

    const handleUpdateBook = (book: Book) => {
        const updatedBook = { ...book, name: book.name + ' (updated)' }; // Example update
        dispatch(updateBook(updatedBook));
    };

    return (
        <div>
            <h1>Book Management</h1>
            <div>
                <input
                    type="text"
                    placeholder="Tên sách"
                    value={newBook.name}
                    onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Người mượn"
                    value={newBook.student}
                    onChange={(e) => setNewBook({ ...newBook, student: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Ngày mượn"
                    value={newBook.borrow}
                    onChange={(e) => setNewBook({ ...newBook, borrow: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Ngày trả"
                    value={newBook.pay}
                    onChange={(e) => setNewBook({ ...newBook, pay: e.target.value })}
                />
                <button onClick={handleAddBook}>Thêm sách</button>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sách</th>
                        <th>Người mượn</th>
                        <th>Ngày mượn</th>
                        <th>Ngày trả</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book: Book, index: number) => (
                        <tr key={book.id}>
                            <td>{index + 1}</td>
                            <td>{book.name}</td>
                            <td>{book.student}</td>
                            <td>{book.borrow}</td>
                            <td>{book.pay}</td>
                            <td onClick={() => handleUpdateStatus(book.id)}>
                                {book.status ? <button>đã trả</button> : <button>chưa trả</button>}
                            </td>
                            <td>
                                <button onClick={() => handleUpdateBook(book)}>Sửa</button>
                                <button onClick={() => handleDeleteBook(book.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
