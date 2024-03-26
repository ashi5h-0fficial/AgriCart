import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope, AiFillCopyrightCircle } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    We offer consumers the convenience of shopping for quality products, agricultural supplies, and artisanal goods from the comfort of their homes. 
                    Our commitment to transparency ensures that you know exactly where your food comes from, creating a trustworthy and accountable marketplace that benefits all.

                    Join us on our mission to grow a more sustainable, connected, and prosperous agro-based community.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            2524/1, Govindpur, Prayagraj 
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +919076997047</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: support@jagricart.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Seeds</span>
                    <span className="text">Pesticides</span>
                    <span className="text">Tools</span>
                    <span className="text">Machines</span>
                    <span className="text">Fertilizers</span>
                    <span className="text">Heavy machines on rent</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                
                    <span className="text">
                        AGRICART {<FaCopyright />} 2023 CREATED BY ASHISH SONI
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
