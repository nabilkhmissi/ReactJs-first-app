import "./note.css"
export default function Note({ note }) {

    return (
        <div className="note">
            {note.done ? <del>{note.title}</del> : note.title}
        </div>
    )
}
