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
            const createCart = await Cart.create({ userId: email, books: [bookInfo], cart_total: checkBook.price })
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
                } else {
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
            let cartView = await Cart.findOneAndUpdate({ userId: email }, { books: userCart.books, cart_total: totalPrice }, { new: true })
            return cartView;
        }
    } else {
        throw new Error("Book doesn't Exist");
    }
}

//remove book from cart
export const removeBook = async (email, params_book_id) => {
    const checkCart = await Cart.findOne({ userId: email });
    if (checkCart) {
        console.log("If User Exists");
        let bookFound = false
        checkCart.books.forEach(element => {
            if (element.productId == params_book_id) {
                console.log("If Book found");
                let indexOfElement = checkCart.books.indexOf(element)
                checkCart.books.splice(indexOfElement, 1)
                bookFound = true
            }
        });
        console.log("After deleting the book",checkCart.books);
        if (bookFound == false) {
            console.log("If Book not found");
            // throw new Error("Book not in the cart");
        }

        const updatedCart = await Cart.findOneAndUpdate({ userId: email}, { books: checkCart.books }, { new: true })
        return updatedCart
    } else {
        throw new Error("User cart doesn't exist");
    }
};

//get books from cart
export const getCartBooks = async (email) => {
    const getBooks = await Cart.findOne({userId: email})
    return getBooks;
}

//isPurchased
export const purchased = async (email) => {
    const data = await Cart.findOneAndUpdate({userId: email}, {$set: {isPurchased: true}} ,{new: true})
    console.log("Purchased", data);
    return data;
}