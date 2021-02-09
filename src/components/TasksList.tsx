import React, { useState } from 'react';
import { TaskInterface } from '../interfaces/interfaces';



interface TasksListProps {
    tasks: TaskInterface[],
    onCompleteTask(id: number): void,
    onDeleteTask(id: number): void,
};



const TasksList: React.FC<TasksListProps> = ({ tasks, onCompleteTask, onDeleteTask }) => {

    return (
        <div className="mt-4">

            {tasks.length === 0
                ?
                <div className="text-center">No tasks yet</div>
                :
                <ul className="list-group">
                    {tasks.map(task => {
                        let titleClass = task.done ? "done" : "";

                        return (
                            <li key={task.id}
                                className="list-group-item mt-1 border d-flex justify-content-between" >

                                <div className="d-flex">
                                    <div className="form-check">
                                        <input onChange={() => { onCompleteTask(task.id) }}
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={task.done} />
                                    </div>
                                    <div className={titleClass}> {task.title}</div>
                                </div>

                                <div>
                                    <i onClick={() => { onDeleteTask(task.id) }}
                                        className="fas fa-trash pt-1 text-danger cursor-pointer"></i>
                                </div>
                            </li>
                        )
                    }
                    )}
                </ul>

            }

        </div >
    );
};


export default TasksList;
