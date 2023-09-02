import PlayButton from "../buttons/playButton";

export default function Toolbar() {


    function handleAnchorClick(e) {
        e.preventDefault();
        alert("anchor clicked")
    }

    return (
        <div className="toolbar">
            <PlayButton />
            <a href="" onClick={handleAnchorClick}>Submit</a>
        </div>
    )
}