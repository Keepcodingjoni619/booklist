import './App.css';
import React from 'react'
import BookList from './components/Booklist';

 function App() {
  const books = [
    {
      id: 1,
      author: "James Clear",
      title: "Atomic Habits",
      image: "https://m.media-amazon.com/images/I/71F4+7rk2eL._AC_UY436_FMwebp_QL65_.jpg",
      inStock: 22
    },
    {
      id: 2,
      author: "Alex Michealidas",
      title: "Atomic Habits",
      image: "https://m.media-amazon.com/images/I/81LFAmKY4FL._AC_UY436_FMwebp_QL65_.jpg",
      inStock: 5
    },
    {
      id: 3,
      author: "Colleen Hoover",
      title: "Regretting You",
      image: "https://m.media-amazon.com/images/I/713cjPM+EJL._AC_UY436_FMwebp_QL65_.jpg",
      inStock: 10
    },
  ]
  return (
    <div className="App">
     {books.map((book, index) => {
       return (
         <BookList 
         title={book.title} 
         author={book.author} 
         image={book.image} 
         inStock={book.inStock} />
       )
     })}
    </div>
  );
}
export default App;