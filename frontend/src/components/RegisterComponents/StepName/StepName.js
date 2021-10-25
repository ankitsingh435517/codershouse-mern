import React from 'react';
import Button from '../../shared/Button/Button';
import style from './StepName.module.css';

const StepName = ({ onClick }) => {
    return (
        <>
            Name component
            <Button onClick={onClick} text="next" />
        </>
    )
}

export default StepName
