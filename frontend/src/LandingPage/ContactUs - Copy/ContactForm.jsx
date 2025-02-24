/* Date : 18-Feb-2025 */
/* Author : NIDHI KAMAL */
/* Why : for contact form */

import {React, useState} from "react" ;
import { validateEmail, validateName, isEmpty } from "./assets/js/validate.js" ;
import data from"./assets/data/data.json"

const ContactForm = () => {

    const [inputName, setInputName] = useState("") ;
    const [inputEmail, setInputEmail] = useState("") ;
    const [inputSubject, setInputSubject] = useState("") ;
    const [inputMessage, setInputMessage] = useState("") ;
    const [message, setMessage] = useState("") ;

    const formData = {
        fullName: "",
        email: "",
        subject: "",
        message: ""
    } ;

    const setData = () => {
        formData.fullName = inputName ;
        formData.email = inputEmail ;
        formData.subject = inputSubject ;
        formData.message = inputMessage ;
    }

    const validate = () => {
        if(isEmpty(inputName) || isEmpty(inputEmail) || isEmpty(inputSubject) || isEmpty(inputMessage)) {
            // alert("All fields are mandatory...") ;
            setMessage( <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>All fields are mandatory...</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    ) ;
        }
        else if(!validateName(inputName)) {
            // alert("Invalid Name....") ;
            setMessage( <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Invalid Name....</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    ) ;
        }
        else if(!validateEmail(inputEmail)) {
            // alert("Invalid Email....") ;
            setMessage( <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Invalid Email....</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    ) ;
        }
        else {
            return true ;
        }
    }

    const handleSubmit = () => {        
        if(validate()) {
            setData() ;
            setInputName("") ;
            setInputEmail("") ;
            setInputSubject("") ;
            setInputMessage("") ;
            setMessage( <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Form Submitted Successfully!</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    ) ;
        }
    }

    return (
        <>

            <div className="">
                {message}
            </div>

            <div className="text-center">
                <h3 className="fw-normal animate__animated animate__pulse animate__slow" style={{}}>
                    {/* Get in Touch with Us */}
                    {data.form_heading}
                </h3>
                <p className="mt-3 fw-light animate__animated animate__pulse animate__slow" style={{fontSize: "14px"}}>
                    {/* We are always looking for new exciting projects and collaborations. Feel free to contact! */}
                    {data.form_subheading}
                </p>
            </div>

            <div className="mt-4">
                <form method="" className="" >
                    <div className="form-floating mb-4 animate__animated animate__pulse animate__slow">
                        <input type="text" className="form-control form-control-sm bg-success" name="fullName" value={inputName} onChange={(e) => setInputName(e.target.value)} id="" placeholder="Enter full name..." style={{ color: "#ffffff"}} required />
                        <label htmlFor="fullName" className="">
                            {/* Full Name */}
                            {data.full_name_label}
                        </label>
                    </div>
                    <div className="form-floating mb-4 animate__animated animate__pulse animate__slow">
                        <input type="email" className="form-control form-control-sm bg-success" id="" name="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder="Enter email..." style={{ color: "#ffffff"}} required />
                        <label htmlFor="email">
                            {/* Email */}
                            {data.email_label}
                        </label>
                    </div>                                
                    <div className="form-floating mb-4 animate__animated animate__pulse animate__slow">
                        <input type="text" className="form-control form-control-sm bg-success" id="" name="subject" value={inputSubject} onChange={(e) => setInputSubject(e.target.value)} placeholder="Enter subject..." style={{ color: "#ffffff"}} required />
                        <label htmlFor="subject">
                            {/* Subject */}
                            {data.subject_label}
                        </label>
                    </div>
                    <div className="form-floating mb-4 animate__animated animate__pulse animate__slow">
                        <textarea className="form-control bg-success" placeholder="Type Message Here" id="" name="message" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} style={{height: "150px", color: "#ffffff"}} required></textarea>
                        <label htmlFor="message">
                            {/* Type Message Here */}
                            {data.type_message_label}
                        </label>
                    </div>
                    <div className="box text-center d-grid gap-2 col-6 mx-auto animate__animated animate__pulse animate__slow">
                        <button type="button" className="btn btn-lg btn-danger border border-light" onClick={handleSubmit} style={{background: "", color: "#ffffff"}}>
                            {data.submit_button_name}
                        </button>
                    </div>
                </form>
            </div>

        </>

    ) ;
}

export default ContactForm ;