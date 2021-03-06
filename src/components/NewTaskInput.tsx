import React, { useState } from 'react';


interface INewTaskInput {
    onAddTask(title: string): any;
};


const NewTaskInput: React.FC<INewTaskInput> = ({ onAddTask }) => {
    const [title, setTitle] = useState<string>("");

    const onTitleChahge = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    };

    const onInputSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onAddTask(title);
        setTitle("");
    };


    return (
        <form
            className="mt-5 d-flex justify-content-between"
            onSubmit={event => onInputSubmit(event)}>
            <div className="form-outline">
                <input
                    value={title}
                    onChange={event => onTitleChahge(event)}
                    type="text" id="filterPanel"
                    className="form-control border shadow-3" />
                <label className="form-label" htmlFor="filterPanel">enter a task</label>
            </div>

            <button type="submit"
                className="btn special-color text-light">Add task
            </button>
        </form>
    );
};


export default NewTaskInput;
