import React, { useState } from 'react';
import { TaskInterface } from '../interfaces/interfaces';

interface TasksListProps {
    tasks: TaskInterface[]
};


const TasksList: React.FC<TasksListProps> = ({ tasks }) => {

    
    return (
        <div className="mt-4">
            <ul className="list-group">
                {tasks.map(task =>
                    <>
                        <li key={task.id} className="list-group-item mt-1 border d-flex">
                            <div className="form-check">
                                <input
                                    onChange={() => { }}
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={task.done} />
                            </div>

                            <div> {task.title}</div>
                        </li>
                    </>
                )}
            </ul>
        </div >
    );
}


export default TasksList;
