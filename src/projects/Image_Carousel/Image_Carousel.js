import './Image_Carousel.css';
import { useState } from 'react';
import Image_1 from './Carousel_images/Waterfall_1.jpeg';
import Image_2 from './Carousel_images/Waterfall_2.jpeg';
import Image_3 from './Carousel_images/Waterfall_3.jpeg';
import Image_4 from './Carousel_images/Waterfall_4.jpeg';
import { Link } from 'react-router-dom';

const arrayOfImages = [Image_1, Image_2, Image_3, Image_4];

export const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

    const goToNextImage = () => {
        if(index === arrayOfImages.length - 1)
            setIndex(0);
        else
            setIndex(index + 1);
    }
    
    const goToPreviousImage = () => {
        if(index === 0)
            setIndex(arrayOfImages.length - 1)
        else
            setIndex(index - 1);
    }

    const getNextImage = (index) => {
        if(index > arrayOfImages.length - 1)
            return arrayOfImages[0];
        else 
            return arrayOfImages[index];
    }

    const getPreviousImage = (index) => {
        if(index < 0)
            return arrayOfImages[arrayOfImages.length - 1];
        else 
            return arrayOfImages[index];
    }

    return(
        <>
            <Link to='/'>Back</Link>

            <div id="image-carousel">
                <img src={getPreviousImage(index - 1)} alt=""/>
                <img src={arrayOfImages[index]} alt="" />
                <img src={getNextImage(index + 1)} alt=""/>
            </div>
            
            <span id="button-container">
                <button onClick={goToPreviousImage}>Back</button>    
                <button onClick={goToNextImage}>Next</button>
            </span>
        </>
    )
}