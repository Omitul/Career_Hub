import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveJobApplication } from '../Utilities/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';

function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();
  const Idint = parseInt(id);
  const job = jobs.find(job => job.id === Idint);
  console.log(job);

  const handleJobs = () => {
    saveJobApplication(Idint);
    toast('Applied Succesfully!');
  }
  return (
    <div>

      <div className='grid gap-4 md:grid-cols-4'>


        <div className='border md:col-span-3'>
          <h2 className='text-4xl'>
            DETAILS BELOW
          </h2>
          <h2 className='text-2xl'>job details of: {job.job_title}</h2>
          <p>{job.company_name}</p>
        </div>

        <div className='border'>
          <h2 className='text-2xl'>
            Side Things
          </h2>
          <button onClick={handleJobs} className='btn btn-primary w-full'>Apply Now</button>
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default JobDetails;