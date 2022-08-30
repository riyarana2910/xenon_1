import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <section className="footer" id="footer">

<div className="box-container">

    <div className="box">
        <h3>our branches</h3>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> india </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> japan </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> france </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> russia </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> USA </Link>
    </div>

    <div className="box">
        <h3>quick links</h3>
        <a href="/home"> <i className="fas fa-arrow-right"></i> home </a>
        <a href="/allCars"> <i className="fas fa-arrow-right"></i> vehicles </a>
        <a href="/service"> <i className="fas fa-arrow-right"></i> services </a>
        <a href="login"> <i className="fas fa-arrow-right"></i> log in </a>
    </div>

    <div className="box">
        <h3>contact info</h3>
        <a href="#"> <i className="fas fa-phone"></i> +91 00112233 </a>
        <a href="#"> <i className="fas fa-envelope"></i> rentacar@gmail.com </a>
        <a href="#"> <i className="fas fa-map-marker-alt"></i> Delhi, India </a>
    </div>

   

</div>



</section>
        </div>
    );
};

export default Footer;