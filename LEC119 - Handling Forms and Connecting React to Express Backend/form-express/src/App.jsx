import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'


function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) =>{
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }
  const onSubmit = async (data) => {
    //await delay(2) // simulate a delay

    let r = await fetch('http://localhost:3000/', {method:'POST', headers:{'content-type': 'application/json',
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    // if(data.username !== 'smit' || data.password !== '123smit'){
    //   setError('myForm', {message: 'username or password is incorrect'})
    // }
    // if(data.username === 'harsh'){
    //   setError('blocked', {message: 'You are banneed MF'})
    // }
  }

  return (
    <>
    {isSubmitting && <div>Loading.....</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>

          <input placeholder='username' {...register("username", {
            required: {value: true, message: 'This field is required'}, 
            minLength: {value: 3, message: 'Required min length is 3'}, 
            maxLength: {value: 8, message: 'Max length should be 8'}
            })} type="text" />

          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", {
            required: {value: true, message: 'This field is required'}, 
            minLength: {value: 3, message: 'Required min length is 3'}, 
            maxLength: {value: 8, message: 'Max length should be 8'}
          })} type="password" />

          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />

          {errors.myForm && <div className='red'>{errors.myForm.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
