'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import profile from '/public/assets/profile.gif'
import avatar from '/public/assets/avatar.gif'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/userActions'

const PaymentPage = ({ username }) => {
  const { data: session } = useSession();

  const [paymentform, setpaymentform] = useState({})
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])

  useEffect(() => {
    getData()

  }, [])


  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setcurrentUser(u)

    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
    console.log(u, dbpayments)
  }
  const pay = async (amount) => {
    //Get order Id
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id

    //Payment
    var options = {
      "key": process.env.NEXT_PUBLIC_RPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Support Creator", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className='cover w-full relative bg-gray-300'>
        <img className='object-cover h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/6289370/d0d76f6fb03e474382ae7867dfaa779b/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/3.png?token-time=1714780800&token-hash=Qbc0q9XTj-y4kzxntQbH-tr5CqP9gPuEHiHc-jBnMX0%3D" alt="creater_profile_bg" />
        <div className='absolute -bottom-14 right-[46%] border-2 border-white rounded-full overflow-hidden'>
          <Image src={profile} height={100} width={100} alt='profile_pic' />

          {/* profile pic from github */}
          {/* <img src={session?.user.image} alt="" width={100} height={100} className='overflow-auto'/> */}
        </div>
      </div>


      <div className="classname flex flex-col justify-center items-center my-16 gap-2">
        <div className='font-bold text-lg'>

          @{username}
        </div>
        <div className='text-slate-400'>
          Welcome Welcome Welcome Welcome
        </div>
        <div className='text-slate-400'>
          37 members · 18 psts · $39/ release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 rounded-lg bg-slate-900 p-8" >
            {/* show list of supporters as leaderboard */}
            <h2 className='text-2xl font-bold my-5'>Supporters ❤️</h2>
            <ul className='mx-4 text-lg' style={{ maxHeight: "420px", overflowY: "scroll" }}>
              {payments.map((p, i) => {
                return <li key={i} className='my-4 flex gap-2 items-center'>
                  <Image className='rounded-full bg-black' src={avatar} width={33} height={33} alt="donator_avatar" />
                  <span>
                    {p.name} donated <span className='font-bold'>₹{p.amount / 100}</span> with a message "{p.message}"
                  </span>
                </li>
              })}
            </ul>
          </div>

          <div className="makePayment w-1/2 rounded-lg bg-slate-900 p-8">
            <h2 className='text-2xl font-bold my-5'>Support Darshil</h2>
            <div className='flex gap-2 flex-col'>
              <div>
                <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              </div>
              <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Custom amount' />
              <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className=" w-fit bg-[#3b5698] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2">
                <img src="https://razorpay.com/newsroom-content/uploads/2020/12/output-onlinepngtools-1-1.png" alt="" className='w-13 h-4 me-2 -ms-1' />
                Pay with Razorpay
              </button>
            </div>

            {/* Or choose from these amounts */}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg hover:text-green-600" onClick={() => pay(3000)}>Donate ₹30</button>
              <button className="bg-slate-800 p-3 rounded-lg hover:text-green-600" onClick={() => pay(5000)}>Donate ₹50</button>
              <button className="bg-slate-800 p-3 rounded-lg hover:text-green-600" onClick={() => pay(10000)}>Donate ₹100</button>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default PaymentPage