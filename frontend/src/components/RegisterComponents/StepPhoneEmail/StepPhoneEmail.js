import React from 'react';
import Button from '../../shared/Button/Button';
import style from './StepPhoneEmail.module.css';

const StepPhoneEmail = ({ onClick }) => {
    return (
        <>
            phone email component
            <Button onClick={onClick} text="next" />
        </>
    )
}

export default StepPhoneEmail
