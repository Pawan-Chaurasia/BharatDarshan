import React from 'react'
import ImageSlider from '../Components/ImageSlider'
export default function CulturalArtifacts() {
    return (
        <>
        <div className='container'>
            <h1 className='culturalartifacts-heading my-3 text-center'>CULTURAL ARTIFACTS</h1>
            <hr className='my-5' />
            <div className="artworks my-5">
                <h2>Artworks :</h2>
                <ImageSlider />
                

            </div>
            <div className="artworks my-5">
                <h2>Historical Artifacts :</h2>
                <ImageSlider />
                

            </div>
            <div className="artworks my-5">
                <h2>Cultural Artworks :</h2>
                <ImageSlider />
                

            </div>
            <div className="artworks my-5">
                <h2>Material Culture :</h2>
                <ImageSlider />
                

            </div>
            <hr className='my-5' />
            <h1 className='culturalartifacts-heading-footer my-3 text-center'>FOOTER</h1>
        </div>
        </>
    )
}
