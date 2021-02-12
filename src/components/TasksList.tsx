import React from 'react';
import { TaskInterface } from '../interfaces/interfaces';


interface TasksListProps {
    tasks: TaskInterface[],
    doneTasks: number,
    onCompleteTask(id: number): void,
    onMakeImportantTask(id: number): void,
    onDeleteDoneTasks(): void,
    onOpenDeleteModal(id: number): void
};


const TasksList: React.FC<TasksListProps> = ({ tasks, doneTasks, onCompleteTask, onOpenDeleteModal, onMakeImportantTask, onDeleteDoneTasks }) => {

    return (
        <div className="mt-4">
            {tasks.length === 0
                ?
                <div className="text-center">No tasks yet</div>
                :
                <>
                    {doneTasks >= 2 &&
                        <button
                            onClick={() => onDeleteDoneTasks()}
                            className="btn btn-danger btn-large mb-3">Delete tasks</button>}

                    <ul className="list-group">
                        {tasks.map(task => {
                            let titleClass = task.done ? "done" : "";
                            if (task.important) { titleClass += " important" };

                            return (
                                <li key={task.id}
                                    onClick={() => { onCompleteTask(task.id) }}
                                    className="list-group-item mt-1 border d-flex justify-content-between" >
                                    <div className="d-flex">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                readOnly
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

                </>


            }
        </div >
    );
};


export default TasksList;
