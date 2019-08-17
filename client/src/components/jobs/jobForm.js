import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addJob } from '../../actions/jobActions';


const jobForm = ({addJob}) => {
    const [ formData, setFormData ] = useState({
        companyName: '',
        title: '',
        description: '',
        contactPerson: '',
        status: '',
        interviewPending: false,
        notes: '',
        dateapplied: '',
        archives: ''
    });

    const { companyName, title, description, contactPerson, status, interviewPending, notes, dateapplied, archives } = formData;

    const onChange = e => {
        setFormData({ [e.target.name]: e.target.value })
    };

    const onSubmit = e => {
        e.preventDefault();
        addJob({formData });
        setFormData(''); // emptying the input fields after saving job data
    };

    return (
        <div className="job-form">
            <div className="bg-primary p">
                <h3>Add A Job</h3>
            </div>
            <form className="form my-1" onSubmit={ onSubmit }>
                <div className="form-group">
                    <input 
                    type="text"
                    placeholder="Company Name"
                    name="companyName"
                    value={ companyName }
                    onChange={e => onChange(e)}
                    />
                    <input 
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={ title }
                    onChange={e => onChange(e)}
                    />
                    <input 
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={ description }
                    onChange={e => onChange(e)}
                    />
                    {/* Need to do buttons for status, notes, and contactPerson/Need to do radio button for interviewPending */}
                    <input 
                    type="text"
                    placeholder="Date Applied"
                    name="dateapplied"
                    value={ dateapplied }
                    onChange={e => onChange(e)}
                    />
                </div>
            </form>
        </div>
    )
}

jobForm.propTypes = {
addJob: PropTypes.func.isRequired
}

export default connect(null, {addJob})(jobForm)
