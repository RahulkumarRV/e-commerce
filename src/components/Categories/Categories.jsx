import React from 'react'
import './Categories.scss'
import {Link} from 'react-router-dom'

function Categories() {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://cdn.shopify.com/s/files/1/0028/9806/7554/products/DSC08481-Edit_600x.jpg?v=1670420536" alt="" />
                <Link className='link' to='/products/1'><button>Sale</button></Link>
            </div>
            <div className="row">
                <img src="https://media.glamour.com/photos/604a7de6f810a3deda7b2ed4/master/w_1200,h_1601,c_limit/red%20hair%202%20.png" alt="" />
                <Link className='link' to='/products/1'><button>Women</button></Link>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://img.mensxp.com/media/content/2020/Mar/amp-1585669425.jpg" alt="" />
            <Link className='link' to='/products/1'><button>New Season</button></Link>
            </div>
            
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://www.pinkvilla.com/files/styles/large/public/sunglasses_for_men_0.jpg?itok=FanofYtf" alt="" />
                        <Link className='link' to='/products/1'><button>Men</button></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://40plusstyle.com/wp-content/uploads/2019/08/top10accessories.jpg" alt="" />
                        <Link className='link' to='/products/1'><button>Accessories</button></Link>
                    </div>

                </div>
            </div>
            <div className="row">
            <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/j/u/w/7-1522-multi-shozie-multicolor-original-imagegdaad9g8mvs-bb.jpeg?q=70" alt="" />
            <Link className='link' to='/products/1'><button>Shoes</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Categories