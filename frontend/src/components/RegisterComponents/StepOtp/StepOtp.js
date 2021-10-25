import React from 'react';
import Button from '../../shared/Button/Button';
import style from './StepOtp.module.css';

const StepOtp = ({ onClick }) => {
    return (
        <>
            Otp component
            <Button onClick={onClick} text="next" />
        </>
    )
}

export default StepOtp
