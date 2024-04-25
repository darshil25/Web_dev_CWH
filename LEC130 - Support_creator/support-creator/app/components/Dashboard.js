
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import CBbutton from '../reusable/CB_button'
import GBbutton from '../reusable/GB_button'

const Dashboard = () => {
  const { data: session } = useSession()
  const [form, setForm] = useState([]);
  
  useEffect(() => {
    const router = useRouter()
    if (!session) {
      router.push('/login')
    }
  }, [router, session])



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className='container mx-auto py-5'>
      <h1 className='text-3xl text-center font-bold my-5'> Welcome to your Dashboard</h1>
      <form action="" className='max-w-2xl mx-auto'>

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
          <input value={form.profilePic ? form.profilePic : ""} onChange={handleChange} type="text" id='profilePic' name='profilePic' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        {/* cover pic */}
        <div className='my-2'>
          <label htmlFor="coverPic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Cover Picture</label>
          <input value={form.coverPic ? form.coverPic : ""} onChange={handleChange} type="text" id='coverPic' name='coverPic' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        {/* razorpay id */}
        <div className='my-2'>
          <label htmlFor="razorid" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay ID</label>
          <input value={form.razorid ? form.razorid : ""} onChange={handleChange} type="text" id='razorid' name='razorid' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        <div className='my-2'>
          <label htmlFor="razorkey" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay Secret Key</label>
          <input value={form.razorkey ? form.razorkey : ""} onChange={handleChange} type="text" id='razorkey' name='razorkey' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>

        <button type="button" classNameName="mt-2 w-[full] bg-[#2b4890] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2">
          Save
        </button>
      </form>
    </div>
  )
}

export default Dashboard