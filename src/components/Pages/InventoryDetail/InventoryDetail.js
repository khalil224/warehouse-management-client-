import React from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css'

const InventoryDetail = () => {
    const { id, name } = useParams();

    return (
        <div className='inventory-detail'>
            <h2>welcome to inventory detail: {id}</h2>
            <h2>{name}</h2>
        </div>
    );
};

export default InventoryDetail;