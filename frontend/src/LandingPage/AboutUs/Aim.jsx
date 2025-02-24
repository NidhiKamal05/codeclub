import aimAnimation from './pictures/aim.json'
import Lottie from 'lottie-react'
import mission from './pictures/missionAnimation.json'
import vision from './pictures/vision.json'
function Aim() {
    return ( 
        <div className="gap-6 mt-8 group relative">
            <div className="gap-10">
            <h2 className="text-5xl mb-4">Our Mission</h2>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className='px-8 ml-0 '>
                        <Lottie animationData={mission} className=' ' />
                    </div>
                    <div className="border border-green-700 shadow-md shadow-green-500 m-8 p-4 hover:scale-105 lg:w-[60%] w-[80%] ">
                        
                        <p>To promote a culture of coding and innovation, developing problem-solving skills and analytical abilities through coding challenges and collaborative projects. We provide a platform for students to learn, share and showcase their skills, enhancing employability and bridging the gap between theory and practice.</p>
                    </div>
                    
                </div>
            </div>
            <div className="gap-10 m-8">
            <h2 className="text-5xl mb-4">Our Vision</h2>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className='pl-8 ml-0'>
                        <Lottie animationData={vision} className='' />
                    </div>
                    <div className="border border-green-700 shadow-md shadow-green-500 m-8 p-4 hover:scale-105 lg:w-[60%] w-[80%]">
                        
                        <p>To establish WIT College as a hub for technological excellence where students are inspired to innovate, create and thrive in the field of coding and to become a leading coding community that fosters a culture of collaboration, creativity and continous learning, producing talented and socially responsible tech leaders who make a positive impact in the world. </p>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Aim;