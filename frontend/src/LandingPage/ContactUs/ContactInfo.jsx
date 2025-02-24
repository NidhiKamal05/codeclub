/* Date : 18-Feb-2025 */
/* Author : NIDHI KAMAL */
/* Why : for contact information */

import { React } from "react" ;

import data from"./assets/data/data.json"

const ContactInfo = () => {

   

    const phone = data.organisation_contact ;
    const email = data.organisation_email ;
    const address = `${data.organisation_address}, ${data.organisation_district}, ${data.organisation_state}, ${data.organisation_pin}` ;

    const wit_map = <div id="map" className="w-full h-80 my-4"><iframe src="https://maps.google.com/maps?q=apj+abdul+kalam+wit+darbhanga&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe></div>;

    return (        
        <>
<div className="md:w-1/2  p-4 shadow-md animate-fadeIn">
        <div>
            <h2 className="text-2xl font-semibold mb-4 typing">Contact Details</h2>
            <p><i className="fa-solid fa-house"></i>&nbsp;&nbsp;{address}</p>
            <p><i className="fa-solid fa-phone fa-shake"></i>&nbsp;&nbsp;{phone}</p>
            <p><i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;{email}</p>
        </div>
        {wit_map}     
    </div>     
            </>
    ) ;
}

export default ContactInfo ;