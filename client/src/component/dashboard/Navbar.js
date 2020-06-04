import { logout } from "../../action/auth";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
      render() {
  return (

<div className="navbar "  >

<ul className="doc-liste ">
        
          <li className="dropdown-depart creer">
           Printing
              <ul className="dropdown-menu" style={{height:"400px"}}>
              <Link to="/cartevisite" style={{textDecoration: "none"}}> <li className="liste-drop-mark"> Carte visite</li></Link>   
              <Link to="/flyer" style={{textDecoration: "none"}}>   <li className="liste-drop-mark">Flyer</li></Link>
                  <li className="liste-drop-mark"> Dépliant</li>
                  <li className="liste-drop-mark"> Porte document</li>
                  <li className="liste-drop-mark"> Bloc Note </li>
                  <li className="liste-drop-mark"> papier entête</li>
                  <li className="liste-drop-mark"> Enveloppe</li>
                  <li className="liste-drop-mark"> calendrier </li>
                  <li className="liste-drop-mark"> Chemise sans rabat  </li>
                  <li className="liste-drop-mark"> Ordonnance </li>
                  <li className="liste-drop-mark"> Magazine </li>
                  <li className="liste-drop-mark"> Livre </li>
                  <li className="liste-drop-mark"> Catalogue  </li>
                  <li className="liste-drop-mark">Brochure  </li>
                  <li className="liste-drop-mark"> Badges </li>
              </ul>
          </li>
          <li className="dropdown-depart creer">
          Goodies
          </li>
          <li className="dropdown-depart creer">
          Textile

              <ul className="dropdown-menu">
                  <li className="liste-drop-mark"> Tee-shirt</li>
                  <li className="liste-drop-mark"> Polo</li>
                  <li className="liste-drop-mark"> sac en tissu</li>
                  <li className="liste-drop-mark"> sweat -shirt </li>
                  <li className="liste-drop-mark"> Tablier</li>
                  <li className="liste-drop-mark"> Dossard</li>
                  <li className="liste-drop-mark">Casquette</li>  
              </ul>
          </li>
          <li className="dropdown-depart creer">
          Displays

              <ul className="dropdown-menu" style={{height:"255px"}}>
                  <li className="liste-drop-mark"> Roll up </li>
                  <li className="liste-drop-mark"> X banner</li>
                  <li className="liste-drop-mark"> Adjustable banner </li>
                  <li className="liste-drop-mark">Flag </li>
                  <li className="liste-drop-mark">Stand parapluie</li>
                  <li className="liste-drop-mark"> Stand de dégustation </li>
                  <li className="liste-drop-mark">porte Brochure </li>  
                  <li className="liste-drop-mark">Poster stand  </li>
                  <li className="liste-drop-mark">Structure auto-portante - Mur de press</li> 
              </ul>
          </li>
          <li className="dropdown-depart creer">
          Packaging 

              <ul className="dropdown-menu">
                  <li className="liste-drop-mark">Packaging  </li>
                  <li className="liste-drop-mark"> Sac en carton</li>
                  <li className="liste-drop-mark"> Etiquettes autocollantes </li>
                  <li className="liste-drop-mark">Etiquettes en carton </li>
              </ul>
          </li>
          <li className="dropdown-depart creer">
          Affiches -  Stickers	
              <ul className="dropdown-menu">
                  <li className="liste-drop-mark"> Banderole</li>
                  <li className="liste-drop-mark"> Poster</li>
                  <li className="liste-drop-mark">Toile </li>
                  <li className="liste-drop-mark"> Tissu/ Drapeau  </li>
                  <li className="liste-drop-mark"> Vinyle </li>
                  <li className="liste-drop-mark"> Ttichers </li>
                  <li className="liste-drop-mark">Tableau</li>  
              </ul>
          </li>
          {/* <li className="dropdown-depart creer">
          <a onClick={logout} href="/" style={{ textDecoration: "none" ,color:"black"}}>
            <span className="hide-sm">Logout</span>
          </a>
          </li> */}
      </ul>
</div>
)}
}
export default  connect(null, { logout })(Navbar);