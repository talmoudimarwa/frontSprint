import React, { Component } from "react";
// import Navbar from "./Navbar"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import uniqid from "uniqid"
import {addFlyer}  from "../../action/flyer"
class Flyer extends Component {
    state={id:Math.random(),
        hauteur:"",
        largeur:"",
        couche: false,
        couches: false,
        couleur:false,
        noir:false,
        recto:false,
        rectoverso:false,
        quantite:"",
        livraison:false,
        paiement:false,
        date :new Date()
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
      }
      handleChangeC=(e)=>{
        console.log("e.target" ,e.target)
        this.setState({
        [e.target.name]:e.target.checked
      })}
      clear=()=>{
        this.setState({
       hauteur:"",
      largeur:"",
          couche: false,
          couches: false,
          couleur:false,
          noir:false,
          recto:false,
          rectoverso:false,
          quantite:"",
          livraison:false,
          paiement:false,
      } )
      }
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
          <h3 className="carte">Flyers 		
</h3>
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
             <img class="rg_i Q4LuWd tx8vtf" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBUTExIVFRIXFRcVFhYYFhsYExYSFRUWFxYVFRYaISggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGysiICUrNy0vLTIvLSstLy8tLTc3Ky0xKy4rLS0vNS4tLi0rLS0tLS0tLS0tLS01Ky0rLS0tLf/AABEIAL8AvAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwECBAUGBwj/xAA8EAABAwEGBAQEAwcEAwEAAAABAAIRAwQFEiExURNBYZEGInGhBzKBsULB0RRSYnKCsvAjM0OiRMLhFf/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACsRAQEAAgEDAwIFBQEAAAAAAAABAgMREiExE0HwBFEUMmFxgSJCUqHBBf/aAAwDAQACEQMRAD8A9ZwDYdkwDYdlciC3ANh2TANh2VyILcA2HZMA2HZXIgtwDYdkwDYdlciC3ANh2TANh2VyILcA2HZMA2HZXIgtwDYdkwDYdlciC3ANh2TANh2VyILcA2HZMA2HZXIgtwDYdkwDYdlciC3ANh2TANh2VyILcA2HZMA2HZXIgIiICIiAiIgIiICKjiBqY9cliVr0s7fmrUx/WFMlvhFsnlmItJaPFdiZrVn+Vrj+S1Fq+Illb8tOq/6Bo9z+S0mjZf7azu/X/lHZIvNbX8UH/wDHZWjq55PsAFobd8S7xM4eFT9GSe7iVf8ADbPeI/EYe1e0Ictcgvnq0+Nb0qGDaqufJkM/tAWjt1vtDzFWrVcf4nuP3Ki6bPNT6s+z6Qtl/WOl/uWmizoajZ7TK0Vq+JN1MMCuXmY8jHEZ9SAF8/FOG4iQDG/JZ3GTytMufD6vRazwxbeNYrPV/fosJ/mDQHe4K2aouIiICIiAiIgIiICIsW8g7gvwkh0ZEa9faVMnN4RbxOWHe9+U6Mtb56vJo0B3d+mq5epVtdQkuqvAJ0DiAOgAWfYbqzBK31nu7LTku7H09U7d687Kbd/ntPs4s3Y52ri49TKiq3XAByz0jOfRdTQueuKRZggluGSW4QJzIjM5bo+6HN/G0BpJblAAIhwInIaHVdHrSXy4b9PnlOem/P3/AE/44mvYP86LWXlZmMYXOxEASQ1sxG5MALsr3s4pUC8PD3wcIEeck8vQleeVzaqjfMym4+ctxFpecziDBOcRtyW+OzmdnPNWeOU6rJ/May1W6n+EO16Zj0WK54cJB/VZRul+JzSQC2mKm8sOHT6H2Ute4DR4j6jiWU8JBYAcbScJidCDEjqsr1e70PU1TtL8+VgWNo4jZBI2CrftINdlTLZ5kmV1NVljpcIy6fK45Z4HCdtlW/7fdxcCxjqmWczA7815e67JvnGNs+fw9f6easvp++cnPf57uBNE4ZkLo/CNwstNKpiqOEEDC3qNTKide7AxzG0GQZ116LO+Ht22+sawsr6bQ0NLy/STOGBnnqs/qNe7PCzHtfZbRnp15y5f1T37V6P8M7yY2xCgXSaNR9Of4ScY/uXbtMrxDwo+tRtNelVPnxAu2xAlrvyXsd1VMVMFLjce2XlWZY5d8fDNREUJEREBERARFc1hOgQWqjhIhTtsx5mFK2g31U8DCs1jWypUwFa2ArmOzVreUSSOcZSeXlo4pqftDgSceA2czqT5Yg5Rnksax3a40sD6T8UDMNYwy10jzuJxfUQuwJUGGVr699o5PwWNvNvyuVvDw8+swY2tcwOdDXFocGkCCS0YSQ4TovOb6s9SxvFIslkvIdkA5j+THAeUgzpC9wfTJC19puqnVa5lQBzSCI2kRPqtNX1dx8+FNn/n4ZeP9/tw8Aq3gcJGAY+HwscmeHpEaTGUrDtV6VTxBIDagAe2MpAAkTochmuq8UeEKlmLfO1+IkD8JJ6A6iIzXH2ikQYIhd3VMpzjXNNWON4s7lO8pAZVzAAa1wHma0aN6j3WRYbZZA7/AFMREfuZT0zlap7VjuC59ktnHLq13HGy8R2/hY3V+0Y69SmGBpLWPDoxyIxDDBETl6LvW2CwWuP2C106FcgAuoFocWalrqYjF023XgzkpVXMe17HFr2kFrgYII0IO64Mtd6+rqvLsmzHp6emcPW7f4Ir2F7avG47CXNeS0teJEhxkmcxn6rvPDdSaIXjNG97wtRFbjgtxAPpYwMmxiOA7jOV634PqzTjZVvPveVuMZJ0zh0SIigEREBERBdSdBCzlr1mUXS0dlMEiIikRv1VWuAVtd0CVABiMkZch+qCeramt5+8LGF4QOXeT10CqaIBy1+mnqVZVdmBz/mj7BTOEWZKtvB2w7Fay874fSY6o4ENHQa8gPVbGo0R+H0zPYSvO/H17NL20mOa5rRLsOQ4h5EjWB9ytdGE2Z8cMPqdl1YW+7n79vSraKpqPzOgGHIN2E8lp7RU9e7QlUueYaCTsASsV9irHSk8/wBJXrWzGcR5OGGWV5rFtlJkZRPRxJ+0LW1aaybUXNcWuEEajZYb6i58rK7MJYhe1REKVzlYSuXZI6MLVtMkGea95+HNsx0mmdWA/WM/eV4OvVvhJbPIGz8rnN+nzD7rny8N8fL1pERZriIiAiIgKayuzhQqrXQZQZ6KgVVYR1xksOvXDR1+yznCQR0XHXxb48u6tjhc7wpnsmvHmtt/+i069/8AAjLQ06ZlcnY6rjkT9FfUvF1OdjlM/ktfTx54xvdndu2YzPOWRN4y8QuoOFMMcGub88fODqGE6DkuGN8CYbT74fro381Z4l8XWioRRLhgp+VvkGIwIJOKecrn2WzOT7AAdhELs1YTHDvHHutzz5ldObwqkgthpnWX6bfMsG+ryeKRHlk5ThEmdcyFgUbwJMcvzWbWu6lUALqjwOjOfqVOWWOPlTHDO1x71G5dBeFjsdMGXVC+Ja3KTi+UmBDREHWeixBYWOcTDWNIDmhziYblMuESd1lc46ZjWkcrVu33dRmHVmNA5tzDp1g5xHVXU7Nd4AxVqpd5ZDQIzEuDTGcHJc+V7tsY0IXbfC214bQ5u+Fw+hg/cLSivd7Sf9Ko4CQJJBI84BOeR/2z3U3h61MFvY+kwtpmGkawcIkztiErK+Gk8vo5pyCuWLdtXFSaeiylmuIiICIiAiIgy7M6R6KVYlndB9Vlq0BeaeLKgpV3z+95R0Oa9LXmvxGu6rUtlNlJpc6qwQBu0wSdgBBJW2n83FYb/wAvMnNcky+Xsc4TlKvfebnaleqXR4SsdOkwPoU6lQAYnubiLn8znynRbOlY7Kz5aVFvoxo/Ja3fhzzMWXo7bj05Z9ngt/3UHDiNDjUjMATJ9N1qrLcNse3yWauT0pPj7L6WFppjQj6BVfagJ1MfpP2VZvy+y3o4SeXz5YfBl76sslVvU4W/3FbZnw9vyoIcWtB1xVm/+sr2v9p2Y7WNMvX0UzCSMxB2Vct2X6L46sPZ4uz4OWxxmpaaLTzjG8/YLY2f4Ks/5LY49G0gOxLj9l6yizuzKtJrxjzqzfBy7m/PUtD/AOtrR7N/NbezfDO6Gf8AjYz/AB1Hu9phdcqFw3Vbav0xqLJ4Tu6n8ljs468JpPchbJ1ip8NzGsa1rmlsBoAgiOSl4g3RtSeR7QoS5PwpVPCLDqwlp9QYW8Whsg4dvr0+RdjHo8B33JW+VUCIiAiIgIiICzmOkArBWRZXahTBkKCtTbiD4GIAtB5gGCR7Dsp1HWGSkKJVjDSJIGGQYjnOsCVWgdUdZmF+MjzCIM7KYi8+y4Yf3f8Aqhqxyj1IH5qnln5fqdFTG0cmg+oUJVNb07z9grmucduxVvFyyifqfsED3f439SiUsZKCjSeGkOMmcoJGXrr1+qlpzGc/X/4senaHOe5hYQM4OfKIn1nlspnhW2SzlLwj09yqBrR+IT6BWBvT/r+pV4aevsPsoWSMqDcn6Sqmp0PsPurAwnX+4qTANgg5XxI3h22jU5PYWn1Yf0ctyCsDxtRmiyoNadRp+jsj7wsqyPljT0UITIiKAREQEREBX0XQQrEQbBUcJBVtF0gK9WSxqBzVatDEZxGNlj164p5k84CxnXttPYJLwrZL5bN9KTOXYFXcLqfYfktFVvZ28DqYWFUvxvOoD6S5Ql1RYOZP1cqcVjfxAfVcgbzc75KdR3o2B7qraVsf8tCOrnIOqfeFIfiChfe9Ibn6Ln23FbXa1GM9GyfdSN8H4v8ActFR3QGB2UjZV/EVJusD+ZwC11fxrQGjmn0l32U9HwXYxq0uPUrPo+HrI3Si3sg5i1eOyBLKb3egDfcrWu8b2x58tNrRuXEnsIXoDrBZwCCxkEQRHIrRjw1ZxoDCgchabdWqmajyek+UegXa+H62KiOiiHh+lsthY7I2mIbooGQiIgIiICIiAiIgnsrsyFkrAY6DKzlMGqvO66lR8tqBo9J7LGZ4bB+es89AYHst+ikail4bsw1ZiP8AEZWbSu+i35abR9FlIgtDQNAFcrHVQOaidadggyFY6oBqViOqE81ao5GQ607BROquPNWIo5BERAREQEREFFVWqqCqKiIKoiICy7O6W+ixFfTqEIM1WOqAc1iOqE81ap5GQ607BQuqE81aigEREBERAREQEREBERAREQWKqi4zd1XjN3QSoouM3dOO3dBKqqLjN3QVm7oJUUfGbunGbugkRR8Zu6cZu6CRFHxm7pxm7oJEUfGbunGbugkRR8Zu6cZu6CRFHxm7pxm7oJEUfGbunGbugkRR8Zu6cZu6CRFHxm7pxm7oP//Z" data-deferred="1" jsname="Q4LuWd" alt="Impression flyer pas cher en ligne » Tract publicitaire" data-iml="677.1249999874271" data-atf="true"/>
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
          Votre flyer professionnels est un outil essentiel pour vous présenter et vous démarquer, 

