import React, { useState } from 'react';
import styles from './ImageViewer.module.scss';

import SampleImage from '../../../assets/images/sampleProduct.jpeg';
import Logo from '../../../assets/images/logo.svg';

// Array of full image links
const images = [SampleImage, Logo, SampleImage, Logo]; 

const ImageViewer = () => {

    // UI State relevant to only this component
    // Stores the path of the image to be displayed in big size
    // Changes whenever a smaller image is hovered on
    const [bigImage, setBigImage] = useState(images[0]);

    const onMouseOverHandler = (event) => {
        setBigImage(event.target.src);
    }

    // This variable is used to give the active class name to the image which is selected
    let smallImageClass = styles.ImageViewer__Active;

    const smallImages = images.map((image, index) => {
        return <img className={image === bigImage ? smallImageClass : ""} 
                    onMouseOver={onMouseOverHandler} 
                    src={image} key={index} alt={"Small" + index}/>
    });

    console.log(smallImages[0])

    return (
        <div className={styles.ImageViewer}>
            <div className={styles.ImageViewer__ImgSmall}>
                {smallImages}
            </div>
            <div className={styles.ImageViewer__ImgBig}>
                <img src={bigImage} alt="Large"/>
            </div>
        </div>
    );
};

export default ImageViewer;
