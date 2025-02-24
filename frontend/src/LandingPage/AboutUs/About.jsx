import ParticleEffect from "../particleEffect.jsx";
import './about.css'
import Work from './Work.jsx'
import Aim from './Aim.jsx'
import contest from '../AboutUs/pictures/contest.jpeg'
import hack from '../AboutUs/pictures/hackathons.jpeg'
import discussion from '../AboutUs/pictures/discussion.jpeg'
import community from '../AboutUs/pictures/community.jpeg'
import sessions from '../AboutUs/pictures/sessions.jpeg'
import ClubMember from "./ClubMember.jsx";
import { RevealTag } from "./RevealTag.jsx";


const About = () => {

    return (
        <>
            
            <div className="text-white relative m-4">
            
                <div className="mb-4">
                    <h1 className="text-green-700 font-bold text-7xl mb-4  ">About US</h1>
                    <p><b className="text-3xl text-green-200 mb-4">Welcome to the Coding Club of WIT college....... </b></p>
                    <p className="mt-4 text-xl"><br /> The coding club of WIT college is a student-driven initiative dedicated to building a healthy coding environment within our college community, where students can cultivate a learning attitude, share knowledge and grow together. we provide guidance, support and resources to help our members develop their coding skills, explore new technologies and work on real-world projects. Through regular events, sessions and workshops, we enable students to unlock their potential, discover their passions and become their best version. our sessions focus on Data Structures and Algorithms (DSA), Development and coding which empower students to acquire industry-relevant skills, think creatively and innovate fearlessly. By developing culture of collaboration, innovation and continous learning, we aim to create a dynamic community that support students in achieving their technical aspirations and making a meaningful impact in the world of technology.</p>
                    <p className="text-xl">We are a community of students from diverse backgrounds and disciplines, united by our passion for coding and innovation. Our members incude beginners, intermediate and advanced coders as well as faculty advisors who provide guidance and support.</p>
                    
                    <br></br> 
                    <RevealTag /> 
                    <button className="bg-green-900 p-3 rounded-lg hover:bg-green-700">Join a community</button>
                </div>
                <Aim />
                <h2 className="text-6xl mt-8 font-bold text-green-500 mb-8">What We Do</h2>
                <div className="text-white grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                    
                    
                    <Work image={contest} heading={"Coding Competitions"} paragraph={"Code, create and conquer! Join our monthly coding contest to upskill your programming abilities! this contest challenges you to solve problems related to data structures and software development. Join us every month to code, learn and upskill yourself. Get ready to take your coding skills to the next level."} join={"Explore more"}/>

                    <Work image={hack} heading={"Organize Hackathons"} paragraph={"Turning ideas into impact! Unlock your creativity and tech skills to solve real college problems. Our hackathons are the prefect platform to make a positive impact in campus. this empower students to collaborate, innovate and create solutions for solving technical problems in our college."} join={"Explore more"}/>

                    <Work image={sessions} heading={"Taking Sessions"} paragraph={"Learn from the best! We organize sessions cover a wide range of topics from beginner to advanced level. Senior students share their expertise and experiences with juniors, providing valuable insights and guidance. Sessions are customized to meet the needs of students at all levels."} join={"Explore more"}/>

                    <Work image={discussion} heading={"Tech Discussions"} paragraph={"Explore, learn and innovate! Join our tech discussions, led by students and for the students. Explore the latest technology and engage in meaningful conversations with like-minded students. It is a catalyst for students to explore new ideas, accept challenge and create a better tomorrow through technology."} join={"Join a Discussion"}/>

                    <Work image={community} heading={"Developing a community"} paragraph={"Build, collaborate and create with our coding community! Join our club to connect with fellow coders, share knowledge and learn from each other. Let's code, create and inspire together."} join={"Join a Community"}/>
                </div>
                <ClubMember />
               
            </div>
        </>
    );
};

export default About;