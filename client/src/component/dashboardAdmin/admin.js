import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Moment from 'react-moment';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MaterialTable from 'material-table';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Admin= (props) => {

  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Telephone", field: "telephone" },
      { title: "Email", field: "email" },
    { title: 'Facture', field: 'facture', render: rowData => <Link to="/facture" style={{textDecoration:"none",color:"black"}}><Button  style={{width: "40"}}  >
      </Button>Facture</Link> }
    ]
  })

  const theme = createMuiTheme({
    typography: {
      fontFamily: "Oswald Regular,Arial,sans-serif;"
    },
    palette: {
      primary: {
        light: "#00ff00", // not used
        main: "#1a9cb0",
        dark: "#00ff00", // not used
        contrastText: "#3cc2d7"
      },
      secondary: {
        light: "#00ff00", // not used
        main: "#3cc2d7",
        dark: "#00ff00", // not used
        contrastText: "#00ff00" // not used
      },
      text: {
        primary: "#fff",
        secondary: "#fff"
      }
    }
  });

  const displayClient=()=>{
    const countLOgin = props.TabLogin.length
   const viewLogin=props.TabLogin.map((el)=>{ 
   
     return {name:el.name,telephone:el.telephone,email:el.email,facture:"facture"}
   }) 
   return viewLogin}

    return (
       <div> 

      <MaterialTable

title="Commande"
columns={state.columns}
data={
displayClient()
}


    /></div>
  
    )}
const mapStateToProps = state => ({
    TabLogin: state.auth.TabLogin,
    TabCarte: state.carte.TabCarte,
    TabFlyer: state.flyer.TabFlyer

  
  
  });

export default connect(mapStateToProps)(Admin)