import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as apiUser from '../../../services/user';
import Input from '../../UI/Input/Input';
import { checkValidity } from '../validation';

const login = (props) => {

    const [loginForm, setLoginForm] = useState([
        {
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

    const inputChangeHandler = (e, index) => {
        const updatedForm = [...loginForm];
        const updatedFormEl = {...updatedForm[index]};
        updatedFormEl.value = e.target.value;
        updatedFormEl.touched = true;

        const {isValid, errorName} = checkValidity(updatedFormEl.value, updatedFormEl.validation);
        updatedFormEl.valid = isValid;
        updatedFormEl.validation.errorName = errorName;
        updatedForm[index] = updatedFormEl;
        setLoginForm(updatedForm);

        checkIsFormValid(updatedForm);
    };

    const loginHandler = (e) => {
        e.preventDefault();
        const user = {};
        loginForm.forEach(item => {
           user[item.name] = item.value;
        });
        apiUser.loginUser(user)
            .then(res => {
                const userInfo = {
                    name: res.data.name,
                    surname: res.data.surname,
                    email: res.data.email,
                    password: res.data.password,
                    phone: res.data.phone
                };
                props.loginUser(res.data.userId, userInfo);
                props.history.push('/todo')
            })
            .catch(err => {
                setError(err.response.data)
            })
    };

    return (
        <div className='login'>
            { props.isAuth  && <Redirect to='/todo'/> }
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                {loginForm.map((item, index) => (
                    <Input
                        key={index}
                        inputConfig={item}
                        changed={(event) => inputChangeHandler(event, index)}/>
                ))}
                <p className='error'>{error}</p>
                <button disabled={!formIsValid}>Submit</button>
                <button type='button' className='buttonLink'><Link to='/registration'>Go to registration</Link></button>
            </form>
        </div>
    );
};

export default login