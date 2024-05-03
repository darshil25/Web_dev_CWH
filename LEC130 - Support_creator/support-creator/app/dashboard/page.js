'use client'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import { fetchuser, updateProfile } from '@/actions/userActions'

const Dashboard = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [form, setForm] = useState({});

  useEffect(() => {
    if(status === 'loading') return;
    if (!session) {
      router.push('/login')
    }
    else{
      getData();
    }
  }, [router, session, status])

  const getData = async () =>{
    let u = await fetchuser(session.user.name)
    setForm(u)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }



  const handleSubmit = async (e) =>{
    let a = await updateProfile(form, session.user.name)
    alert('Profile Updated')
  }

  if(status === 'loading') return <div>Loading....</div>

  return (
    <div className='container mx-auto py-5'>
      <h1 className='text-3xl text-center font-bold my-5'> Welcome to your Dashboard</h1>
      <form className='max-w-2xl mx-auto' action={handleSubmit}>

{/* name */}
        <div className='my-2'>
          <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
          <input value={form.name ? form.name : ""} onChange={handleChange} type="text" id='name' name='name' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        {/* email */}
        <div className='my-2'>
          <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
          <input value={form.email ? form.email : ""} onChange={handleChange} type="text" id='email' name='email' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        {/* username */}
        <div className='my-2'>
          <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
          <input value={form.username ? form.username : ""} onChange={handleChange} type="text" id='username' name='username' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        {/* profile pic */}
        <div className='my-2'>
          <label htmlFor="profilePic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Profile Picture</label>
          <input value={form.profilePic ? form.profilePic : ""} onChange={handleChange} placeholder='Enter URL Only' type="text" id='profilePic' name='profilePic' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        {/* cover pic */}
        <div className='my-2'>
          <label htmlFor="coverPic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Cover Picture</label>
          <input value={form.coverPic ? form.coverPic : ""} onChange={handleChange} placeholder='Enter URL Only' type="text" id='coverPic' name='coverPic' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        {/* razorpay id */}
        <div className='my-2'>
          <label htmlFor="razorid" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay ID</label>
          <input value={form.razorid ? form.razorid : ""} onChange={handleChange} type="text" id='razorid' name='razorid' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        {/* razorpay key */}
        <div className='my-2'>
          <label htmlFor="razorkey" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay Secret Key</label>
          <input value={form.razorkey ? form.razorkey : ""} onChange={handleChange} type="text" id='razorkey' name='razorkey' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        {/* Save */}
        <div className="my-4">

        <button type="submit" className="block w-full p-2 bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-500 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm">
          Save
        </button>
        </div> 

      </form>
    </div>
  )
}

export default Dashboard