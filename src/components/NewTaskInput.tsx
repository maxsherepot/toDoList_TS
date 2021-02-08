import React from 'react';


const NewTaskInput: React.FC = () => {

    return (
        <div className="mt-5 d-flex justify-content-between">
            <form>
                <div className="form-outline">
                    <input type="text" id="form1Example2"
                        className="form-control border shadow-3" />
                    <label className="form-label" htmlFor="form1Example2">Password</label>
                </div>
            </form>

            <button className="btn special-color text-light">Add task</button>
        </div>
    );
}


export default NewTaskInput;
