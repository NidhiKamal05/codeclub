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
            <div className="container-fluid bg-dark" style={{ color: "#ffffff"}}>               
                   
                {/* <Developers /> */}

                <section>
                    <div className="row py-5 px-4 mx-2">
                        <div className="col-sm-6 p-5 mb-2 opacity-100">
                            <ContactInfo />
                        </div>
                        <div className="box col-sm-6 p-5 mb-2 border border-1 border-white opacity-100 rounded animate__animated animate__pulse animate__slow" style={{background: "#213b2a", color: "#ffffff"}}>
                            <ContactForm />
                        </div>
                    </div>
                </section>

                <SocialMedia />

            </div>
           
        </>

    ) ;
}

export default Contact ;