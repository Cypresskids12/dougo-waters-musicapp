'use client'
import { useState } from 'react'
import styles from "./styles.css"

export default function MusicBox(props){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="music-grid">
            <div className="image-box">
            <img src={props.source} alt="cover" className="music-image" onClick={() => {
                window.open(props.link, '_blank');
            }} onMouseEnter={() => {
                setIsHovered(true);
            }}
                onMouseLeave={() => {
                    setIsHovered(false)
                }} />
                {isHovered ? <img src='download.png' className='play-button' /> : <></>}
            </div>
            <div className="music-info-box">
                <h1 className="song-name">{props.name}</h1>
                <p className="music-supp-text">on</p>
                <h1 className="album">{props.album}</h1>
                <p className="music-supp-text">by</p>
                <h1 className="artist-name">{props.artist}</h1>
                <p className="lyric">'{props.lyric}'</p>
            </div>
        </div>
    )
}