import React from 'react';

const NewFacility = () => {
    return (
        <div className="modal modal-centered" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Добавление объекта</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Организация</p>
                        <p>Объект</p>
                        <p>Адрес</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" className="btn btn-primary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewFacility;