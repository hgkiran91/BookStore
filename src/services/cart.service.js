import Book from '../models/book.model';
import Cart from '../models/cart.model';

//add books to cart
export const addBookToCart = async (email, params_book_id) => {
    const checkBook = await Book.findOne({ _id: params_book_id });
    console.log("Check book", checkBook);
    if (checkBook) {
        const userCart = await Cart.findOne({ userId: email });
        console.log("Book Exists");
        let bookInfo = {
            'productId': checkBook._id,
            'description': checkBook.description,
            'bookName': checkBook.bookName,
            'bookImage': checkBook.bookImage,
            'author': checkBook.author,
            'price': parseInt(checkBook.price),
        }
        console.log("This is the typeof bookInfo.price", typeof bookInfo.price)
        if (userCart == null) {
            console.log("For new User");
            const createCart = await Cart.create({ UserId: email, books: [bookInfo], cart_total: checkBook.price})
            return createCart;
        } else {
            console.log("For Existing User");
            let bookFound = false
            let totalPrice = 0
            userCart.books.forEach(element => {
                if (element.productId == params_book_id) {
                    element.quantity = element.quantity + 1
                    totalPrice = totalPrice + (element.price * element.quantity);
                    bookFound = true
                }else{
                    totalPrice = totalPrice + (element.price * element.quantity);
                    console.log("Cart Total after adding the same book:", totalPrice);
                }
            });
            if (bookFound == false) {
                userCart.books.push(bookInfo)
                console.log("added a new book");
                totalPrice = totalPrice + bookInfo.price;
                console.log("Cart Total after adding the book:", totalPrice);
            }
            let cartView = await Cart.findOneAndUpdate({UserId: email}, {books: userCart.books, cart_total: totalPrice}, {new: true})
            return cartView;
        }
    } else {
        throw new Error("Book doesn't Exist");
    }
}
