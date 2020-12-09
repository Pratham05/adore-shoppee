import React from 'react';
import logoImage from '../../../assets/images/logo.svg';

/** 
  * @desc Renders the site logo
  * @returns JSX to render the image tag with site logo
*/
const Logo = () => {
    return (
        <img src={logoImage} style={{width: "100%"}}/>
    );
};

export default Logo;
