import React from 'react';


interface DeleteModalProps {
    onCloseDeleteModal: any,
    onDeleteTask: any
};


const DeleteModal: React.FC<DeleteModalProps> = ({ onCloseDeleteModal, onDeleteTask }) => {

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Delete task</h4>
                    <span onClick={() => onCloseDeleteModal()}
                        className="close">&times;</span>
                </div>
                <div className="modal-body">
                    <span>Do you really want to delete the task?</span>
                </div>
                <div className="modal-footer">
                    <button
                        onClick={() => onCloseDeleteModal()}
                        className="btn btn-secondary">Cancel</button>
                    <button
                        onClick={() => onDeleteTask()}
                        className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};


export default DeleteModal;
