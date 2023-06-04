import { useState } from 'react';
import HeadTitle from '../headTitle/HeadTitle'
import './Design.css'
import { Link } from 'react-router-dom';

function login() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault();
        const newValue = {  email, password }
        setAllValue([...allValue, newValue])

        setEmail('')
        setPassword('')
        
    }
  return (
    <>
          <HeadTitle />
          
          <section className="forms top">
              <div className="container">
                  <div className="signBox">
                      <p>Enter your email and password below to login to your account and use the benifits of our website</p>

                      <form action="" onSubmit={formSubmit}>
                      
                          
                          <input type="text" name='email' id='' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                          <input type="password" name='password' id='' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                         
                          <div className="flexSpace">
                              <div className="flex">
                                  <input type="checkbox" name="" id="" />
                                  <label htmlFor="">Remember Me</label>
                              </div>

                              <div className="flex">
                                  <span>I forgot my pasword</span>
                              </div>
                          </div>
                              <button type='submit' className='globalBtn'>Sign In</button>

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
                  const {  email, password } = currentValue
                  return (

                      <div className="signBox">
                          <h1>SignIn Successfully</h1>
                          <h3>Email : <p>{email}</p> </h3>
                          <h3>Password : <p>{password}</p> </h3>
                      </div>
                  )
              })}
          </section>
    </>
  )
}

export default login
