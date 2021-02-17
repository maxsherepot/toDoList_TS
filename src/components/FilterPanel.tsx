import React from 'react';


interface IFilterPanel {
    filter: string,
    doneTasks: number,
    onDeleteDoneTasks(): void,
    onSetFilter(done: string): void,
};


const FilterPanel: React.FC<IFilterPanel> = ({ doneTasks, onDeleteDoneTasks, onSetFilter, filter }) => {

    const buttons = [
        { title: "all" },
        { title: "done" },
        { title: "active" }
    ];

    const createButtons = (): object => {
        let specialClass = "special-color text-light";
        return (
            buttons.map(btn =>
                < button key={btn.title}
                    onClick={() => { onSetFilter(btn.title) }}
                    className={filter === btn.title ? `btn ${specialClass}` : "btn"}>
                    {btn.title}</ button >
            )
        );
    };

    let justifyClass = doneTasks >= 2 ? "justify-content-between" : "justify-content-end";


    return (
        < div className={`d-flex ${justifyClass} align-items-baseline mt-3 mb-4`} >
            {doneTasks >= 2
                &&
                <button onClick={() => { onDeleteDoneTasks() }}
                    className="btn btn-danger btn-large"
                >Delete tasks</button>
            }
            <div className="btn-group">
                {createButtons()}
            </div>
        </div >
    );
};


export default FilterPanel;
