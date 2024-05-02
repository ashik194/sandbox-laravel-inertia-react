export default function AdminDashboard({ children }) {
  return (
    <>
      <div className='min-w-screen  px-4 py-2  bg-white border-b-2'>
        <h4 className='text-[15px] font-bold uppercase '>Admin Dashboard</h4>
      </div>
      <div className='min-w-screen min-h-screen p-4 '>
        {children} 
      </div>
    </>
  )
}
