import React,{useState} from 'react'

const BookList = (props) => {
  const {title, author, image, inStock} = props;
  const [stock, setStock] = useState(inStock)
  const currentStock = () => {
    setStock(stock - 1)
  }
  
  return (
    <div>
      <h1>{title}</h1>
      <p>By {author}</p>
      <img src={image} alt="book" className="books"/>
      <p>In Stock: {stock}</p>
      <button onClick={currentStock}>Purchase</button>
    </div>
   
  )
}

export default BookList;