import React from 'react';
import '../bookStore-home/bookStore-home.css';
import Card from './Card';
import logo from '../../images/open-book.png';
import search from '../../images/search.png';
import cart from '../../images/shopping-cart (1).png';
import BookService from '../../service/bookStoreService'


class BookStoreHome extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            bookData : []
        };
        this.bookservice = new BookService();
    }

    componentDidMount(){
        this.getBookData();
    }

    getBookData = () => {
        this.bookservice.getAllBooks()
        .then(responseDTO => {
            let books = responseDTO.data;
            console.log("Data recieved after GET call successful" + books.data);
            this.setState({bookData:books.data});
        }).catch(error => {
            console.log("Error while Getting Data From Server");
        })
    }

    render(){
        return(
            <>
            <div>
                <nav className="navigation-bar">
                        <div className="bookstore-nav">
                            <img className="bookstore-img" src={logo} alt="logo"></img>
                            <div className="bookstore-text">Bookstore</div>
                        </div>
                        <div className="search-bar">
                            <img className="search-img" src={search} alt="search"></img>
                            <input type="text" className="search-input" placeholder="Search..."/>
                        </div>
                        <div className="cart-nav">
                            <p className="cart-txt">Cart</p>
                            <img className="cart-img" src={cart} alt="cart"></img>
                        </div>
                </nav>{/*End of NavBar*/}
                <div className="book-details">
                    <h1 className= 'heading_style'>Books</h1>
                    {this.state.bookData.map(function ncard(val){
                        return(
                            <Card
                            key={val.bookId}
                            imgsrc={val.imageURL}
                            authorName={val.authorName}
                            bookName={val.bookName}
                            price={val.bookPrice}
                            />
                        )
                    })}
                </div>
                {/*Start of Footer*/}
                <footer className="footer-bar">
                        <div className="footer-txt"><p>Copyright © 2021, Bookstore Private Limited. All Rights Reserved</p></div>
                </footer>
                
            </div>
            </>
        )
    }
}
export default BookStoreHome;