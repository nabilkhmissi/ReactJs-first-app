import Button from "./button";

export default function UploadButton() {

    function handleOnClick() {
        alert("Paly button")
    }

    return (
        <Button onClick={handleOnClick}>
            Play button
        </Button>
    )
}