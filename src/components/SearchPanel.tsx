import React from 'react';


interface ISearchPanel {
    onSetSearch(title: string): void;
};


const SearchPanel: React.FC<ISearchPanel> = ({ onSetSearch }) => {

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSetSearch(event.target.value);
    };


    return (
        <div className="form-outline mt-3">
            <input
                onChange={event => onSearchChange(event)}
                type="text" id="searchPanel"
                className="form-control border shadow-3" />
            <label
                className="form-label" htmlFor="searchPanel"
            >type a task to search</label>
        </div>
    );
};


export default SearchPanel;
