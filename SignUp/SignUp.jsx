import React, { useState } from 'react'
import style from './SignUp.module.css'

const SignUp = () => {

  const [user , setuser] = useState({
    Name : '',   Email : '',   Password : '', 
  }) 

  const data = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser({...user, [name] : value})
    // console.log(user);
  }

  const getData = async (e) => {
    e.preventDefault();
    const options = {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }

    const res =await fetch( 'https://react-job-data-default-rtdb.firebaseio.com/UserData.json' , options)
    // if (res) {
    //   alert('success')
    // }else{
    //   alert('error')
    // }
    // console.log(res);
  }

  return ( 
    <>
        <main className={`form-signin  ${style.signUp}`}>
  <form>
   
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    <div className="form-floating mb-3">
      <input type="text" className="form-control" id="floatingInput1" name='Name' value={user.Name} onChange={data} placeholder="username"/>
      <label htmlFor="floatingInput">Enter your Name</label>
    </div>
    
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput2" name='Email' value={user.Email} onChange={data} placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control mt-3" id="floatingPassword" name='Password' value={user.Password} onChange={data} placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-danger w-100 mt-4 py-2" type="submit" onClick={getData}>Sign in</button>
    <p className="mt-5 mb-3 text-body-secondary">© 2021-2024</p>
  </form>
</main>
    </>
  )
}

export default SignUp
