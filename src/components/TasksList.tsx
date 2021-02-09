import React, { useState } from 'react';
import { TaskInterface } from '../interfaces/interfaces';



interface TasksListProps {
    tasks: TaskInterface[],
    onCompleteTask(id: number): void,
};



const TasksList: React.FC<TasksListProps> = ({ tasks, onCompleteTask }) => {

    return (
        <div className="mt-4">
            <ul className="list-group">
                {tasks.map(task => {
                    let titleClass = task.done ? "done" : "";

                    return (
                        <li key={task.id}

                            className="list-group-item mt-1 border d-flex" >
                            <div className="form-check">
                                <input
                                    onChange={() => { onCompleteTask(task.id) }}
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={task.done} />
                            </div>
                            <div className={titleClass} > {task.title}</div>
                        </li>
                    )
                }
                )}
            </ul>
        </div >
    );
};


export default TasksList;
