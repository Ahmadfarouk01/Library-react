import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../component/ul/Rating';
import Price from '../component/ul/Price';
import {books} from '../data'

const BookInfo = ({ books, addToCart,cart }) => {
  const {id} =  useParams();
  const book = books.find(book => +book.id === +id);
  const [added, setAdded] = useState(false);


  function addBookToCart(book){
    setAdded(true); 
    addToCart(book);
  }

  // function bookExistOnCart(){
  //   return cart.find(book => book.id === +id);
  // }

    return(
      <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                      <Link to="/books" className="book__link">
                        <FontAwesomeIcon icon="arrow-left" />
                      </Link>
                      <Link to="/book" className="book__link">
                        <h2 className='book__selected--title--top'>
                          Books
                        </h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                      <figure className='book__selected--figure'>
                        <img src= {book.url} className='book__selected--img' alt="" />
                      </figure>
                      <div className="book__selected--description">
                        <h2 className="book__selected--title">
                          {book.title}
                        </h2>
                        <Rating rating={book.rating} />
                        <div className="book__selected--price">
                          <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
                        </div>
                        <div className="book__summary">
                          <h3 className="book__summary--title">
                            Summary
                          </h3>
                          <p className="book__summary--para">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Rem dicta vero provident ratione delectus itaque. Molestias 
                             officiis delectus recusandae et!
                          </p>
                          <p className="book__summary--para">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Rem dicta vero provident ratione delectus itaque. Molestias 
                             officiis delectus recusandae et!
                          </p>
                        </div>
                        {
                          added ?( <button className='btn'>Checkout</button>
                           ) :(
                          <button className="btn" onClick={() => addToCart(book)}>
                               Add to cart
                        </button>
                           )
                        }
                      </div>
                    </div>
                </div>
            </div>
            <div className="books__container">
              <div className="row">
                  {/* <h2 className="book__selected--tittle-top">
                    Recommended Books
                  </h2> */}
                {books
                  .filter((book) => book.rating === 5 && +book.id !== +id)
                  .slice(0,4)
                  .map((book) => (
                  <book book={book} key={book.id} />
                ))}
              </div>
            </div>
        </main>
      </div>
    )
}

export default BookInfo;


// const dupeItem = cart.find(item => +item.id === +book.id)
//     if(dupeItem){
//       setCart(cart.map(item => {
//        if( item.id === dupeItem.id){
//         return{
//           ...item,
//           quantity: item.quantity +1
//         }
//        }
//        else {
//         return item
//        }
//       }))
//     }
//     else{
//       setCart([...cart, {...book, quantity :1}])
//     }