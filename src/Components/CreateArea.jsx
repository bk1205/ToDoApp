import React, { useState } from "react";

function CreateArea(props) {
    const [inputNote, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <div>
            <form onSubmit={(event) => {
                props.onAdd(inputNote);
                setNote({ title: "", content: "" })
                event.preventDefault();
            }}>
                <input
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={inputNote.title}

                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows="3"
                    value={inputNote.content}

                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
