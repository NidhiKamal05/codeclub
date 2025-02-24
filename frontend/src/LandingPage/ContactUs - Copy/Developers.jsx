/* Date : 18-Feb-2025 */
/* Author : NIDHI KAMAL */
/* Why : developers information */

import { React } from "react" ;
import img1 from "./assets/images/img1.jpg" ;

const Developers = () => {

    return (

        <>
        
            <section>

                <div className="row pt-5 px-5 mx-2">
                    <div className="col-sm-12">
                        <h1 className="text-center fw-light">
                            Developers
                        </h1>
                    </div>
                </div>

                <div className="row pt-5 px-5 mx-2">

                    <div className="col-sm-3 px-4 mb-3 d-flex justify-content-center">
                        <div className="card p-3 bg-success border-light animate__animated animate__zoomIn animate__slower" style={{width: "18rem"}}>
                            <img src={img1} className="card-img-top" alt="developer1" />
                            <div className="card-body mt-2 text-light" style={{background: "#213b2a"}}>
                                <p className="card-text">
                                    Nidhi Kamal<br/>
                                    Session : 2022-2026<br/>
                                    nidhikamal05@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 px-4 mb-3 d-flex justify-content-center">
                        <div className="card p-3 bg-success border-light animate__animated animate__zoomIn animate__slower" style={{width: "18rem"}}>
                            <img src={img1} className="card-img-top" alt="developer2" />
                            <div className="card-body mt-2 text-light" style={{background: "#213b2a"}}>
                                <p className="card-text">
                                    Payal Kumari<br/>
                                    Session : 2022-2026<br/>
                                    psharma532003@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 px-4 mb-3 d-flex justify-content-center">
                        <div className="card p-3 bg-success border-light animate__animated animate__zoomIn animate__slower" style={{width: "18rem"}}>
                            <img src={img1} className="card-img-top" alt="developer3" />
                            <div className="card-body mt-2 text-light" style={{background: "#213b2a"}}>
                                <p className="card-text">
                                    Pooja Kumari<br/>
                                    Session : 2022-2026<br/>
                                    pooja2004jha@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3 px-4 mb-3 d-flex justify-content-center">
                        <div className="card p-3 bg-success border-light animate__animated animate__zoomIn animate__slower" style={{width: "18rem"}}>
                            <img src={img1} className="card-img-top" alt="developer4" />
                            <div className="card-body mt-2 text-light" style={{background: "#213b2a"}}>
                                <p className="card-text">
                                    Divya Kumari<br/>
                                    Session : 2022-2026<br/>
                                    thakurdivya220703@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        
        </>

    ) ;

}

export default Developers ;