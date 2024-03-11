import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// Price 

const Price = () => {
	useEffect(() => {
		AOS.init(
			{ duration: 2000 },
			{ offset: 300 },
		)
	}, []);
  return (
    <div>
      <section className="py-6 dark:bg-white dark:text-gray-100">
	<div className="container p-4 mx-auto sm:p-10">
		<div className="mb-12 space-y-4 text-center">
			<h1 data-aos="fade-up" className="text-2xl font-semibold text-pink-700">Ticket Plan</h1>
			<p data-aos="fade-down" className="px-4 sm:px-8 text-black font-bold text-6xl lg:px-24">GET SPONSOR TICKET</p>
			<div data-aos="flip-left">
				<button  className="px-4 py-1 font-semibold border rounded-l-lg dark:bg-pink-700 dark:border-pink-700 dark:text-white">Monthly</button>
				<button className="px-4 py-1 border rounded-r-lg dark:border-pink-700 text-black font-semibold">Annually</button>
			</div>
		</div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
            
			<div data-aos="fade-right" className="flex flex-col overflow-hidden  border rounded-md dark:border-pink-700">
				<div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 hover:bg-gray-800 dark:bg-pink-700 transition duration-300">
					<p className="text-2xl text-white font-medium">Silver</p>
					<p className="text-5xl font-bold">$
						<span className="text-xl dark:text-white">/100</span>
					</p>
				</div>
              <div className="flex flex-col   items-center justify-center px-2 py-8 dark:bg-white">
                <div className=' mb-5'>
                  <h2 className=' text-black text-xl font-semibold mb-2'>Available Tickets</h2>
                  <h4 className='text-black font-bold text-3xl'>270 / <span className=' text-pink-700'>500</span> </h4>
                </div>
					<ul className="self-stretch flex-1  space-y-2">
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-pink-700">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span className='text-gray-500 text-xl'>Conference Ticket</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-pink-700">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span className='text-gray-500 text-xl '>Free Certificate</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-pink-700">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span className='text-gray-500 text-xl'>Free Lunch & Coffe</span>
						</li>
					</ul>
					<button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-pink-700 hover:bg-gray-800 transition duration-300 dark:text-white">Buy Ticket</button>
				</div>
			</div>
			<div data-aos="flip-left" className="flex flex-col overflow-hidden  border rounded-md dark:border-pink-700">
				<div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 hover:bg-gray-800 dark:bg-pink-700 transition duration-300">
					<p className="text-2xl text-white font-medium">Gold</p>
					<p className="text-5xl font-bold">$
						<span className="text-xl dark:text-white">/120</span>
					</p>
				</div>
              <div className="flex flex-col   items-center justify-center px-2 py-8 dark:bg-white">
                <div className=' mb-5'>
                  <h2 className=' text-black text-xl font-semibold mb-2'>Available Tickets</h2>
                  <h4 className='text-black font-bold text-3xl'>300 / <span className=' text-pink-700'>500</span> </h4>
                </div>
					<ul className="self-stretch flex-1  space-y-2">
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-pink-700">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span className='text-gray-500 text-xl'>Conference Ticket</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-pink-700">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span className='text-gray-500 text-xl '>Free Certificate</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-pink-700">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span className='text-gray-500 text-xl'>Free Lunch & Coffe</span>
						</li>
					</ul>
					<button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-pink-700 hover:bg-gray-800 transition duration-300 dark:text-white">Buy Ticket</button>
				</div>
			</div>
			<div data-aos="fade-left" className="flex flex-col overflow-hidden  border rounded-md dark:border-pink-700">
				<div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 hover:bg-gray-800 dark:bg-pink-700 transition duration-300">
					<p className="text-2xl text-white font-medium">Platinum</p>
					<p className="text-5xl font-bold">$
						<span className="text-xl dark:text-white">/150</span>
					</p>
				</div>
              <div className="flex flex-col   items-center justify-center px-2 py-8 dark:bg-white">
                <div className=' mb-5'>
                  <h2 className=' text-black text-xl font-semibold mb-2'>Available Tickets</h2>
                  <h4 className='text-black font-bold text-3xl'>250 / <span className=' text-pink-700'>500</span> </h4>
                </div>
					<ul className="self-stretch flex-1  space-y-2">
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-pink-700">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span className='text-gray-500 text-xl'>Conference Ticket</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-pink-700">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span className='text-gray-500 text-xl '>Free Certificate</span>
						</li>
						<li className="flex justify-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-pink-700">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
							</svg>
							<span className='text-gray-500 text-xl'>Free Lunch & Coffe</span>
						</li>
					</ul>
					<button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-pink-700 hover:bg-gray-800 transition duration-300  dark:text-white">Buy Ticket</button>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  );
};

export default Price;