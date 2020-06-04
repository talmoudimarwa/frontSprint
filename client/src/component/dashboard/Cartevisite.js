import React, { Component } from "react";
// import Navbar from "./Navbar"
// import { logout } from "../../action/auth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from 'react-moment';
import {addCarte}  from "../../action/carte"
import Navbar from "./Navbar";
import uniqid from "uniqid"
class Carte extends Component {
    state={id:Math.random(),
        largeur:"",
       hauteur: "",
        couche: false,
        ivoir:false,
        toile:false,
        couleur:false,
        noir:false,
        pellicule:false,
        nonpellicule:false,
        recto:false,
        rectoverso:false,
        quantite:"",
        livraison:false,
        date :new Date(),

    } 
   onDate=(date) =>{
     this.setState({ date:date,
    })
    console.log("date",this.state.date)

    }
    handleChange=(e)=>{
      console.log("e" ,e)
        this.setState(
         {[e.target.name]:e.target.value} 
        )
        
      }
      clear=()=>{
        this.setState({
          largeur:"",
          hauteur : "",
          couche: false,
          ivoir:false,
          toile:false,
          couleur:false,
          noir:false,
          pellicule:false,
          nonpellicule:false,
          recto:false,
          rectoverso:false,
          quantite:"",
          livraison:false
      } )
      }
      handleChangeC=(e)=>{
        console.log("e.target" ,e.target)
        this.setState({
        [e.target.name]:e.target.checked
      })}

