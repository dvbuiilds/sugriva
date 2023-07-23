import React, {useState, useEffect} from 'react'

const Img = (props) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
        try {
            const imageModule = await import(`../../assets/images/${props.src}`);
            setImage(imageModule.default);
        } catch (error) {
            // Handle error if the image fails to load
            console.error('Error loading image:', error);
        }
        };

        loadImage();
    }, [props.src]);
  return (
    <>
        <img src={image} alt={'../../assets/images/dp-placeholder.png'} className='rounded-circle d-block p-2' style={{maxWidth: "175px"}}/>
    </>
  )
}

export default Img