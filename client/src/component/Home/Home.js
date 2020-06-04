import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css';
class Home extends Component{

    render()
    {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
           
          };
        return (
         <div >
             <div className="image">
             <img class="rg_i Q4LuWd tx8vtf" 
             src="data:image/png;base64,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" data-deferred="1" jsname="Q4LuWd" alt="S'print Printing and Packaging Solutions, 08, avenue de l ..." data-iml="573.1600001454353" data-atf="true"/>
           </div>
           <ul className="contact">
           <li>Qui sommes nous? </li>
           <li>contact</li>
           </ul>
            <h3 className="creat">Création ou modification de graphisme:</h3>
             <h4 style={{textAlign:"center"}}>  Contacter notre expert </h4>
             <div className="icon">
             <i class="fas fa-at" ></i>
             <i class="fab fa-skype" style={{color:"blue"}}></i>
             <i class="fab fa-facebook-messenger" style={{color:"blue"}}></i>
             <i class="fab fa-whatsapp-square" style={{color:"green"}}></i>
             <i class="fas fa-phone"></i>
             </div>
             <Link   to="/dashboard" style={{textDecoration:"none"}}>
            <h3 className="creat">Demander un devis et Passer votre commande en ligne</h3>
            </Link>
           
    
        <Slider {...settings} style={{margin:"100px", marginBottom:"0px"}} >
         
          <div >
            <h3 >1</h3>
          </div>
          <div>
            <h3 >2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3 >4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
         
        </Slider>
     
        </div>



        )
    }



}



export default Home