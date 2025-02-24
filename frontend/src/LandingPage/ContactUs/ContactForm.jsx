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
    





const closeAlert = () =>{
    document.getElementById('myalert').classList.add('hidden');
}


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
            document.getElementById('myalert').classList.remove('hidden');
            setMessage( 
                            <strong>All fields are mandatory...</strong>
                            
                    ) ;
        }
        else if(!validateName(inputName)) {
            // alert("Invalid Name....") ;
            document.getElementById('myalert').classList.remove('hidden');
            setMessage( 
                            <strong>Invalid Name....</strong>
                            
                    ) ;
        }
        else if(!validateEmail(inputEmail)) {
            // alert("Invalid Email....") ;
            document.getElementById('myalert').classList.remove('hidden');
            setMessage(<strong>Invalid Email....</strong>) ;
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
            document.getElementById('myalert').classList.remove('hidden');
            setMessage(<strong>Form Submitted Successfully!</strong>);
            alert(`You have entered\nName:${formData.fullName}\nEmail:${formData.email}\nSubject:${formData.subject}\nMessage:${formData.message}`);         

        }
    }

    return (
        <>
         <div className="md:w-1/2 bg-white p-4  box">
        <div className="flex flex-col bg-green-600 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch with Us</h2>
        <h6 className="text-sm font-semibold mb-4 text-center">We are always looking for new exciting projects and collaborations. Feel free to contact!</h6>
        </div>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-1 hidden" id="myalert" role="alert">
            <p>{message}
            <button className="float-right cursor-pointer mb-2" onClick={closeAlert} >&times; <span aria-hidden="true"></span> </button> 
            </p>
        </div>
        <form id="contactForm">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">{data.full_name_label}</label>
                <input name="fullName" value={inputName} onChange={(e) => setInputName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="email"> {data.email_label}</label>
                <input  name="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="subject">{data.subject_label}</label>
                <input name="subject" value={inputSubject} onChange={(e) => setInputSubject(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="message">{data.type_message_label}</label>
                <textarea name="message" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Type Message Here"></textarea>
            </div>
            <div className="mb-4 text-center ">
                <button className=" bg-red-500 animate-pulse  hover:bg-blue-700 text-red-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>{data.submit_button_name}</button>
            </div>
        </form>
    </div>

     
        </>

    ) ;
}

export default ContactForm ;