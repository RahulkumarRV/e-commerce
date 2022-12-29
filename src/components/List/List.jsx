import React from 'react'
import './List.scss';
import Card from '../Card/Card'

function List() {

    const data = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            img2: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwc2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            img2: 'https://media.istockphoto.com/id/930027206/photo/bright-brunette-woman-in-black-tshirt.jpg?s=170667a&w=0&k=20&c=Xui-mAifa-tJSrox6trM32fOJqXDw8R_IKP1fSNXUro=',
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: 'https://media.istockphoto.com/id/647437290/photo/smiling-african-woman-walking-with-cell-phone.jpg?s=170667a&w=0&k=20&c=mHOCP91xsPWFvVkGYc8oeDiK_HyKjFiYte4IoNcPKMY=',
            img2: 'https://images.unsplash.com/photo-1492271968957-e7093dd1a87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1242&q=80',
            title: "Long Sleeve Graphic T-shirt",
            isNew: false,
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1585145197502-8f36802f0a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            img2: 'https://images.unsplash.com/photo-1585145197082-dba095ba01ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: "Long Sleeve Graphic T-shirt",
            isNew: false,
            oldPrice: 19,
            price: 12
        }
    ]

  return (
    <div className='list'>
        {
            data?.map(item => {
                return (
                    <Card key={item.id} item={item} />
                );
            })
        }
    </div>
  )
}

export default List