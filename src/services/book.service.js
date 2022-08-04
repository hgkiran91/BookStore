import Book from '../models/book.model';

//get all books
export const getALLBooks = async () => {
    const data = await Book.find();
    return data;
  };

// get single note
export const getBook = async (_id) => {
    const data = await Book.findById({_id: _id});
    return data;
};