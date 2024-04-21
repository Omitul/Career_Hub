import React, { useEffect, useState } from 'react'
import Jobs from '../Jobs/Jobs';

function FeaturedJobs() {
    const [jobs, setJobs] = useState([]);
    const [dataLength,set_DataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-5xl'>
                    Featured Jobs:{jobs.length}

                </h2>
                <p>
                    Explore Thousand of jobs opportunities with all the information you need. Its your future
                </p>
            </div>

            <div className='grid grid-cols-3 gap-8'>
                {
                    jobs.slice(0,dataLength).map((job)=> <Jobs key = {job.id} job = {job}></Jobs>)
                }
            </div>

            <div className= {dataLength === jobs.length? 'hidden':''}>
                <button
                 onClick={()=> set_DataLength(jobs.length)}
                 className='btn btn-primary'>Show All Jobs</button>
            </div>
        </div>

    )
}

export default FeaturedJobs