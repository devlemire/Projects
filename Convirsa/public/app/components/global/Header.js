import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="global-header">
        <img className="global-header-logo" src="https://www.convirza.com/wp-content/themes/fluid-yeti/assets/img//header-logo.png" />
        <div className="global-header-mobile-menu"></div>
        <div className="global-header-contact-container">
           <div className="global-header-contact-info-container">
             <div className="global-header-contact-top">
               <p className="global-header-phone-icon"><i className="fa fa-phone"></i></p>
               <p> CALL NOW:</p>
             </div>
             <div className="global-header-contact-bottom">
               <p className="global-header-phone-number">(888) 340-6747</p>
             </div>
           </div>
         </div>
      </div>
    )
  }
}
