import React, { useState, useEffect } from 'react';
import styles from './ImageViewer.module.scss';


/** 
  * @desc Renders an array of images styled with one of them made larger than others
  * Example of images = [img1, img2, img3, img4];
  * img1 will be used as the default large image
  * shifts can be made on hovering on the smaller images 
  * @returns JSX to render the images styled in a way that one of them is larger 
*/
const ImageViewer = ({images}) => {
    // UI State relevant to only this component
    // Stores the path of the image to be displayed in big size
    // Changes whenever a small image is hovered on
    const [bigImage, setBigImage] = useState(images[0]);


    /**
     * @desc Handler for mouse hover
     * sets the state to the source of the image tag which is hovered
    */
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
