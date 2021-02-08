import React, { useState } from 'react';
import {TaskInterface} from './interfaces/interfaces';



const TasksList: React.FC = () => {
    const [tasks, useTasks] = useState<TaskInterface[]>([
        { title: "first tasks", id: 1, done: false },
        { title: "second tasks", id: 21, done: true },
    ]);


    return (
        <div className="mt-4">
            <ul className="list-group">

                {tasks.map((task) =>
                    <>
                        <li key={task.id} className="list-group-item mt-1 border d-flex">
                            <div className="form-check">
                                <input
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
