import heroImg from '../../assets/hero.png';
import { FaCalendar, FaLandmark, FaLocationArrow, FaMicrophone, FaPersonBooth } from "react-icons/fa";
import moment from 'moment';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    AOS.init(
      { duration: 2000 },
      { offset: 300 }
    );
  }, []);
  return (
    <div className='bg-gradient-to-t  from-white  to-pink-300'>
      <div className="hero min-h-screen" >
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <div className="hero min-h-screen ">
  <div className="hero-content lg:gap-20  flex-col lg:flex-row-reverse">
                <img data-aos="flip-left" src={heroImg} className=" rounded-lg " />
                {/* text */}
                  <div data-aos="fade-down">
                  <p className='text-gray-800 text-xl flex items-center  gap-2 mb-2'>
                    <FaCalendar />
                    {moment().format('MMMM, Do YYYY')}
                  </p>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl leading-relaxed  text-gray-800 uppercase font-bold">Events,meetups  </h1>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl mt-3 mb-10 leading-relaxed  text-gray-600 uppercase font-bold"> & <span className=' text-pink-700'>conferences</span></h1>
                  <div className='flex gap-24 mt-5 '>
                    <div className='flex items-center gap-3'>
                      <FaPersonBooth className=' text-pink-700' />
                      <p className='font-bold text-gray-600'>500 <span className='f font-medium'>Seat</span></p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <FaMicrophone className=' text-pink-700' />
                      <p className='font-bold text-gray-600'>10 <span className='f font-medium'>Speaker</span></p>
                    </div>
                  </div> 
                  <div className='font-bold text-gray-600 flex items-center gap-3 mt-5'>
                    <FaLandmark className=' text-pink-700'  />
                    1356 Broadway, New York
                  </div>
                  <div className='flex gap-10 mt-10'>
                    <button className='btn bg-pink-700 text-white font-bold'>Book Now</button>
                    <button className='btn text-pink-700  border-2 border-pink-700 font-bold bg-pink-200'>View Details</button>
      </div>
    </div>
                
              
  </div>
</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;