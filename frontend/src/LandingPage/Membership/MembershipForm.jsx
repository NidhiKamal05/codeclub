import * as twElements from "tw-elements-react"
const { TEInput, TERipple } = twElements

function MembershipForm(){
  return (
<section className="h-full dark ">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
        
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                  
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-3xl font-semibold">
                        MembershipForm
                      </h4>
                    </div> 

                    <form className="bg-black">
                      <p className="mb-4 text-white text-2xl">Be a Members of our Membership</p>
                      <TEInput
                        type="text"
                        label="First Name"
                        className="mb-4"
                      ></TEInput>
                       <TEInput
                        type="text"
                        label="Last Name"
                        className="mb-4"
                      ></TEInput>
                      <TEInput
                        type="text"
                        label="Email"
                        className="mb-4"
                      ></TEInput>
                      <TEInput
                        type="tel"
                        label="Contact Number"
                        className="mb-4"
                      ></TEInput>
                      
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Join Now
                          </button>
                        </TERipple>

                       
                      </div>

                      
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-black md:mx-6 md:p-12 ">
                    <h4 className="mb-6 text-xl font-semibold transition duration-300 ease-in-out hover:scale-110">
                      Became a Member of our college community 
                       Unlock Exclusive Access to Events,Resources and More! 
                    </h4>
                    <p className="text-sm text-white transition duration-300 ease-in-out hover:scale-110">
                      Joining our college website gives you access to a wealth of opportunities,keeping you access to a wealth 
                      of opportunities,keeping you informed and engaged with everything happening on campus. 
                    </p>
                    <p className="text-xl transition duration-300 ease-in-out hover:scale-110">Members will be updated on Events ,Access Exclusive Resources & Exclusive Member Benifits;</p>
                    <p className="text-2xl transition duration-300 ease-in-out hover:scale-110">Join our code club & connect with their community!</p>
                    <p className="text-white text-3xl transition duration-300 ease-in-out hover:scale-110">As a Member,
                      you will enjoy:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MembershipForm;