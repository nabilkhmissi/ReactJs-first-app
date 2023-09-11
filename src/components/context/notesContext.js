import { createContext } from "react";

let notes = [
    { id: 1, title: "first note", done: false },
    { id: 2, title: "second note", done: false },
    { id: 3, title: "third note", done: false },
]

export const NotesContext = createContext(notes);