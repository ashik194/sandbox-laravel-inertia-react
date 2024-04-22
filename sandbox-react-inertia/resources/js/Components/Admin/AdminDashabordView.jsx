export default function AdminDashboard({ children }) {
  return (
    <>
      <div className='px-4 py-2 shadow-md bg-white'>
        <h4 className='text-[15px] font-bold uppercase '>Admin Dashboard</h4>
      </div>
      <div className='min-w-screen min-h-screen p-4 bg-[#F3F3F9]'>
        {children}
      </div>
    </>
  )
}
