import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosBusiness} from 'react-icons/io' 
import {RiIndeterminateCircleFill} from 'react-icons/ri'
import {LiaFileInvoiceDollarSolid} from 'react-icons/lia'
import {FaHandshakeSimple} from 'react-icons/fa6'
import {MdKeyboardBackspace} from 'react-icons/md'
import {BiSolidPurchaseTag} from 'react-icons/bi'


import Typewriter from './Typewriter'

const DocDrafter = () => {
    const text = ["Your Go-To Document Generator",3000, "Your Go-To Documentation Guide",3000]
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-5xl p-2 mt-[10vh] font-poppins font-bold italic'>DocDrafter</p>
        <div className='text-2xl mt-[10vh] font-poppins tracking-[.3rem] text-center m-5 '>
            <Typewriter text={text} repeat={Infinity} speed={80} />
        </div>
        <div className=' mt-[10vh]'>
            <div>
                <div className='flex justify-center gap-10 flex-wrap pb-[15vh] m-10 '>
                    <Link target='_blank' to="https://consumerhelpline.gov.in/NCH%20Company%20Registration%20Form.pdf">
                        <div className='p-6 font-poppins rounded-xl border-white border-2 hover:bg-[#3b3b3b] hover:p-10 hover:scale-110 duration-300 min-h-full shadow-lg shadow-[#5c5c5c] max-w-lg'>
                            <IoIosBusiness size={40} className='mb-5'/>
                            <h5 className='mb-5 text-2xl font-bold tracking-[.25rem] text-white'>Business Registration</h5>
                            <p className='tracking-[.3rem] leading-7'>Form For Officially Registering Your Company</p>
                        </div>
                    </Link>
                    <Link target='_blank' to="https://www.keka.com/media/2021/06/18-Employee-Termination-Letter-Samples.pdf">
                        <div className='p-6 font-poppins rounded-xl border-white border-2 hover:bg-[#3b3b3b] hover:p-10 hover:scale-110 duration-300 min-h-full shadow-lg shadow-[#5c5c5c]'>
                            <RiIndeterminateCircleFill size={40} className='mb-5'/>
                            <h5 className='mb-5 text-2xl font-bold tracking-[.25rem] text-white'>Termination Letter</h5>
                            <p className='tracking-[.3rem] leading-7'>A letter to terminate an agreement</p>
                        </div>
                    </Link>
                    <Link target='_blank' to="https://cbic-gst.gov.in/aces/Documents/draft-formats-under-invoice-rules.pdf">
                        <div className='p-6 font-poppins rounded-xl border-white border-2 hover:bg-[#3b3b3b] hover:p-10 hover:scale-110 duration-300 min-h-full shadow-lg shadow-[#5c5c5c]'>
                            <LiaFileInvoiceDollarSolid size={40} className='mb-5'/>
                            <h5 className='mb-5 text-2xl font-bold tracking-[.25rem] text-white'>GST Invoice</h5>
                            <p className='tracking-[.3rem] leading-7'>Receipt Of Sale With GST Number</p>
                        </div>
                    </Link>
                    <Link target='_blank' to="https://www.startupindia.gov.in/content/dam/invest-india/Templates/public/Tools_templates/internal_templates/startup_founders_sha_sample.pdf">
                        <div className='p-6 font-poppins rounded-xl border-white border-2 hover:bg-[#3b3b3b] hover:p-10 hover:scale-110 duration-300 min-h-full shadow-lg shadow-[#5c5c5c]  max-w-xl'>
                            <FaHandshakeSimple size={40} className='mb-5'/>
                            <h5 className='mb-5 text-2xl font-bold tracking-[.25rem] text-white'>Shareholder Agreement</h5>
                            <p className='tracking-[.3rem] leading-7'>A Draft Contract Between The Shareholders of a Company</p>
                        </div>
                    </Link>
                    <Link target='_blank' to="https://www.smartsheet.com/sites/default/files/IC-Blank-Purchase-Order-Form-9181-PDF.pdf">
                        <div className='p-6 font-poppins rounded-xl border-white border-2 hover:bg-[#3b3b3b] hover:p-10 hover:scale-110 duration-300 min-h-full shadow-lg shadow-[#5c5c5c] max-w-xl'>
                            <BiSolidPurchaseTag size={40} className='mb-5'/>
                            <h5 className='mb-5 text-2xl font-bold tracking-[.25rem] text-white'>Purchase Order</h5>
                            <p className='tracking-[.3rem] leading-7'>Official Order For A Business-to-Business Bulk Purchase</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
        <Link to="/">
            <div className='flex items-center gap-3 mb-[8vh] bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black text-white rounded-md p-5 text-lg duration-300'>
                <MdKeyboardBackspace />
                <p>Back</p>
            </div>
        </Link>
      </div>

    </div>
  )
}

export default DocDrafter