          </p>
          <p>Dimensions stand 20 cm x 14 cm  </p>
          <div style={{ display: "flex", justifyContent: "space-betweens" }}>
          <p style={{marginRight:"10px"}}>Dimensions personnalisées :</p>
          <input style={{width:"70px",height:"35px"}}
           type="text"
           placeholder="...."
           onChange={(e)=>this.handleChange(e)}
           value={this.state.hauteur}
           name="hauteur"/>
           <p style={{marginLeft:"20px"}}> X </p>
             <input style={{width:"70px",height:"35px",marginLeft:"10px"}}
           type="text"
           placeholder="...."
           onChange={(e)=>this.handleChange(e)}
           value={this.state.largeur}
           name="largeur"/>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <p style={{ marginRight: "10px" }}>Papier couché 350gr </p>
              <div class="input-group-text" style={{ height: "25px" }}>
                <input
                   type="radio" aria-label="Radio button for following text input"
                   checked={this.state.couche}
                  onChange={(e)=>this.handleChangeC(e)}
                  name="couche"
                />
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <p style={{ marginRight: "10px" }}>Papier couché 170gr  </p>
              <div class="input-group-text" style={{ height: "25px" }}>
                <input
                  type="radio" aria-label="Radio button for following text input"
                  checked={this.state.couches}
                  onChange={(e)=>this.handleChangeC(e)}
                  name="couches"
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
                   onChange={(e)=>this.handleChangeC(e)}
                   name="livraison"
                  
                   checked={this.state.livraison}
                />
              </div>
            </div>
          </div>
      <p>frais de livraison:  7 dt 
          <p style={{color:"red"}} >Délai de livraison : 24h ouvrables </p></p>
       <div style={{display:"flex" , justifyContent: "space-betweens"}}>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
            <p style={{ marginRight: "10px" }}> Paiement de livraison</p>
              <div class="input-group-text" style={{ height: "25px" }}>
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  onChange={(e)=>this.handleChangeC(e)}
                  name="paiement"
                 
                  checked={this.state.paiement}
                />
              </div>
            </div>
          </div>
           <p style={{ width:"50%"}}>Paiement sur place</p></div>
           <Link to="/register">
<button className="btn btn-primary">Demande  devis en ligne 	</button></Link>
<button className="btn btn-primary" onClick={()=>{console.log('this.props', this.props)
   this.props.dispatch(addFlyer( { ... this . state , id : uniqid ( ) } ))
   this.clear()}}>suivant</button>
        </div>
      </div>
      </div>
    );
  }
}

export default  connect(null)(Flyer) ; 
