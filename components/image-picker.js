"use client"
import { useState, useRef } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {

    const [pickedImage, setPickedImage] = useState();

    const imageInput = useRef();
    const handlePickClick = () => {
        imageInput.current.click();
    }

    const handleImageChange = (event) => {

        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return
        }

        const fileReader = new FileReader();

        //This onload is triggered when fileReader.readAsDataURL(file)
        // finishes reading
        fileReader.onload = () => {
            console.log("Reading finsihed");
            setPickedImage(fileReader.result);
        };

        console.log("Now this is executing...")
        fileReader.readAsDataURL(file);

    }


    return <div className={classes.picker}>
        <div className={classes.preview}> 
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked</p>}
                {pickedImage && <Image src={pickedImage} alt="Abc" fill/>}
            </div>

        <input
            className={classes.input}
            type="file"
            ref={imageInput}
            multiple
            onChange={handleImageChange}
            name={name}
            required

        />
        <button
            className={classes.button}
            type='button'
            onClick={handlePickClick}>
            Pick an Image
        </button>

        {pickedImage && <Image
            src={pickedImage}
            alt="abx"
            fill
        />}
        </div>

    </div>

}