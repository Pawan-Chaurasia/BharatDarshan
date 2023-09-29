import React from "react";
import Popup from "reactjs-popup";
import image from "./images/goan culture.jpg";
import img1 from "./images/heri.jpg";
import img2 from "./images/heri2.jpg";
import img3 from "./images/heri3.jpg";
import { Link } from "react-router-dom";

export default function List() {
    return (
        <>
            <div className="container">

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-8 mt-5 mx-auto">
                                    <img className="d-block w-100 img-fluid object-fit-cover" id="culture-of-india-item" src={img1} alt="First slide" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-8 mt-5 mx-auto">
                                    <img className="d-block w-100 img-fluid object-fit-cover" id="culture-of-india-item" src={img2} alt="Second slide" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-8 mt-5 mx-auto">
                                    <img className="d-block w-100 img-fluid object-fit-cover" id="culture-of-india-item" src={img3} alt="Third slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" style={{filter:"invert(1)"}}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" style={{filter:"invert(1)"}}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


                <div className="culture-of-india-text">

                    <h1 className="culture-of-india-heading">CULTURE OF INDIA</h1>
                    Indian culture is the heritage of social norms and technologies that originated in or are associated with the ethno-linguistically diverse India. The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonisation, or influence, particularly in South Asia and Southeast Asia. India's languages, religions, dance, music, architecture, food and customs differ from place to place within the country.
                </div>


                <div className="row">
                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="culture-of-india-heritage">
                            <img className="culture-of-india-img" src={image} alt="heritage"></img>
                            <Popup trigger=
                                {<button
                                > Goan Culture </button>}
                                position="right center">
                                <div className="culture-of-india-poptext ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <Link to="https://www.lipsum.com/">Click here</Link>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>
                <hr className='my-5' />
                <h1 className='culturalartifacts-heading-footer my-3 text-center'>FOOTER</h1>


            </div>
        </>

    )
}
