import React from 'react'
import { useState } from 'react'

function ContactForm() {

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault();
        const newValue = { fName, lName, phone, email, subject, company, message }
        setAllValue([...allValue, newValue])

        setFName('')
        setLName('')
        setPhone('')
        setEmail('')
        setSubject('')
        setCompany('')
        setMessage('')
    }
    return (
        <>
            <section className='contact mtop'>
                <div className="container flex">
                    <div className="mainContent">
                        <h2>Contact Form</h2>
                        <p>Fill out the form below, we will get back you soon</p>


                        <form action="" onSubmit={formSubmit}>
                            <div className="grid1">
                                <div className="input">
                                    <span>
                                        First Name <label>*</label>
                                    </span>
                                    <input type="text" name='fName' id='' value={fName} onChange={(e) => setFName(e.target.value)} />
                                </div>

                                <div className="input">
                                    <span>
                                        Last Name <label>*</label>
                                    </span>
                                    <input type="text" name='lName' id='' value={lName} onChange={(e) => setLName(e.target.value)} />
                                </div>

                                <div className="input">
                                    <span>
                                        Phone Number <label>*</label>
                                    </span>
                                    <input type="text" name='phone' id='' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className="input">
                                    <span>
                                        Email <label>*</label>
                                    </span>
                                    <input type="email" name='email' id='' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="input">
                                    <span>
                                        Subject 
                                    </span>
                                    <input type="text" name='subject' id='' value={subject} onChange={(e) => setSubject(e.target.value)} />
                                </div>
                                <div className="input">
                                    <span>
                                        Your Company 
                                    </span>
                                    <input type="text" name='company' id='' value={company} onChange={(e) => setCompany(e.target.value)} />
                                </div>


                            </div>
                            <div className="input inputLast">
                                <span>
                                    Write Your Message <label>*</label>
                                </span>
                                <textarea name="messsage" id="" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <button className='globalBtn'>Submit Now</button>
                        </form>
                    </div>

                    <div className="sideContent">
                        <h3>Visit Our Location</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore corrupti est aut reiciendis mollitia.</p>
                        <br />
                        <h3>Message Us</h3>
                        <span>mohabbatrj2@gmail.com</span>
                        <br />
                        <span>+92 308 147 4911</span>

                        <br />
                        <div className="icon">
                            <h3>Follow Us</h3>
                            <div className="flexSpace">
                                <a href="">
                                    <i className='fab fa-facebook-f'></i>
                                </a>
                                <a href="">
                                    <i className='fab fa-twitter'></i>
                                </a>
                                <a href="">
                                    <i className='fab fa-linkedin'></i>
                                </a>
                                <a href="">
                                    <i className='fab fa-instagram'></i>
                                </a>
                                <a href="">
                                    <i className='fab fa-youtube'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='showData'>
                {allValue.map((currentValue) => {
                    const { fName, lName, phone, email, subject, company, message } = currentValue
                    return (

                        <div className="signBox">
                            <h1>Send Successfully</h1>

                            <h3>First Name : <p>{fName}</p> </h3>

                            <h3>Last Name : <p>{lName}</p> </h3>
                            <h3>Phone : <p>{phone}</p> </h3>
                            <h3>Email : <p>{email}</p> </h3>
                            <h3>Subject : <p>{subject}</p> </h3>
                            <h3>Company : <p>{company}</p> </h3>
                            <h3>Message : <p>{message}</p> </h3>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default ContactForm
