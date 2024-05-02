import Button from '@/Components/Button'
import Switch from '@/Components/Switch'
import porsonImage from '../../../../public/person1.jpg'

export default function ClientList({clients}) {
    console.log(clients)
    return (

        <>
            <div className='grid grid-cols-2'>

                <div className="col-span-2 flex flex-col justify-center bg-white rounded w-auto ">

                    <div className="flex flex-row items-center border-[#e9ebec] border-b p-4">
                        <h4 className="text-base font-medium text-[#495057]">Client List</h4>
                    </div>

                    <div className="max-w-screen p-4 overflow-x-auto">

                        <table className="table-auto w-full">

                            <thead className='bg-[#F3F6F9] text-black'>
                                <tr>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Client ID</th>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Client Secret</th>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Name</th>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Email</th>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Logo</th>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Redirect URI</th>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Post logout URI</th>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Policy URI</th>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Initial Login URI</th>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Status</th>
                                    <th className="text-start text-xs font-semibold px-2.5 py-3">Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {clients?.map((client) => 
                            <tr className='border-[#ebece9] border-t' key={client.id}>

                                    <td className="px-2.5 py-3">
                                        <span className="text-xs font-medium text-[#405189]">{client.id}</span>
                                    </td>

                                    <td className="px-2.5 py-3">
                                        <span className="text-xs font-medium text-[#405189]">{client.secret}</span>
                                    </td>

                                    <td className="px-2.5 py-3">
                                        <p className="text-xs font-normal">{client.name}</p>
                                    </td>

                                    <td className="px-2.5 py-3">
                                        <span className="text-xs font-normal">{client.email}</span>
                                    </td>

                                    <td className="px-2.5 py-3">
                                        <div class="flex flex-row items-center pr-8 gap-2">
                                            <img src={porsonImage} alt="" class="w-6 h-6 rounded-full object-cover" />

                                            <p class="text-xs font-normal">Logo</p>
                                        </div>
                                    </td>

                                    <td className="px-2.5 py-3">
                                        <span className="text-xs font-normal flex flex-col">
                                            {/* <p>http://localhost:3000/admin</p>
                                            <p>http://localhost:3000/admin</p>
                                            <p>http://localhost:3000/admin</p> */}
                                        </span>
                                    </td>

                                    <td className="px-2.5 py-3">
                                        {/* <span className="text-xs font-normal">http://localhost:3000/postlg</span> */}
                                    </td>

                                    <td className="px-2.5 py-3">
                                        {/* <span className="text-xs font-normal">http://localhost:3000/poicyuri</span> */}
                                    </td>

                                    <td className="px-2.5 py-3">
                                        {/* <span className="text-xs font-normal">http://localhost:3000/initial</span> */}
                                    </td>

                                    <td className="px-2.5 py-3">
                                        <span className="flex sm:flex-col md:flex-row gap-2">
                                            <Switch
                                                initialStatus={"Approved"}
                                                toggleStatus={"Disapproved"} />
                                        </span>
                                    </td>

                                    <td className="px-2.5 py-3">
                                        <span className="flex sm:flex-col md:flex-row gap-2">
                                            <Button className={"bg-black text-xs rounded px-[15px] py-2 hover:bg-[#343A40] text-white"} text={"Edit"} />
                                            <Button className={"bg-[#f06548] text-xs rounded px-[15px] py-2 hover:bg-[#CC563D] text-white"} text={"Delete"} />
                                        </span>
                                    </td>
                                </tr>
                            )}

                                


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}