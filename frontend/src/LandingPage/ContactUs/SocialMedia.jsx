/* Date : 18-Feb-2025 */
/* Author : NIDHI KAMAL */
/* Why : for socail media information */

import { React } from "react" ;

const SocialMedia = () => {

        return (

        <>

<section className="">
<div className="p-4">
    <div className="flex justify-end space-x-4">
        {/* <!-- Social Media Buttons --> */}
        <a href="https://github.com/codeclubWIT/WIT-codeclub" target="_blank" className="bg-gray-600 rounded-full p-2 text-center w-10">
            <i className="fa-brands fa-github fa-beat"></i>
        </a>
        <a href="#" className="bg-blue-500  rounded-full p-2 text-center w-10" >
            <i className="fa-brands fa-facebook fa-beat"></i>
        </a>
        <a href="#" className="bg-blue-400 text-white rounded-full p-2 text-center w-10">
            <i className="fa-brands fa-twitter fa-beat"></i>
        </a>
        <a href="https://www.instagram.com/apjak.wit" target="_blank" className="bg-red-500  rounded-full p-2 text-center w-10">
            <i className="fa-brands fa-instagram fa-beat"></i>
        </a>
        <a href="https://www.linkedin.com/company/witcodeclub" target="_blank" className="bg-blue-600  rounded-full p-2 text-center w-10">
            <i className="fa-brands fa-linkedin-in fa-beat"></i>
        </a>
        <a href="https://www.youtube.com/@WITdbg" target="_blank" className="bg-red-500  rounded-full p-2 text-center w-10">
            <i className="fa-brands fa-youtube fa-beat"></i>
        </a>
    </div>
</div>
</section>        
        </>
    ) ;
}
export default SocialMedia ;