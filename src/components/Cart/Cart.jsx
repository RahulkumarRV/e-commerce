import { DeleteOutline } from '@mui/icons-material';
import React from 'react'
import './Cart.scss'
function Cart() {

    const data = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            img2: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwc2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, iste doloribus in excepturi fuga fugiat voluptate odio ipsa porro molestias.'
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            img2: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwc2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, iste doloribus in excepturi fuga fugiat voluptate odio ipsa porro molestias.'
        },
    ]
  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {
            data?.map(item => {
                return (
                    <div className="item" key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="details">
                            <h1 className='heading'>{item.title}</h1>
                            <p>{item.desc.substring(0, 100)}</p>
                            <div className="price">1 x ${item.price}</div>
                        </div>
                        <DeleteOutline className='delete'/>
                    </div>
                );
            })
        }
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <div className='buttons'>
            <button>ADD TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    </div>
  )
}

export default Cart