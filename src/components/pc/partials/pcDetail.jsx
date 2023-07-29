import React from 'react'
import "../style/pcDetail.css"
import Git from "../../../assets/github.svg"
import Downloads from"../../../assets/Downloads.svg" 
import Gallery from"../../../assets/Pictures.svg" 
import Documents from"../../../assets/Documents.svg" 

function PcDetail() {
    return (
        <div className='this-pc-detail'>
            <div className='pc-folder'>
                <img src={Git} />
                <p><a href='https://github.com/Alperenhks'>GitHub</a></p>
            </div>
            <div className='pc-folder'>
                <img src={Downloads} />
                <p>Downloads</p>
            </div>
            <div className='pc-folder'>
                <img src={Gallery} />
                <p>Gallery</p>
            </div>
            <div className='pc-folder'>
                <img src={Documents} />
                <p>Documents</p>
            </div>
        </div>
    )
}

export default PcDetail