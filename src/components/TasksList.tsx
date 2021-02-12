import React from 'react';
import { TaskInterface } from '../interfaces/interfaces';


interface TasksListProps {
    tasks: TaskInterface[],
    onCompleteTask(id: number): void,
    onMakeImportantTask(id: number): void,
    onOpenDeleteModal(id: number): void
};


const TasksList: React.FC<TasksListProps> = ({ tasks, onCompleteTask, onOpenDeleteModal, onMakeImportantTask }) => {

    return (
        <div className="mt-4">
            {tasks.length === 0
                ?
                <div className="text-center">No tasks yet</div>
                :
                <ul className="list-group">
                    {tasks.map(task => {
                        let titleClass = task.done ? "done" : "";
                        if (task.important) { titleClass += " important" };

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

                                <div className="d-flex">
                                    <div>
                                        <i onClick={() => { onMakeImportantTask(task.id) }}
                                            className="fas fa-exclamation pt-1 text-info cursor-pointer mx-4"></i>
                                    </div>
                                    <div>
                                        <i onClick={() => { onOpenDeleteModal(task.id) }}
                                            className="fas fa-trash pt-1 text-danger cursor-pointer"></i>
                                    </div>
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
