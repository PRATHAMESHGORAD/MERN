import React, { useEffect, useRef, useState,useMemo } from "react";

function App() {

    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");
    
    const timerRef = useRef(null);
    const inputRef = useRef(null);
    const previousSearchRef = useRef("");

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleTyping = (e) =>{
      setTitle(e.target.value)
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(()=>{
        console.log("saved");
        
      },2000)
    }

    const filteredNotes = useMemo(()=>{
      console.log("filtering...");
      return notes.filter(note =>
        note.toLowerCase().includes(search.toLowerCase())
      )
      
    },[notes,search])

    const handleAddNote = () => {

        if (title.trim() === "") return;

        setNotes([...notes, title]);

        setTitle("");

        inputRef.current.focus();
    };

    const handleSearch = (e) => {

        previousSearchRef.current = search;

        setSearch(e.target.value);
    };

    return (
        <div>

            <h1>Smart Notes</h1>

            <input
                ref={inputRef}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Note Title"
            />

            <br /><br />

            <textarea placeholder="Enter Description"></textarea>

            <br /><br />

            <button onClick={handleAddNote}>
                Add Note
            </button>

            <hr />

            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search Notes"
            />

            <h3>Current Search: {search}</h3>

            <h3>Previous Search: {previousSearchRef.current}</h3>

            <h2>Notes</h2>

            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>

            <ul>
              {filteredNotes.map((note,index)=> (
                <li key={index}>{note}</li>
              ))}
            </ul>

        </div>
    );
}
//work
export default App;