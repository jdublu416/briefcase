import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alertActions';
import { register } from '../../actions/authActions';
import PropTypes from 'prop-types';
// import axios from 'axios';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  //Redirect if registered  todo-redirect to jobs dashboard
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            autoComplete='new-name'
            name='name'
            value={name}
            // required
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            autoComplete='new-email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            // required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            autoComplete='new-password'
            name='password'
            // minLength='6'
            value={password}
            onChange={e => onChange(e)}
            // required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            autoComplete='new-password2'
            name='password2'
            // minLength='6'
            value={password2}
            onChange={e => onChange(e)}
            // required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);

//This was an axios post to test the backend code before redux setup
// const newUser = {
//   name,
//   email,
//   password
// };
// try {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
//   const body = JSON.stringify(newUser);
//   const res = await axios.post('/api/users', body, config);
//   console.log(res.data);
// } catch (err) {
//   console.error(err.response.data);
// }




// import React from 'react';
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Register = () => {
    state = {
        name: "",
        email: "",
        password: "",
        password2: ""
    }

//     onChange = (e) => {
//         this.setState({
//         [e.target.name] : e.target.name
//         });
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         const newRegisteredUser = {
//             id: uuid(),
//             name: this.state.name,
//             email: this.state.email,
//             password: this.state.password
//         }
//     }
    return (
        <Fragment>
            <h1 className="register">Create Your Account</h1>
            <form className="form">
                <div className="form-group">
                    <input type="text" 
                    name="name" 
                    id="name"
                    placeholder="Name"
                    value={name}
                    />
                </div>
                <div className="form-group">
                    <input type="email" 
                    name="email" 
                    id="email"
                    placeholder="Email"
                    value={email}
                    />
                </div>
                <div className="form-group">
                    <input type="password" 
                    name="password" 
                    id="password"
                    placeholder="Password"
                    value={password}
                    />
                </div>
                <div className="form-group">
                    <input type="password2" 
                    name="password2" 
                    id="password2"
                    placeholder="Confirm Password"
                    value={password2}
                    />
                </div>
            </form>
        </Fragment>
    )
}

export default Register;
