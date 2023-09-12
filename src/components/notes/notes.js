import "./notes.css"
import { useEffect, useState } from 'react';
import Note from '../note/note';



export default function Notes() {

    const [notes, setNotes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            setNotes([
                { id: 1, title: "first note", done: false },
                { id: 2, title: "second note", done: false },
                { id: 3, title: "third note", done: false },
            ]);
        }, 1000);
    })

    function renderNotes(notes) {
        return (
            notes && notes.map(n => <Note key={n.id} note={n} />)
        )
    }
    const loader = <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="loader.svg" style={{ width: '60px', textAlign: 'center' }} />
    </div>;

    return (
        <div className="notes">
            <h1>Notes List</h1>
            {loading ? loader : renderNotes(notes)}
        </div>
    )
}