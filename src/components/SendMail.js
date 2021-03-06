import React from 'react';
import '../styles/SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import WarningIcon from '@material-ui/icons/WarningRounded';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import firebase from "firebase/compat/app";
import { db } from "../firebase";


function SendMail() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // Function to submit/post email details to the database.
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        // Close form once email added to the database.
        dispatch(closeSendMessage());
    };

    const dispatch = useDispatch();

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon
                    className="sendMail_close"
                    onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='to'
                    placeholder="To"
                    type="email"
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
