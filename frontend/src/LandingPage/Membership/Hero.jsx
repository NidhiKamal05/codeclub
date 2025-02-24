import React from "react";
// import MembershipForm from "./Membership/MembershipForm";


const Hero = () => {
    return (
      <section className="relative bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl bg-sky-50  text-green-600 motion-safe:animate-pulse font-bold leading-tight">
              MEMBERSHIP 
            </h1>
            <p className="mt-4 text-lg text-gray-200">
             Join Our Membership & Get Exclusive Benefits
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">

                <button 
                    data-dialog-target="modal-md"
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                    Join Now
                </button>
                </div>
          </div>
  
        
        </div>
      </section>
    );
  };
  
  export default Hero;
  