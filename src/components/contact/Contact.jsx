import React from 'react'
import Heading from '../common/heading/Heading';
import "./Contact.css"
import { contact } from '../../data/data'


const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
            <Heading title="Contact US"/>

            <div className="content sbFlex">
                <div className="right">
                    <form>
                        <div className="flex">
                            <input type="text" placeholder='Name' data-aos="zoom-in-down"/>
                            <input type="email" placeholder="Email" data-aos="zoom-in-up"/>
                        </div>
                        <input type="text" placeholder='Subject' data-aos="zoom-in-up"/>
                        <textarea data-aos="zoom-in-down" name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        <button data-aos="zoom-in-down">Submit</button>
                        
                    </form>
                </div>

                <div className="left">
                    {contact.map((item)=>(
                        <div className="box" data-aos="zoom-in-down">
                            <i>{item.icon}</i>
                            <p>{item.text1}</p>
                            <p>{item.text2}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
