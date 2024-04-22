import { useState } from 'react';
import { BiUpArrowCircle } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import Chart from 'react-apexcharts';


export default function ClientDashboard() {
  // const [chartOptions, setChartOptions] = useState(
  //   {
  //     options: {
  //           chart: {
  //             id: 'apexchart-example'
  //           },
  //           xaxis: {
  //             categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  //           }
  //         },
  //         series1: [
  //           {
  //             name: 'series-1',
  //             data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  //           }
  //       ],
  //       series2: [
  //         {
  //           name: 'series-1',
  //           data: [90, 80, 90, 110, 100, 160, 170, 91, 125]
  //         },
  //         {
  //           name: 'series-2',
  //           data: [50, 80, 35, 50, 100, 60, 70, 91, 125]
  //         },
  //         {
  //           name: 'series-3',
  //           data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  //         }
  //       ],
  //       series3: [
  //         {
  //           name: 'series-1',
  //           data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  //         },
  //         {
  //           name: 'series-2',
  //           data: [30, 45, 40, 55, 60, 70, 90, 110, 145]
  //         }
  //       ]
  //   }
  // )
  return (
    <>
        <div className='px-6 py-2 mt-2 border border-t-0 border-b-[#e9ebec] bg-white'>
          <h4 className='text-[15px] font-bold uppercase '>Dashboard</h4>
      </div>
      <div className='px-6 mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
        <div className='col-span-1 border border-[#e9ebec] py-6 px-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 uppercase font-semibold text-[0.8125rem]'>Campaign Sent</span>
            <BiUpArrowCircle className='text-xl text-green-600' />
          </div>
          <div className='flex gap-6 mt-4 text'>
            <BiSolidUpArrow className='text-3xl text-gray-600'/>
            <h3 className='text-3xl font-semibold text-gray-600'>197</h3>
          </div>
        </div>
        
        <div className='col-span-1 border border-[#e9ebec] py-6 px-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 uppercase font-semibold text-[0.8125rem]'>Campaign Sent</span>
            <BiUpArrowCircle className='text-xl text-green-600' />
          </div>
          <div className='flex gap-6 mt-4 text'>
            <BiSolidUpArrow className='text-3xl text-gray-600'/>
            <h3 className='text-3xl font-semibold text-gray-600'>197</h3>
          </div>
        </div>
        
        <div className='col-span-1 border border-[#e9ebec] py-6 px-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 uppercase font-semibold text-[0.8125rem]'>Campaign Sent</span>
            <BiUpArrowCircle className='text-xl text-green-600' />
          </div>
          <div className='flex gap-6 mt-4 text'>
            <BiSolidUpArrow className='text-3xl text-gray-600'/>
            <h3 className='text-3xl font-semibold text-gray-600'>197</h3>
          </div>
        </div>
        
        <div className='col-span-1 border border-[#e9ebec] py-6 px-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 uppercase font-semibold text-[0.8125rem]'>Campaign Sent</span>
            <BiUpArrowCircle className='text-xl text-green-600' />
          </div>
          <div className='flex gap-6 mt-4 text'>
            <BiSolidUpArrow className='text-3xl text-gray-600'/>
            <h3 className='text-3xl font-semibold text-gray-600'>197</h3>
          </div>
        </div>
        
        <div className='col-span-1 border border-[#e9ebec] py-6 px-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 uppercase font-semibold text-[0.8125rem]'>Campaign Sent</span>
            <BiUpArrowCircle className='text-xl text-green-600' />
          </div>
          <div className='flex gap-6 mt-4 text'>
            <BiSolidUpArrow className='text-3xl text-gray-600'/>
            <h3 className='text-3xl font-semibold text-gray-600'>197</h3>
          </div>
        </div>

      </div>

      <div className='mt-6 px-6'>
      {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div
              className="col-span-1 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Sales Forecast
              </div>
              <div className='w-full '>
                <Chart options={chartOptions.options} series={chartOptions.series1} type="bar" height={320} className="w-full" />
              </div>
          </div>
          <div
              className="col-span-1 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Sales Forecast
              </div>
              <div className='w-full '>
                <Chart options={chartOptions.options} series={chartOptions.series2} type="radar" height={320} className="w-full" />
              </div>
          </div>
          <div
              className="col-span-2 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Sales Forecast
              </div>
              <div className='w-full '>
                <Chart options={chartOptions.options} series={chartOptions.series3} type="area" height={320} className="w-full" />
              </div>
          </div>
      </div> */}
      </div>
      <div className='px-6 mt-6 grid grid-cols-5 gap-6'>
          <div
              className="col-span-3 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Deals Status
              </div>
              <div class="card bg-white overflow-hidden">
                  <div class="">
                      <div class="overflow-x-auto">
                          <div class="min-w-full inline-block align-middle">
                              <div class=" overflow-hidden">
                                  <table class="min-w-full divide-y divide-gray-200">
                                      <thead className='bg-[#e9ebec]'>
                                          <tr className='text-[#878a99]'>
                                              <th scope="col" class="px-6 py-3 text-start text-sm text-gray-500">Name</th>
                                              <th scope="col" class="px-6 py-3 text-start text-sm text-gray-500">Last Contacted</th>
                                              <th scope="col" class="px-6 py-3 text-start text-sm text-gray-500">Sales Representative</th>
                                              <th scope="col" class="px-6 py-3 text-end text-sm text-gray-500">Status</th>
                                              <th scope="col" class="px-6 py-3 text-end text-sm text-gray-500">Deal Value</th>
                                          </tr>
                                      </thead>
                                      <tbody class="divide-y divide-gray-200">
                                          <tr>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Lindsay Walton</td>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sep 20, 2021</td>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Donald Risher</td> 
                                              <td class="px-6 py-4 whitespace-nowrap text-sm ">
                                                <button className='bg-green-400/30 px-2 py-1 rounded-sm text-green-600'>Deal Won</button>
                                              </td> 
                                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$100.1K</td> 
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div
              className="col-span-2 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Deals Status
              </div>
              <div class="card bg-white overflow-hidden">
                  <div class="p-4">
                      <div class="overflow-x-auto">
                          <div class="min-w-full inline-block align-middle">
                              <div class="border rounded-lg overflow-hidden">
                                  <table class="min-w-full divide-y divide-gray-200">
                                      <thead>
                                          <tr>
                                              <th scope="col" class="px-6 py-3 text-start text-sm text-gray-500">Name</th>
                                              <th scope="col" class="px-6 py-3 text-start text-sm text-gray-500">Title</th>
                                              <th scope="col" class="px-6 py-3 text-start text-sm text-gray-500">Email</th>
                                              <th scope="col" class="px-6 py-3 text-end text-sm text-gray-500">Action</th>
                                          </tr>
                                      </thead>
                                      <tbody class="divide-y divide-gray-200">
                                          <tr>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Lindsay Walton</td>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Front-end Developer </td>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">lindsay.walton@example.com</td>
                                              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                  <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                                              </td>
                                          </tr>

                                          <tr>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Courtney Henry</td>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Designer</td>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">courtneyhenry@example.com</td>
                                              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                  <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                                              </td>
                                          </tr>

                                          <tr>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Tom Cook</td>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Director of Product</td>
                                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">tom.cook@example.com</td>
                                              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                  <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

