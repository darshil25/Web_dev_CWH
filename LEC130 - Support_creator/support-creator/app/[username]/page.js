import Image from 'next/image'
import React from 'react'
import profile from '../../public/assets/profile.gif'
import avatar from '../../public/assets/avatar.gif'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full relative bg-gray-300'>
        <img className='object-cover h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/6289370/d0d76f6fb03e474382ae7867dfaa779b/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/3.png?token-time=1714780800&token-hash=Qbc0q9XTj-y4kzxntQbH-tr5CqP9gPuEHiHc-jBnMX0%3D" alt="creater_profile_bg" />
        <div className='absolute -bottom-14 right-[46%] border-2 border-white  rounded-full'>
          <Image className='rounded-full bg-black' src={profile} width={100} height={100} alt="creater_profile" />
        </div>
      </div>

      <div className="classname flex flex-col justify-center items-center my-16 gap-2">
        <div className='font-bold text-lg'>

          @{params.username}
        </div>
        <div className='text-slate-400'>
          Welcome Welcome Welcome Welcome
        </div>
        <div className='text-slate-400'>
          37 members · 18 psts · $39/ release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 rounded-lg bg-slate-900 p-8">
            {/* show list of supporters as leaderboard */}
            <h2 className='text-2xl font-bold my-5'>Supporters ❤️</h2>
            <ul className='mx-4 text-lg'>
              <li className='my-4 flex gap-2 items-center'>
                <Image className='rounded-full bg-black' src={avatar} width={33} height={33} alt="donator_avatar"/>
                Harsh sir donated <span className='font-bold'>$30</span> with a message "Big fan sir"
                </li>
              <li className='my-4 flex gap-2 items-center'>
                <Image className='rounded-full bg-black' src={avatar} width={33} height={33} alt="donator_avatar"/>
                Harsh sir donated <span className='font-bold'>$30</span> with a message "Big fan sir"
                </li>
              <li className='my-4 flex gap-2 items-center'>
                <Image className='rounded-full bg-black' src={avatar} width={33} height={33} alt="donator_avatar"/>
                Harsh sir donated <span className='font-bold'>$30</span> with a message "Big fan sir"
                </li>
              <li className='my-4 flex gap-2 items-center'>
                <Image className='rounded-full bg-black' src={avatar} width={33} height={33} alt="donator_avatar"/>
                Harsh sir donated <span className='font-bold'>$30</span> with a message "Big fan sir"
                </li>
              <li className='my-4 flex gap-2 items-center'>
                <Image className='rounded-full bg-black' src={avatar} width={33} height={33} alt="donator_avatar"/>
                Harsh sir donated <span className='font-bold'>$30</span> with a message "Big fan sir"
                </li>

            </ul>
          </div>

          <div className="makePayment w-1/2 rounded-lg bg-slate-900 p-8">
            <h2 className='text-2xl font-bold my-5'>Support Darshil</h2>
            <div className='flex gap-2 flex-col'>
              <div>
                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              </div>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter amount' />
              <button type="button" className=" w-fit bg-[#3b5698] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2">
                <img src="https://razorpay.com/newsroom-content/uploads/2020/12/output-onlinepngtools-1-1.png" alt="" className='w-13 h-4 me-2 -ms-1'/>
                Pay with Razorpay
              </button>
            </div>

            {/* Or choose from these amounts */}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg">Donate $10</button>
              <button className="bg-slate-800 p-3 rounded-lg">Donate $20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Donate $30</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Username