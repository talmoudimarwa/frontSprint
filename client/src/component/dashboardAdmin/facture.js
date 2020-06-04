import React, { useEffect, useState } from 'react';

const Facture= (props) => {
  return (
<div className="body">
<div className="clearfix header">

      <h1 className="facture text-primary">Facture</h1>
      <div 
       className="company clearfix">
        <div>S'PRINT</div>
        <div>Carthage,<br /> TUNISIE</div>
        <div>(602) 519-0450</div>
        <div><a href="mailto:company@example.com">company@example.com</a></div>
      </div>
      <div className="project">
        <div><span>PROJECT</span> Website development</div>
        <div><span>CLIENT</span> John Doe</div>
        <div><span>ADDRESS</span> 796 Silver Harbour, TX 79273, US</div>
        <div><span>EMAIL</span> <a href="mailto:john@example.com">john@example.com</a></div>
        <div><span>DATE</span> April 17, 2020</div>
        <div><span>DUE DATE</span> Mai 17, 2020</div>
      </div>
      </div>

    <div>
      <table>
        <thead>
          <tr>
            <th className="service">SERVICE</th>
            <th className="desc">DESCRIPTION</th>
            <th>PRIX</th>
            <th>QTE</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="service">Carte</td>
            <td className="desc">Hauteur:10,Largeur:6,Papiè coucher 350gr</td>
            <td className="unit">40.00dt</td>
            <td className="qty">26</td>
            <td className="total">1,040.00dt</td>
          </tr>
          <tr>
            <td className="service">Flyer</td>
            <td className="desc">Hauteur:20,Largeur:14</td>
            <td className="unit">40.00dt</td>
            <td className="qty">80</td>
            <td className="total">3,200.00dt</td>
          </tr>
          <tr>
            <td className="service">Dépliant</td>
            <td className="desc">Optimize the site for search engines (Dépliant)</td>
            <td className="unit">40.00dt</td>
            <td className="qty">20</td>
            <td className="total">800.00dt</td>
          </tr>
          <tr>
            <td className="service">Porte document</td>
            <td className="desc">Initial training sessions for staff responsible for uploading web content</td>
            <td className="unit">40.00dt</td>
            <td className="qty">4</td>
            <td className="total">160.00dt</td>
          </tr>
          <tr>
            <td colspan="4">TOTAL</td>
            <td className="total">5,200.00dt</td>
          </tr>
          <tr>
            <td colspan="4">TAX 25%</td>
            <td className="total">1,300.00dt</td>
          </tr>
          <tr>
            <td colspan="4" class="grand total">GRAND TOTAL</td>
            <td className="grand total">6,500.00dt</td>
          </tr>
        </tbody>
      </table>
      <div id="notices">
        <div>NOTICE:</div>
        <div className="notice">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>
      </div>
    </div>
    <footer>
      Invoice was created on a computer and is valid without the signature and seal.
    </footer>


    </div>)
}





export default Facture