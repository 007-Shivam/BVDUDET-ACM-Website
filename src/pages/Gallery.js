import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Media } from '../assets/gallery/pic_gallery';


function Gallery() {
    const [file, setFile] = useState(null);

    return (
        <>
            <Container>
                <div className='gal-container'>
                    <div className="media-container">
                        {
                            Media.map((file, index) => (
                                <div className="media" key={index} onClick={() => setFile(file)}>
                                    {
                                        file.type === 'image'
                                            ? <img src={file.url} alt="" />
                                            : <video src={file.url} muted />}
                                </div>
                            ))
                        }
                    </div>

                    <div className="popup-media" style={{ display: file ? 'block' : 'none' }}>
                        <span onClick={() => setFile(null)}>&times; </span>
                        {
                            file?.type === 'video'
                                ? <video src={file?.url} muted autoPlay controls />
                                : <img src={file?.url} alt='' />
                        }
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Gallery;
