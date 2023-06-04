import React from 'react'
import HeadTitle from '../headTitle/HeadTitle'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Design.css'

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault();
        const newValue = { email, password, phone, cPassword,date }
        setAllValue([...allValue, newValue])

        setEmail('')
        setPassword('')
        setCPassword('')
        setPhone('')
        setDate('')

    }
  return (
    <>
          <HeadTitle />
          
          <section className="forms top">
              <div className="container">
                  <div className="signBox">
                      <p>Enter your detail below to register yourself on our website</p>

                      <form action="" onSubmit={formSubmit}>


                          <input type="text" name='email' id='' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                          
                          <input type="password" name='password' id='' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                          <input type="password" name='cpassword' id='' value={cPassword} onChange={(e) => setCPassword(e.target.value)} placeholder='Confirm Password' />
                          
                          <input type="text" name='phone' id='' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' />

                          <input type="date" 
                              value={date}
                              min="1950-01-01" max="2010-12-31" onChange={(e) => setDate(e.target.value)}
                              placeholder='Date of Birth'/>

                          <div className="flex confir">
                              {/* <div className="flex"> */}
                                  
                                  <input type="checkbox" />
                                  <a href="">
                                  <label htmlFor="">Confirm Our Privacy policy</label>
                                  </a>
                              {/* </div> */}

                             
                          </div>
                          <button type='submit' className='globalBtn'>Sign Up</button>

                          <p>
                              Dont Have an Account
                              <Link to='/register'> Sign Up</Link>
                          </p>

                      </form>
                  </div>
              </div>
          </section>

          <section className='showData'>
              {allValue.map((currentValue) => {
                  const { email, password, cPassword, phone, date } = currentValue
                  return (

                      <div className="signBox">
                          <h1>SignIn Successfully</h1>
                          <h3>Email : <p>{email}</p> </h3>
                          <h3>Password : <p>{password}</p> </h3>
                          <h3>Confirm Password : <p>{cPassword}</p> </h3>
                          <h3>Phone : <p>{phone}</p> </h3>
                          <h3>Date of Birth : <p>{date}</p> </h3>
                      </div>
                  )
              })}
          </section>
    </>
  )
}

export default Register
