export default function Note({ note, changeNoteDone }) {

    return (
        <div className="note">
            {note.done ? <del>{note.title}</del> : note.title}
            <button onClick={() => { changeNoteDone(note.id) }}>mark as done</button>
        </div>
    )
}
