import React from "react";
import "./Contact.css"

const Contact = () => {
    return (
        <>
        <section className="contact">
            <div className="contact-heading">
                <h2>Contact Us</h2>   
            </div> 
            <div className="container">
                <div className="row">
                    <div className="column">
                        <div className="contact-widget">

                            <div className="contact-widget-item">
                                <div className="icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="text">
                                    <h5>Address</h5>
                                    <p>7B Toronto, Canada</p>
                            </div>
                        </div>

                        <div className="contact-widget-item">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="text">
                                    <h5>Contact Us</h5>
                                    <p>125-124|654-987</p>
                            </div>
                        </div>

                        <div className="contact-widget-item">
                                <div className="icon">
                                    <i className="fa-regular fa-envelop"></i>
                                </div>
                                <div className="text">
                                    <h5>Email</h5>
                                    <p>famouschicken.support@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="column">
                        <div className="contact-form">
                            <form action="#">
                            <input type = "text" placeholder="Name"/>
                            <input type = "email" placeholder="Email"/>
                            <textarea placeholder="comment"></textarea>
                            <button type="submit" className="site-btn">Send</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="map-column">
                        <div className="contact-map">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10713189.963094842!2d-140.22360849999998!3d49.03864260000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54844aa28eee253b%3A0x3d4dfa42d9ae5de1!2sFamous%20Chicken!5e0!3m2!1sen!2sbd!4v1676221768368!5m2!1sen!2sbd" 
                            width="600" 
                            height="450" 
                            style={{border:0}} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        </>

    );
   
};

export default Contact;