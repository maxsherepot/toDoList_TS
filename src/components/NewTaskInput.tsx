import React, { useState } from 'react';


interface NewTaskInputProps {
    onAddTask(title: string): any;
};


const NewTaskInput: React.FC<NewTaskInputProps> = ({ onAddTask }) => {
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
        <div className="mt-5 d-flex justify-content-between">
            <form onSubmit={event => onInputSubmit(event)}>
                <div className="form-outline">
                    <input
                        value={title}
                        onChange={event => onTitleChahge(event)}
                        type="text" id="form1Example2"
                        className="form-control border shadow-3" />
                    <label className="form-label" htmlFor="form1Example2">Password</label>
                </div>
            </form>
            <button type="submit"
                className="btn special-color text-light">Add task</button>
        </div>
    );
};


export default NewTaskInput;
