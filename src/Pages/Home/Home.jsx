import React from 'react';
import Price from '../../components/Price/Price';
import Team from '../../components/Team/Team';
import Banner from '../../components/Banner/Banner';
import Service from '../../components/Service/Service';
import { useLoaderData } from 'react-router-dom';
import Services from '../../components/Services/Services';

// Home 

const Home = () => {
  const services = useLoaderData()
  
  return (
    <div className=' '>
       
        <Banner />
      <Services services={services} />
      <Team />
      <Price />
      
      
    </div>
  );
};

export default Home;
