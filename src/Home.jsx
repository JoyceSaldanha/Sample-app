import React from 'react';
import Header from './Header';
import { Galleria } from 'primereact/galleria';
import { useState,useEffect } from 'react';
import { PhotoService } from './Service/PhotoService';

export default function Home() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        console.log('img',PhotoService);
        setImages(PhotoService)
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '90%', display: 'block' }} />;
    };
  return (
    <>
        <Header></Header>
        <h4>Home</h4>
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '100%' }} showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    </>
  )
}
