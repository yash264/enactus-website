import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ name }) => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const importImages = async () => {
            try {
                const imageModule = await import(`../../images/${name}/index.js`);
                const keys = Object.keys(imageModule);
                const imagesArray = keys.map((key) => ({
                    key,
                    src: imageModule[key],
                }));

                setImages(imagesArray);
            } catch (error) {
                console.error('Error importing images:', error);
            }
        };

        importImages();

    }, [name]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="grid grid-cols-1 transition-transform duration-1000 ease-in-out" style={{ height: `${images.length * 30}%`, transform: `translateY(-${currentIndex * (85 / images.length)}%)` }}>
                {images.map(({ key, src }) => (
                    <div key={key} className="w-full">
                        <ImageCard source={src} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageList;




