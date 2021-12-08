import React from 'react';
import '../styles/SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import WarningIcon from '@material-ui/icons/WarningRounded';

function SendMail() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
    };


    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='to'
                    placeholder="To"
                    type="text"
                    {...register('to', { required: true })}
                />
                {errors.to && <span className="sendMail_error">
                    <WarningIcon /> <p>Email recipient is required!</p>
                </span>}
                <input
                    name='subject'
                    placeholder="Subject"
                    type="text"
                    {...register('subject', { required: true })}
                />
                {errors.subject &&

                    <span className="sendMail_error">
                        <WarningIcon /> <p>Email subject is required!</p>
                    </span>
                }
                <input
                    name='message'
                    placeholder="Message"
                    type="text"
                    className="sendMail_message"
                    {...register('message', { required: true })}
                />
                {errors.message && <span className="sendMail_error">
                    <WarningIcon /> <p>Email message is required!</p>
                </span>

                }
                <div className="sendMail_options">
                    <Button
                        className="sendMail_button"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send</Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
