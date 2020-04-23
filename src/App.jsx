import React from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "./Components/notes";

function App() {
    return (
        <div>
            <Header />
            {notes.map(note => <Note key={note.key} title={note.title} content={note.content} />)}
            <Footer />
        </div>

    );
}

export default App;