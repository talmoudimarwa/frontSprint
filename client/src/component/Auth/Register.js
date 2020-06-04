import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../action/alert";
import { register } from "../../action/auth";
import { deleteCarte } from "../../action/carte";
import { deleteFlyer } from "../../action/flyer";


import PropTypes from "prop-types";

const Register = (props) => {
  const [TabLogin, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    telephone: ""
  });
 
  const { name, email, password, telephone } = TabLogin;

  const onChange = e =>
    setFormData({ ...TabLogin, [e.target.name]: e.target.value });

const onSubmit=(e)=>{
  e.preventDefault();
  props.register({ name, email, password,telephone });
  setFormData({name: "",
  email: "",
  password: "",
  telephone: ""})

}
const title = "Carte Visite"
const titlef="Flyer"
const displayData=()=>{
 const countCarte = props.TabCarte.length
const viewData=props.TabCarte.map((elem,id)=>{ 

  return <div>
    <h1>{title}</h1>
    <div>Hauteur: {elem.hauteur}</div>
    <div>largeur: {elem.largeur}</div>
   
    <div>{elem.recto?"Recto":(elem.rectoverso?"Recto/Verso":null)}</div>


<div>{elem.couche?"Couché 350 gr":(elem.ivoir?"Ivoir 300 gr":(elem.toile?"Toilé 300 gr":null))}</div>
<div>{elem.couleur?"Couleur": (elem.noir?"Noir":null)}</div>
<div>{elem.pellicule?"Pelliculé": (elem.nonpellicule?"Non Pelliculé":null)}</div>
<div>Quantité: {elem.quantite}</div>
<div>{elem.livraison?"Frais de livraison 7 dt": null}</div>
<button className="btn btn-primary" onClick={()=>{
              props.deleteCarte(elem.id)
                   }}> supprimer</button>
    </div>
}) 
return viewData }
const displayFlyer=()=>{
  const countCarte = props.TabFlyer.length
const viewFlyer=props.TabFlyer.map(el=>{
  return <div>
<h1>{titlef}</h1>
<div>Hauteur: {el.hauteur}</div>
<div>largeur: {el.largeur}</div>
<div>{el.couche?"Couché 350 gr":"Couché 170 gr"}</div>

    <div>{el.couleur?"Couleur": "Noir"}</div>
    <div>{el.recto?"Recto":"Verso"}</div>
    <div>Quantité: {el.quantite}</div>
    <div>Frais de livraison 7dt {el.livraison}</div>
    <div>paiement de livraison {el.paiement}</div>

    <button className="btn btn-primary" onClick={()=>{
              props.deleteFlyer(el.id)
                   }}> supprimer</button>

  </div>
})
return viewFlyer
}

console.log('props', props)
  return (
    <div  style={{display:"flex",justifyContent: "space-between"}}>
    <div className="rtestr">
      <div className="rrtestrr">
        {" "}
        <Fragment>
          <h1 className="large text-primary">S'inscrire</h1>
          <p className="lead">
            <i className="fas fa-user" /> Crée Votre Compte
          </p>
          <form className="form" onSubmit={e => onSubmit(e)  }
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Nom"
                name="name"
                value={name}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Addresse Email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
              />
             
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Mot Passe"
                name="password"
                value={password}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Téléphone"
                name="telephone"
                value={telephone}
                onChange={e => onChange(e)}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="S'inscrire" />
          </form>
          <p className="my-1 have1" >
            Vous avez déjà un compte? <Link to="/login" style={{textDecoration:"none"}}>Se Connecter</Link>
          </p>

 
        </Fragment>{" "}
      </div>
     

    </div>
    <div style={{width:"50%",marginTop:"100px", marginLeft:"10px"}}>{displayData()}</div>
                
    <div style={{width:"50%",marginTop:"100px"}}>{displayFlyer()}</div>

    </div>
  );
};


Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  TabCarte: state.carte.TabCarte,
  TabFlyer: state.flyer.TabFlyer

});
const mapDispatchToProps = dispatch => {
  return {
    deleteCarte: (id)=> dispatch(deleteCarte(id)),
   register: (payload) => dispatch(register(payload)),  
     deleteFlyer: (id)=> dispatch(deleteFlyer(id)),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
