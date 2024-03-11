import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
// Service 
const ServiceDetails = () => {
  const [data, setData] = useState({});
  const {id} = useParams();
  const services = useLoaderData();
  console.log(id);
 
  useEffect(() => {
    const singleService = services?.find(service => id === service.id)
    setData(singleService);
    console.log(singleService);
  
  },[id,services])
  return (
    <div className='py-10'>
      <section className="p-4 lg:p-8  dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={data.image} alt="" className=" dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              
              <h3 className="text-3xl font-bold">{data.name }</h3>
              <h3 className="text-3xl font-bold text-pink-700 mt-8">Price : {data.price }</h3>
              <p className="my-6 dark:text-gray-400">{data.description }</p>
              <div className='flex gap-5 justify-center'>
                <button type="button" className="self-start btn border-none text-white bg-pink-700">Book Now</button>
                <Link to='/'>
                  <button type="button" className="self-start ml-10 btn border-none text-white bg-pink-700">Back to Home</button>
                </Link>
        </div>
			</div>
		</div>
	
	</div>
</section>
    </div>
  );
};

export default ServiceDetails;