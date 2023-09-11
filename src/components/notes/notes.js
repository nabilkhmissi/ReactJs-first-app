import { useContext } from 'react';
import { NotesContext } from '../context/notesContext';
import Note from '../note/note';



export default function Notes() {

    const notes = useContext(NotesContext);

    function handleNoteDone(id) {
        alert(id)
        let n = notes.find(item => item.id === id);
        n.done = !n.done;
    }

    return (
        <NotesContext.Provider>
            <div className="notes">
                {notes.map(n => <Note key={n.id} note={n} changeNoteDone={handleNoteDone} />)}
            </div>
        </NotesContext.Provider>
    )
}