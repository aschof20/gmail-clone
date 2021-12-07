import React from 'react';
import '../styles/EmailRow.css';
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useNavigate } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
    const navigate = useNavigate();

    return (
        <div className='emailRow' onClick={() => navigate('/mail')}>
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
