import { useEffect, useRef } from "react"

export default function VideoPlayer({ src, isPlaying }) {

    let videoRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }, [isPlaying])
    return (
        <video controls src={src} loop playsInline ref={videoRef}></video>
    )
}