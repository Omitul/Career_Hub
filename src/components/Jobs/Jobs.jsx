import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { LuDollarSign } from "react-icons/lu";
function Jobs({ job }) {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={logo} alt="logo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {job_title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{company_name}</p>
                    <div >
                        <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]'>{remote_or_onsite}</button>
                        <button className='ml-4 px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]'>{job_type}</button>
                    </div>
                    <div className='flex gap-x-4'>
                        <div className='flex items-center '>
                            <h3 className='text-2xl '><FaLocationDot /></h3> {location}
                        </div>
                        <div className='flex items-center '>
                            <h3 className='text-2xl '> <LuDollarSign /></h3> {salary}
                        </div>
                    </div>
                    <div>
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs