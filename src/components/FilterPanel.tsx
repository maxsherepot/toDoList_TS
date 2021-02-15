import React from 'react';


interface FilterPanelProps {
    doneTasks: number,
    onDeleteDoneTasks(): void,
};


const FilterPanel: React.FC<FilterPanelProps> = ({ doneTasks, onDeleteDoneTasks }) => {

    let justifyClass = (doneTasks >= 2) ? "justify-content-between" : "justify-content-end";

    return (
        < div className={`d-flex ${justifyClass} align-items-baseline`} >
            {doneTasks >= 2
                &&
                <button onClick={() => { onDeleteDoneTasks() }}
                    className="btn btn-danger btn-large"
                >Delete tasks</button>
            }

            <div className="btn-group special-color mt-4">
                <a href="#!" className="btn text-light active">All</a>
                <a href="#!" className="btn text-light">Done</a>
                <a href="#!" className="btn text-light">To do</a>
            </div>
        </div >
    );
};


export default FilterPanel;
