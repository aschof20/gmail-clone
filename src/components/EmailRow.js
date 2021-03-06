import React from 'react';
import '../styles/EmailRow.css';
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';


function EmailRow({ id, title, subject, description, time }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time
        }));
        navigate('/mail');
    };

    return (
        <div className='emailRow' onClick={openMail}>
            <div className="emailRow_options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>

            </div>

            <h3 className="emailRow_title">{title}</h3>
            <div className="emailRow_message">
                <h4>{subject}{" "}
                    <span className="emailRow_description">- {description}</span>
                </h4>
            </div>
            <p className="emailRow_time">{time}</p>

        </div>
    );
}

export default EmailRow;
