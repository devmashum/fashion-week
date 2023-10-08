import { useLoaderData } from 'react-router-dom';
import banner from '../assets/banner.webp'
import Services from './Services';
const Home = () => {
    const events = useLoaderData();
    console.log(events);
    return (
        <div>
            <div className='lg:flex'>
                <div className='w-[70%] p-20 bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <h1 className=' text-6xl text-purple-600  mb-3'>Music Events</h1>
                    <h2 className=' text-4xl text-blue-100'>in Dhaka</h2>
                    <h3 className=' text-2xl text-blue-100'>Discover popular events in the 'Music' category in your area and online.</h3>
                </div>
                <div className='w-[30%]'>
                    <img src={banner} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-3 max-w-max mx-auto mt-5 gap-6'>
                {
                    events.map(event => <Services key={event.id} event={event}></Services>)
                }
            </div>
        </div>


    );
};

export default Home;