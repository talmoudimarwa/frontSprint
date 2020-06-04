import React, { Fragment, useState } from "react";
import { Link,Redirect,withRouter } from "react-router-dom";
import { login } from "../../action/auth";
import { connect } from "react-redux";
import {TabLoginHelper} from '../TabLogin'


const Login = ({login,isAuthenticated,history}) => {
    const [TabLogin,setFormData] = useState({
        email: "",
        password: ""
      });
      const { email, password } = TabLogin;
    const onChange = e =>
    setFormData({ ...TabLogin, [e.target.name]: e.target.value });

    const onSubmit = async e => {
      e.preventDefault();
      console.log('checkvalidatUser()', checkvalidatUser())
      if(checkvalidatUser()){
        login(TabLogin.email, TabLogin.password);
        history.push('/admin')
      }
      
    };
    const checkvalidatUser=()=>{
      console.log('TabLoginHelper', TabLoginHelper,TabLogin)
      for(let i=0 ; i<TabLoginHelper.length ;i++){
        console.log('TabLoginHelper[i]', TabLoginHelper[i])
        if(TabLoginHelper[i].email===TabLogin.email && TabLoginHelper[i].password===TabLogin.password){
          return true
        }
    //    else {return false}
      }
    }
    
    // if(isAuthenticated===checkvalidatUser){
    //   return<Redirect to="/dashboard" />
    // }

    return (
    <div
     className="rtestr"
     >
    <div 
    // className="rrtestrr"
    >
      {" "}
      <Fragment>
        <h1 className="large text-primary">Se connecter</h1>
        <p className="lead" >
          <i className="fas fa-user" /> Connectez-vous à votre compte
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              className="testor"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
            />
          </div>
         
          <input type="submit" className="btn btn-primary" value="Login" />
        
        </form>
        <p className="my-1">
        Vous n'avez pas de compte? <Link to="/register" style={{textDecoration:"none"}}>S'inscrire</Link>
        </p>
      </Fragment>{" "}
    </div>
  </div>
);
}

const mapStateToProps = state => {
  return {
    TabLogin: state.TabLogin,
    isAuthenticated: state.isAuthenticated

  };
};
const mapDispatchToProps = dispatch => {
  return {

    login: (payload) => dispatch(login(payload))
  };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Login);