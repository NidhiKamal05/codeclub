/* Date : 18-Feb-2025 */
/* Author : NIDHI KAMAL */
/* Why : main contact page */

import { React } from "react" ;
// import "animate.css" ;
import ContactForm from "./ContactForm.jsx" ;
import ContactInfo from "./ContactInfo.jsx" ;
import SocialMedia from "./SocialMedia.jsx" ;
import Bubbles from "./Bubbles"
import "./assets/css/style.css" ;
// import Developers from "./Developers.jsx" ;
const Contact = () => {   
    
    return (        
        <>
        <Bubbles/>
        <section className="bg-black relative z-10 " style={{color:"#ffffff"}}>
                {/* <!-- Bubbles --> */}
{/* <!-- First Row --> */}
 <section className="">
<div className="flex flex-col md:flex-row md:space-x-4 p-4">
     {/* <!-- Google Map and Contact Details --> */}   
     <ContactInfo/> 
    {/* <!-- Form --> */}
    <ContactForm/>  
</div>
</section>
<SocialMedia />
</section>           
        </>
    ) ;
}
export default Contact ;