  render() {
    return (
      <div>
      <Navbar/>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop:"80px"
        
        }}
      >
        <div style={{ width: "35%" }}>
          <h3 className="carte">Carte visite</h3>
          <div
            //   className="rtestr"
            style={{ width: "60%", marginTop: "40px", marginLeft: "30px" }}
          >
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="rg_i Q4LuWd tx8vtf"
                    src="data:image/jpeg;base64,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"
                    data-deferred="1"
                    jsname="Q4LuWd"
                    alt="Cartes de visite Design, photo, video - créer des cartes de visite"
                    data-iml="834.6299999975599"
                    data-atf="false"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="rg_i Q4LuWd tx8vtf"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRUXFRUVFRcVFRUVFxcVFhUXFhUXFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQFy0lICUvLS0tLS0tLy0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0wLSstLS0tLf/AABEIAL4BCQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwEEAAUHBgj/xABKEAABAwIDBAYHBgMEBwkAAAABAAIRAyEEEjEFQVFhBhMicYGRBzJSobHB8BQjQnLR4RUkkmKi0vElQ1OjsrPCM0VUY3N0goSk/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAMREAAgIBAgQCCAYDAAAAAAAAAAECEQMhMQQSQVETIjJhgZGhsdHwBRRxweHxJTNS/9oADAMBAAIRAxEAPwDlebmiaDuCdToBPbTC5WzsSKzKJ3lNY0JwphMaFLZSQvIdyYKE6prbJoCmykhdKi0aBNzQiFPiUYA4KWy0gGyd0Joao60BLa8u5BSMY54HND2jy+KbTpAJwA3JWVQhlDf8Uzq0RJ3DxOiLq+N/rcErHQiOCIUSdVZFLebLC8ATuG9KwoT1PFKe6DAElOJc7Sw47z3Dcm06AGidhRWbQn1vIafumtpp+mqr1cRuFydAPrRF2FULrGLykCnN3WHDj3qy2hvdc+4d36pdQEnkmmS0JqO3BIqiFbfAVJ8vMDTefkqRLEBxfbQb01zABZPDABAS3KrJorgQLlBTZPaPgicMzo3b/wBFYLdwVWSIKTCbUBQusE0JiWtkoi1NY2AhemIFqmUMKcqAMzqQ5CymU5jQEmNEsTWt4lCCiLgNSpZSGtHBM71WFYnQeJTGUvaKllIYKvAT8EYpk6nw3I2EBY6oBvU2XQTaI4I4SW1S71R47vNOp0xvvy3fupY0RnnS/wAPNG1o4z8E1rVLngJWVRBdxKaHgCR9d6qPeOPznwTadFxEOs3WJgnvO7w80hi61cvMN138B3n6Kynhjq50kbtw7grFSo1ggW8r9wVGriSdLD3+a1x45T22MsmWMN9xtXEAaa8OCrOxLuMdyWVC64YYxOHJnnL1DziyRFu/9t6uYd1NosZJ1O8+G4LVrAUp8PF7aFQ4mS31NoTKW90KtTxRFjcIa9QuIDbTqTuHzK5pYZROqOeEgKri85R4nh+6eymGiNAm0KAaIH+Z4lDUEj4KLNKK71UxD4sNTYJmJeQFGzqJcc7v/j3cVa7kPsNw+HyjnvRuYnusq73IsVCywKtUF1YeVXDZMqkSyXJbgmOKS4qkSyFMoQVCYhoWZ1WNUp9Fp4JMaCc/nHxRMHJNFMeKO3FRZaRlMIwRxQZpsBP17kTKPteQ/VSUiQ6dDJ+tSjpUBqb8t37p1GnwCs0qQ3qWy0gaTJ5J0RwUuqNbaUJqieJ3Aan5AKCxdRx3JNOi5/q2HtH5cVdpYcuIDhMkANF5J0HFx+oXvOj/AECq1IfiJos1DBeo7v3M8ZPIKoxcnUUTOUYq5M8HTw7KYk+Z1P1wCr18XPqiF7f0l7CZRNIUWZWGmY1MuY65JNySHDXgufsYSYAJO4ASbCTYcgV2Q4ZLWWphxM5RjBx2kr+NNAko8Nhn1HBjGlzjuA8PC5C2T9iGm3NXqNpSJayM1Q3IgskFokETeCNFlTaTnt6qhTFGn+INJcTPZLqlQgWuBJi2+F0HnhvwNHDZTX+9fc9VTcMog6Pdu0MgcrFa00C8l4a2mwniQwcgXEn6KcygKYLsoqZSAdTTB/MD2jy+jWxGIdUInkGtAgDcA1oQAmq0AkA5huMRPhuQq23AmLmHRLWgZiQRImNEJwRkBpDjviYbv7RIAFkAVlit9imd1R3jkBj3x5KoSgBjKxG+3NF1vn80lYs5YoyNYZpR6iX0878o0F3fILahkBVKIdPZ/bxVp74F1y5cbideLIp9BVYwqpTq9STYJFRyhGjE1nKQIEId4HiUdYHcrMxFR6Q4pNamc2qYRZWQE0rJVVoO5FmToVl1jE5pVfrfFEwE6qGWh+bdr3I2MO+31xQ04CsMKhstImm3cPcntpAalYxwRByhs0SDgcx8f2RhrWjgOZ+aRUrgWFzy+ZWz6P8ARzE4t/3VPNBu91qbO88eVzySpsbaRQa6TYQOJ1PcDp3leq6L9CcRiYcG9VSN+seDLubG6v3XsOa9/wBGvR/Qw8Prff1dZcPu2n+yzeeZnlC9iumHD36Ry5OKrSHvNF0f6LYfCCabc1TfUfBfzg6NHIRzlbkhGoIXUopKkccpOTtmh6XbG+1Ycsb/ANo056f5gPVJ4EW8lxDE06tCoXML6bgYdBLXNINwY3SNF9EVXBoJJAABJJsABqSV5XpN0Wp4tvXUiG1SNYIbU5PGoPP4ql2O/hsuOePwM2kb0l/y/o+pxRtUF2apmdxvr47h3K7Wr02AgHNJJyMcerGlnE+t+2gmU7a+w6lJ5a9hpv8AZdoebToR3WWoc1zDpB3Iaox4jg8uDWStdGtU/aMcXPEOcGtboDYXkw0fWqthuQNLWkB4geq6oTbQbgfHhA1QUMf7QGaCOscM8N4BhsO+CkuqSQ2kwh1+1Mvd5REBI5R9Uhln9m3qsPbde3WOkwNLSUnrqlXssGVg3Ns1v5neJ96j7O2mfvZLtcgt/U7cCOCTWxTjYdlvstJA4cfqSgBj+rpy0RUdEF34BPs7yec/oqaxMpUSeQ4oGlYsBW6OD9ryHzKsUKIGnmdU+Q36v+yVmscfcX1Vo0Cq4hrRp4qw95PILUY7GMkNaZO+FllVxZtB0xrn21+vr4JLyldYNSoNS3euVI3bJpnU8UT3krCRYDcheUyRDmoHNTnOQqiWKLISsysVFRzqkQy6wAJjQUFJqaSFLNENawJmcBVs5KJp4X57v3UlJlgVrXsrWzcFVrvFOlTe5x0awS48yfwjnu4hV6NIC5ueJW32H0oxWBfmwxaWk/eUnCWvA05gi9wfPRKKTdDdpWjovRb0XNaA/GEE/wCxpk5R+d4u7ubA5ldHw2HZTaGMa1jWiGtaA0AcgNF5Lob6RsJjoYT1Fc/6qoR2j/5b9H91jyXsl2whGOxwZJyk/MafpDtCpSYctJ7h7bd3eBdc9x/SLEVTlYajjwAd7mjVdaVLH7Tp0rPdcgkNAJJj6tOu5bLw61jr+v8AZpwmfJhyXFKS7NfJqv3PIdGquPa2G4Z3ayy6scjRA1FOxkzfTQL0v8VIGVo6ypymNSHEw02a4QQMxEtnUExic9Vg6zNSaSQWAyXh0AQ5hBB15QeOljC4EAEBoptOobAcbgySLDfYWusYY1DSO3Y24nPDJLmlFJ+q/i7+Rq2YR9Ul1eS8kgUm9lrRBYczgSMplxB9aDunKNzh6WVoENEbmCGgcAEvF42lREHUmzG3e48m7ylYjabQIa1zqlvu9HCY9aJjX6vFnNkc2k2tOnYPH4GnWbkqsa9vBwmOYOoPMLxe1fR2x0mhUy/2Kgzt7g7UeMr3jTIBIIJGhiRyMGPJCQmnRpg4vNg9CWnbde44ltToViKUzRcR7VL7xvkLjxAWhdg3sJDXEHQi7T3EL6IIVLaNCi5pdWbTLGiSagblAGpJdYBFo3fFYMn+zCr7xdfDVHz0/DPH4T4X+CU5h4Feu6WdINnklmCoNc7Q1g57aY/9OmCM/eQB+ZeTzk6kk+/9km10MssOHq8fN7a/b6BUqXirTPrgq4dH6LM5OtgpIVItGtwVfE4ltMS8+C1+M2g4dmnTcTxylaz7LUcZeHE8wUm6HY/F7UfVMNlrfik0KYHfxTW4V/slE3Cv9n4fqsZcz6FLlXUglQxxLp4I3sIsRCnDstPG6zehotSQ5A96MtQFIYLlIsocVAKoQNVy1+ZW6zrKjmVxM5G06xQXpTGk/qrNNkaKHoaIOnSJ104fqrbAlB8b0TXLNmiHtZOqnEiKbt3ZKxpVfHYiGkRqISW6KbpGtZC6D0Q9KOKwkU684qgIEk/fMHJx9Ycnf1Bc5p1AU5rl3nG0mfUex+kOHx9Evw1fSC4Nyiow8HMcDHlB3JmDwLaYEXdEZjc6AWBsDDWiY/CF89ejmqf4rhA0kE1HB0GJb1byQY1Fh5L6PVIybcfKmZS7OgudSbk+KN1YkaxzGvvQqtVx9NrsjnhroB7RgQZGptuTSb2MroGns+m0uLWAF3rOFnc4P4fCE7DUG0xDABxOpO+7jc6qrhtq03kjMBe0nUfI8leURkpbGuRTvz3frJzlZKxYqMyEjG9WGOdVDcjRmdnALQBeTKsLnfpK29f7M09lkOq83asZ4WPeRwTSs6eF4fx8nLdLdvsluzynTLpB9oqQxoZTFmNAAhvtOj8R9wtzPmFL3ySTqVCGTxGZZJeVVFaJdl9er9ZixYolIwJWKSNDuOnODBjjcEeChAGLFixAFHaQ0HG36+5Y2wAG5PxLNDwkecfoqxXJl9Jndh9BGJTkb3JbnWUItgOG9LBO9OBQOKohlfEiyqwrGIdKTCtbEM2MrAUtglOaFmzRDaYT2lIaQizypZaLAqJNeuAL3J0A1Pcq9TEwcrbn3DvU0acdomXHU/IcAlXcd9ijUw5c4n1eAH1dAS5ut+YW1a2Sir0xC0jlaM3jW5c9FTs22MJ+ar/yKpX01C+cvRThP9MYVw3def8A81VfR0LqjK0cc009SF4X0hsqU3srtbNMgMcfZcCYnkQfdzC92hqUg4FrgC0iCCAQQdxB1W2LJySujDJDmWm+5xpu1HkwB7/nuXS+inWmkTUkNMZJ7rkcjb3qltHoNQcc1EuoO17JOXwB9Xw8lc6O7Nq0Ww/EVajTDmkupvYQdwc4F8HlAXNkXNli9aV/Hue/xvF4c/Drk0fVdfY9v4N4sQPrNGpGoHG5MRA71ja7CQA9pJkgBwJIFiRx0K1PFpidp4wUaVSq7RjS6OJAsPEwPFcF21iXPMuMue4veeJJk+8nyXV/SVisuGbTH+sqCfysBd/xZFx3Hul55QPd+6roepjXg8BKfWbr2L7ZstnbapMpNp1MM2rldJJIEtBc5rTLTvqVQTwcIgtBU4zblOo14+yUg5zA3OAzM18GXgimDvFptkF9ZrbMw7XCXUajxLrsMexA1Gna8/JjcGxpdnpVIzEiHNBDIkNIzbr3324qTyi5T6UBpaWYWiwgNu0AGQ5pJBDZEhpb3OOqmj0scJ/l6W+IER2mkAxciBlItIgbr0HUWNYxzsO8ZYDySQHSHDwOYg+HmNPG0Ig4cGM0HOQYJJaCRrFhPJAF5nS+uJhlK5GrXnRxcB62lyOW5aPE1i97nmJe5zzGkuJJjldXm7QpCB9mbG/tSSJnUt5n6AVXF12uy5aYZEzBme9AFdYsWIATifVVN2vNXq47JWrqVLxvXLmXmOzA/KY8pdRS5xMeSB2qhGjMJQkwsJQvKohiazlCVUN0xWQXmlEHJGdQagCzo0ssgpRqF9m2G8/olMYX66cOPertJsaIeg1qFRohotHzKeGoBZZnus3qaLQd1gH6KviXmUzTQSeJSarbIW45bHqfRB2tq0uTKx/3Th813jaWEdUa3I4Mc17XNcRMatdbjlc6Oa4P6FhO1W8qNY+5o+a+hF241SOHJJqdo87V2WB2TXAa1whri4gtFRj2BzSdW9WBO/M4n1im4TBNp3OIc7sBjCSS5vYaxzpk5pc1z77yeC3RotNy0HwHL9B5KRSbrA0jTde3vPmrE882qs86NlUSCOu7WUXDTYtzEvEkwTLJ/JfUoa2zKRacjhnyvgFhDMzshpOIGgaWUwJm3fK9NkHD6+ipQP8AMZL3PNU9k4UAxm/BMMAA6vJlhpbYfc0gRf1BO+dps/ZbKZzgvJIHrkOiwFrS2wAgGOS2KxBLzTaps556UndvDjg2qfMsH/SuW4n13fmPxXUfSk37ygeLKg8nN/xLl+KEPd3/ABuqeyPV4pf47B+r+bGYfEVWthjnBsn1eJF78YWHEVnCczyAZm8AgE67oE+CubHcQ1xFZlM8HgXgSCCTbUjy4qA0NcaXXtySe0ACDLerJ19m8TuG8wpPGKtQV3QCKpBgAEPiwkADTQT4Jf2OpfsOtrY2huY/3b9y2L8RDnffzkksIawZiWzMxcySCOchYMQyW/zDmyQHBo9VuQC2VuktaIG7LIkIA1tXCva0Oc0gEwCeKUtrUdSMtfUqZLdWYMWaZkZbkEx4latoJuB5c9EAQsRFhiYMcYMaTr3IUABWHZPcfgvPg716NaLJFvq1ljl6HRg6kZkMoQbd6wLE3JlA8KULiqJZUqC6ZKW8yQmqzMNz45lFSpzc/wCSijTjXVPaFDZaQ6mEbXJMomuUUaJji7yQTO631qlzKfRsEihswNPH63JdYiDdBUeSkVHpJDbPZegy+1Tyw1X/AIqYXe9qA9WQHFpJYAWyDLntEAjQmY8Vwj0DD/StT/2lT/m0QvoGpSDhDhIt7jI94BXbHY8+TanZ5gVCcuXGuu0sZLCXE5pvDe07L1Y4z+ZEK8lxOMf2H5nN6t4hoOXKRzcWn3RBXoPsNKI6tkXtkbF4ndyHkpGDp/7Nms+o3W99OZ81Rp+Yn6vcvoebxlEMqVP5mq0ukuDWu7AJe+Qc27rGtjnNtW3MBtKnTDgX1XguLgXyYADGkAuMwCDbkStz9mZmLsozGJMXMAge4nzTMg4D6/yHkgmeec1TfwQvD1c7GviMzWujhIB+aYpWIMjxPpQw00aNSPVqFp5B7Z+LB5rkm0WQ+eIB+XyXfOlOz+vwtWmBLsuZv5mHM0eMR4rhm0mS0OG74H6CrdHuYl4/4bKK3g79n237ithMWGAgsa7tA9rSwIgiLi8+CPFY8OAApMZBJsJkkbwbcEOAqUhPWsc/SIJHGZhw4t8k81sOHGKb3NnecpgaQZMTvUnhmP2uSMopUQL2DOIg7+EeSlu26gNm07CIyW4TE6xZQ/E4f8NBwMtMmoToQXAjSIEeKYzGYYR/Lnfm7ZMcIk336wgAW7erD2dDHZ0Ji9t4i3zS6m2qxiXDWfVbr5KamPpEEDDtEgiQ4yCd4JGoVXF187y/KGzeGiALX08/FAB4jaNV4hz5GkQ0b824cbqqpWIAhaTFOh7u8reLR7UEPdzg+4LLKtDbC9WKFwgKORASMyxR0MLMgeUUpdVypEsr/iToSB6ycqZCLIR50iVIcFFF2ObdGSksT7AKWUggi60JJeluelRVjatUlKY3MYFuJ+Q5pQBdYeJ4K/RYGgABN6AtT3/oPoAbSqEaDBVB/vqK7suL+g+j/N1ncMOR/VVpn/pXaYXRidxRyZlU2QsUwhc4DUgd60MiViS/F0xrUYO9zR80iptjDtEnEUQOdWmPmgC6sWof0rwAucdhR/8AYo/4kl3TXZo/7wwvhXpn4FA6ZvVxvpjsnqMTUZHYf22flfNh3HMO4BdBPT3Zn/j6Hg+fgvK9OulOzMTRBZi6Zq0zLAGvlwPrs9XkD3tCakken+FcR4Oap+jLR/f3ozmdRhBIO5Co2htagYIffQjI/wDRVP4nT4n+l36KW13OTicCx5ZRg7XRrXQuLFSdtNg9ryQnazODvIfqlzLuYckuxfWLXfxdvsu/u/qhdtlskZHW7kcy7j5JdjZrFqv4yPYPmFJ2v/Y/vfsjniHhy7G0Wm2yO2DxaPcSiO2D7A/qP6KrjMYXkEtAidOaick0XCDT1FEpbginehKzRsySlPcjzJVRNEsUNU5IZqnwqZKJzJlMIGBMKlloZmWOclZktz0qHYx70LZJgJUzZW6TQAh6AtR1IACAVYaBrKrsMbkzPCzZoi1hsa+lJp1KjCRBLHuZI5lpEhDU2pXdriK5HOtVPxcqTqk7kbCeCFaHox5rOcIc5x5FznfEoS1g/APIfUpeY6QEJqOS1HaQDwybNHg1V8UWk5WtA8Bom1qxaNyTSbvOpVruQ30H0GDSLBG94AUNKWe0YSGHSsM29FUqDcPreoN+4afql1XIAGbpjbXS2BTmTYkHIOvkllCFKKFZObels05m6ypcRxKNoTES1SxQ7RZKAIe5YNEDioDynQrCc7coJQyslMRJKTUTZSqiaJYulqnSk0kyVTJRYDghJSpUFymirCc5DO4ISU5jITAZSbCcCkgI2qGWhodCB75SnuUsKVDsdTTWlJUZ9ymikxtSpKW+pzQkhVsQ+TCaiJyJBzGdw0T2pVJu5N0VMSJqvgc1jGwO9KYJN0/MpYyc0JDjdTUegTSBsZmQkqMywlFCsmVhKEKKpgJisimZcnh0aKvRFk1rkMES5xUlAXXWOdKAsF5QgrHlYEyTIUoYRFMQJKU9MlJemiWZTKOUFJNhNgj/2Q=="
                    data-deferred="1"
                    jsname="Q4LuWd"
                    alt="Cartes de visite Design, photo, video - créer des cartes de visite"
                    data-iml="834.6299999975599"
                    data-atf="false"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="rg_i Q4LuWd tx8vtf"
                    data-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRX3kGsXYcjUzB2WDMdw2heUeeeoXP96nSYvVNAmAYVJAbrK5Uq&amp;usqp=CAU"
                    data-lt=""
                    jsname="Q4LuWd"
                    alt="Exemple Carte de visite Infirmière Libérale | Caducée vert"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRX3kGsXYcjUzB2WDMdw2heUeeeoXP96nSYvVNAmAYVJAbrK5Uq&amp;usqp=CAU"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{  padding: "20px", width: "40%"  }}
        >
          <p>
            Votre carte de visite professionnelle est un outil essentiel pour
            vous présenter et vous démarquer,
          </p>
          <p>Dimensions stand 9cm x 5 cm </p>
          <div style={{ display: "flex", justifyContent: "space-betweens" }}>
          <p style={{marginRight:"10px"}}>Dimensions personnalisées :</p>
          <input style={{width:"70px",height:"35px"}}
           type="text"
           placeholder="...."
           onChange={(e)=>this.handleChange(e)}
           value={this.state.largeur}
           name="largeur"/>
           <p style={{marginLeft:"20px"}}> X </p>
             <input style={{width:"70px",height:"35px",marginLeft:"10px"}}
           type="text"
           placeholder="...."
           onChange={(e)=>this.handleChange(e)}
           value={this.state.hauteur}
           name="hauteur"/>
          </div>
         
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <p style={{ marginRight: "10px" }}>Papier couché 350gr </p>
              <div class="input-group-text" style={{ height: "25px" }}>
                <input
                 type="radio" aria-label="Radio button for following text input"
                  onChange={(e)=>this.handleChangeC(e)}
                  name="couche"
                  checked={this.state.couche}
                />
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <p style={{ marginRight: "10px" }}>Papier Ivoir 300gr </p>
              <div class="input-group-text" style={{ height: "25px" }}>
                <input
               type="radio" aria-label="Radio button for following text input"
               checked={this.state.ivoir}
                  onChange={(e)=>this.handleChangeC(e)}
                  name="ivoir" 

