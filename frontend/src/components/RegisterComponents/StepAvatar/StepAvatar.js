import React from 'react';
import Button from '../../shared/Button/Button';
import style from './StepAvatar.module.css';

const StepAvatar = ({ onClick }) => {
    return (
        <>
            Avatar component
            <Button onClick={onClick} text="next" />
        </>
    )
}

export default StepAvatar
