import React from 'react'
import './Contact.scss'
import { FacebookOutlined } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { Google } from '@mui/icons-material'
import { Pinterest } from '@mui/icons-material'

function Contact() {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" name="input" id="" placeholder='Enter your e-mail...'/>
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookOutlined/>
                <Instagram/>
                <Twitter/>
                <Google/>
                <Pinterest/>
            </div>
        </div>
    </div>
  )
}

export default Contact