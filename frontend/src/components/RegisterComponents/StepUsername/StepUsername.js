import React from 'react';
import Button from '../../shared/Button/Button';
import style from './StepUsername.module.css';

const StepUsername = ({ onClick }) => {
    return (
        <>
            Username component
            <Button onClick={onClick} text="next" />
        </>
    )
}

export default StepUsername
