import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../Utilities/localStorage';

function AppliedJobs() {
  const jobs = useLoaderData();
  console.log(jobs);
  const [appliedJobs,setAppliedJobs] = useState([]);
 
  useEffect(()=>{
     const storedJobIds = getStoredJobApplication();
     if(storedJobIds.length === 0) {
      console.log('kisu store hoinai');
     }
     if(jobs.length > 0) {
      const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
      console.log(jobsApplied);

      // const jobsApplied = [];
      // for(const id of storedJobIds) {
      //   const job = jobs.find(job => job.id === id); different approach
      // } 
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
      // if(job) {
      //   jobsApplied.push(job);
      setAppliedJobs(jobsApplied);
      // }
     }
  },[]);
  return (
    <div className='text-4xl'>
      Total Applied jobs: {appliedJobs.length}
    </div>
  )
}

export default AppliedJobs