                />
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <p style={{ marginRight: "10px" }}>Papier toilé300gr </p>
              <div class="input-group-text" style={{ height: "25px" }}>
                <input
                type="radio" aria-label="Radio button for following text input"
                 checked={this.state.toile}
                 onChange={(e)=>this.handleChangeC(e)}
                  name="toile"
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-betweens" }}>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <p style={{ marginRight: "10px" }}>Couleur </p>
                <div class="input-group-text" style={{ height: "25px" }}>
                  <input
                 type="radio" aria-label="Radio button for following text input"
                 checked={this.state.couleur}
                    onChange={(e)=>this.handleChangeC(e)}
                  name="couleur"
                  />
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <p style={{ marginRight: "10px" }}> Noir </p>
                <div class="input-group-text" style={{ height: "25px" }}>
                  <input
                   type="radio" aria-label="Radio button for following text input"
                    checked={this.state.noir}
                    onChange={(e)=>this.handleChangeC(e)}
                  name="noir"
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-betweens" }}>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <p style={{ marginRight: "10px" }}>Pélliculé</p>
                <div class="input-group-text" style={{ height: "25px" }}>
                  <input
                    type="radio" aria-label="Radio button for following text input"
                    checked={this.state.pellicule}
                    onChange={(e)=>this.handleChangeC(e)}
                  name="pellicule"
                  />
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <p style={{ marginRight: "10px" }}> non pélliculé </p>
                <div class="input-group-text" style={{ height: "25px" }}>
                  <input
                    type="radio" aria-label="Radio button for following text input"
                    checked={this.state.nonpellicule}
                    onChange={(e)=>this.handleChangeC(e)}
                  name="nonpellicule"
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-betweens" }}>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <p style={{ marginRight: "10px" }}>Recto</p>
                <div class="input-group-text" style={{ height: "25px" }}>
                  <input
                   type="radio" aria-label="Radio button for following text input"
                   checked={this.state.recto}
                    onChange={(e)=>this.handleChangeC(e)}
                  name="recto"
                  />
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <p style={{ marginRight: "10px" }}> Recto/Verso </p>
                <div class="input-group-text" style={{ height: "25px" }}>
                  <input
                   type="radio" aria-label="Radio button for following text input"
                   checked={this.state.rectoverso}
                    onChange={(e)=>this.handleChangeC(e)}
                  name="rectoverso"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{  padding: "20px", width: "40%"  }}
        >

          <div style={{ display: "flex", justifyContent: "space-betweens" }}>
          <p style={{marginRight:"10px"}}>Quantité:  </p>
          <input style={{width:"70px",height:"35px"}}
           type="text"
           placeholder="...."
           onChange={(e)=>this.handleChange(e)}
           value={this.state.quantite}
           name="quantite"/>
          </div> 
          <p style={{color:"red"}}>La quantité minimale : 100 pcs </p>
 
        <p>Joindre  votre fichier:  
        <p style={{color:"red"}}>Format du fichier :  .ai  (illustrator)   ou  .psd  (photoshops)		</p>
  </p>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <p style={{ marginRight: "10px" }}>Livriason </p>
              <div class="input-group-text" style={{ height: "25px" }}>
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  checked={this.state.livraison}
                  onChange={(e)=>this.handleChangeC(e)}
                  name="livraison"
                />
              </div>
            </div>
          </div>
      <p>frais de livraison:  7 dt 
          <p style={{color:"red"}} >Délai de livraison : 24h ouvrables </p></p>
       
        <p>Paiement: 50% à la commande  / 50% à la livraison 
</p>

<Link to="/register">
<button
className="btn btn-primary">Demande  devis en ligne 	</button></Link>

 <button className="btn btn-primary" onClick={()=>{console.log('this.props', this.props)
   this.props.dispatch(addCarte( { ... this . state , id : uniqid ( ) } ))
   
   this.clear()
   }}> Enregistrer </button>
        </div>
      </div>
      </div>
    );
  }
}

export default connect(null)(Carte) ;
