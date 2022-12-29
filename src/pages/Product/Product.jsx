import Reac, {useState} from 'react'
import './Product.scss'
import { AddShoppingCartOutlined } from '@mui/icons-material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { BalanceOutlined } from '@mui/icons-material';

function Product() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwc2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            
  ]
  const [quantity, setQuantity] = useState(1)
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedIndex(0)} />
          <img src={images[1]} alt=""  onClick={e => setSelectedIndex(1)}/>
        </div>
        <div className="mainImg">
          
          <img src={images[selectedIndex]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <div className="price">
          $199
        </div>
          <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus suscipit eos laboriosam ad voluptates nobis molestias sunt dolore consectetur illum?</p>
        
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>

        <button className="add">
          <AddShoppingCartOutlined/> ADD TO CART
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderOutlined/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceOutlined/> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Tpe: T-shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr/>
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product