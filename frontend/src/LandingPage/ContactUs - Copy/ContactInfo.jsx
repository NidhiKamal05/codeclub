/* Date : 18-Feb-2025 */
/* Author : NIDHI KAMAL */
/* Why : for contact information */

import { React } from "react" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" ;
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import  TypingText  from "./TypingText"
import data from"./assets/data/data.json"



const ContactInfo = () => {

    const icon1 = <FontAwesomeIcon className="" icon={faPhone} style={{color: "#09aa5f", height: "25px", width: "25px"}} /> ;
    const icon2 = <FontAwesomeIcon className="" icon={faEnvelope} style={{color: "#09aa5f", height: "25px", width: "25px"}} /> ;
    const icon3 = <FontAwesomeIcon className="" icon={faLocationDot} style={{color: "#09aa5f", height: "25px", width: "25px"}} /> ;

    const phone = data.organisation_contact ;
    const email = data.organisation_email ;
    // const address = "Mansar Colony, Darbhanga, Bihar, 846004" ;
    const address = `${data.organisation_address}, ${data.organisation_district}, ${data.organisation_state}, ${data.organisation_pin}` ;

    const wit_map = <div className="mapouter" style={{position: "relative", textAlign: "right", height: "339px", width: "95%"}}>
                        <div className="gmap_canvas" style={{overflow: "hidden", background: "none !important", height: "339px", width: "100%"}}>
                            <iframe width="95%" height="339" id="gmap_canvas" src="https://maps.google.com/maps?q=apj+abdul+kalam+wit+darbhanga&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div> ;

    return (
        
        <>
           
       
            <h1 className="text-center fw-light animate__animated animate__bounce" style={{color: "#ffffff"}}>
                {/* <TypingText text1="Contact" text2="Info"/> */}
                <TypingText text={data.contact_info_heading}/>
            </h1>

            <div className="mt-4 px-3 pb-3">
                <div className="row pt-3 animate__animated animate__zoomIn animate__fast animate__delay-2s">
                    <div className="col-sm-1">{icon1}</div>
                    <div className="col-sm-11">{phone}</div>
                </div>
                <div className="row pt-3 animate__animated animate__zoomIn animate__fast animate__delay-3s">
                    <div className="col-sm-1">{icon2}</div>
                    <div className="col-sm-11">{email}</div>
                </div>
                <div className="row pt-3 animate__animated animate__zoomIn animate__fast animate__delay-4s">
                    <div className="col-sm-1">{icon3}</div>
                    <div className="col-sm-11">{address}</div>
                </div>
                <div className="row pt-3 animate__animated animate__zoomIn animate__slow animate__delay-5s">
                    <div className="col-sm-12">{wit_map}</div>
                </div>
            </div>

        </>

    ) ;

}

export default ContactInfo ;