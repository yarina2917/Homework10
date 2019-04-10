import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import * as apiUser from '../../../services/user';
import Input from '../../UI/Input/Input';
import { checkValidity } from '../validation';

const registration = (props) => {

    const [registrationForm, setRegistrationForm] = useState([
        {
            name: 'name',
            value: '',
            valid: false,
            touched: false,
            elementConfig: {
                type: 'text',
                placeholder: 'Name'
            },
            validation: {
                required: true,
                errorName: ''
            },
        }, {
            name: 'surname',
            value: '',
            valid: false,
            touched: false,
            elementConfig: {
                type: 'text',
                placeholder: 'Surname'
            },
            validation: {
                required: true,
                errorName: ''
            },
        }, {
            name: 'email',
            value: '',
            valid: false,
            touched: false,
            elementConfig: {
                type: 'email',
                placeholder: 'Email'
            },
            validation: {
                required: true,
                isEmail: true,
                errorName: ''
            },
        }, {
            name: 'password',
            value: '',
            valid: false,
            touched: false,
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            validation: {
                required: true,
                minLength: 5,
                errorName: ''
            },
        }, {
            name: 'phone',
            value: '',
            valid: false,
            touched: false,
            elementConfig: {
                type: 'text',
                placeholder: 'Phone'
            },
            validation: {
                required: true,
                isNumeric: true,
                errorName: ''
            },
        }
    ]);

    const [formIsValid, setFormIsValid] = useState(false);
    const [error, setError] = useState(false);

    const checkIsFormValid = (updatedForm) => {
        let isFormValid = true;
        updatedForm.find(item => {
            if (!item.valid) {
                isFormValid = false;
                return true
            }
            return false
        });
        setFormIsValid(isFormValid);
    };

    const inputChangedValue = (e, index) => {
        const updatedForm = [...registrationForm];
        const updatedFormEl = {...updatedForm[index]};
        updatedFormEl.value = e.target.value;
        updatedFormEl.touched = true;

        const {isValid, errorName} = checkValidity(updatedFormEl.value, updatedFormEl.validation);
        updatedFormEl.valid = isValid;
        updatedFormEl.validation.errorName = errorName;
        updatedForm[index] = updatedFormEl;
        setRegistrationForm(updatedForm);

        checkIsFormValid(updatedForm);
    };

    const registrationHandler = (e) => {
        e.preventDefault();
        const user = {};
        registrationForm.forEach(item => {
            user[item.name] = item.value;
        });
        apiUser.registerUser(user)
            .then(res => {
                if (props.isAuth) {
                    props.logoutUser();
                }
                props.history.push('/login')
            })
            .catch(err => {
                setError(err.response.data)
            });
    };

    return (
        <div className='registration'>
            <h2>Registration</h2>
            <form onSubmit={registrationHandler}>
                {registrationForm.map((item, index) => (
                    <Input
                        key={index}
                        inputConfig={item}
                        changed={(event) => inputChangedValue(event, index)}/>
                ))}
                <p className='error'>{error}</p>
                <button disabled={!formIsValid}>Submit</button>
                <button type='button' className='buttonLink'><Link to='/login'>Go to login</Link></button>
            </form>
        </div>
    );
};

export default registration;