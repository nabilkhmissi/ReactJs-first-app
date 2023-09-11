import { useContext, useRef, useState } from 'react';
import { NotesContext } from '../context/notesContext';
import Note from '../note/note';



export default function Notes() {

    const notes = useContext(NotesContext);
    const [timerStarted, setTimerStarted] = useState(false)

    let timerRef = useRef(0);

    function handleNoteDone(id) {
        alert(id)
        let n = notes.find(item => item.id === id);
        n.done = !n.done;
    }

    function handleTimerStart() {
        setTimerStarted(true)
        timerRef.current = setTimeout(() => {
            setTimerStarted(false);
            alert("3 seconds ecoulés")
        }, 3000);
    }

    function handleTimerStop() {
        setTimerStarted(false);
        timerRef.current = clearTimeout(timerRef.current)
    }

    return (
        <NotesContext.Provider>
            <div className="notes">
                <button onClick={handleTimerStart}>{timerStarted ? "timer started ..." : "Start Timer"}</button>
                <button onClick={handleTimerStop}>Stop Timer</button>
                {notes.map(n => <Note key={n.id} note={n} changeNoteDone={handleNoteDone} />)}
            </div>
        </NotesContext.Provider>
    )
}