import React, {useState, useEffect} from 'react';
import * as apiUser from "../../../services/user";
import {checkValidity} from "../../Sign/validation";
import Input from '../../UI/Input/Input';

export const userProfileEdit = ({userInfo, token, isClickChangeHandler, changeUserInfo}) => {

    const [userUpdatedForm, setUserUpdatedForm] = useState([
        {
            name: 'name',
            value: '',
            valid: true,
            touched: true,
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
            valid: true,
            touched: true,
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
            valid: true,
            touched: true,
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
            valid: true,
            touched: true,
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
            valid: true,
            touched: true,
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

    useEffect(() => {
        const updatedForm = userUpdatedForm.map(item => (
            {...item, value: userInfo[item.name]}
        ));
        setUserUpdatedForm(updatedForm);
    }, []);

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
        const updatedForm = [...userUpdatedForm];
        const updatedFormEl = {...updatedForm[index]};
        updatedFormEl.value = e.target.value;

        const {isValid, errorName} = checkValidity(updatedFormEl.value, updatedFormEl.validation);
        updatedFormEl.valid = isValid;
        updatedFormEl.validation.errorName = errorName;
        updatedForm[index] = updatedFormEl;
        setUserUpdatedForm(updatedForm);

        checkIsFormValid(updatedForm);
    };

    const saveChangesHandler = (e) => {
        e.preventDefault();
        const user = {};
        userUpdatedForm.forEach(item => {
            user[item.name] = item.value;
        });
        apiUser.updateUser(user, token)
            .then(res => {
                changeUserInfo(user);
                setError(false);
                setFormIsValid(false);
                isClickChangeHandler();
            })
            .catch(err => {
                setFormIsValid(false);
                setError(err.response.data)
            });
    };

    const cancelChangesHandler = () => {
        setError(false);
        setFormIsValid(false);
        isClickChangeHandler();
    };

    return (
        <div className='userUpdated'>
            <h2>Update your profile information</h2>
            <form onSubmit={saveChangesHandler}>
                {userUpdatedForm.map((item, index) => (
                    <Input
                        key={index}
                        inputConfig={item}
                        changed={(event) => inputChangedValue(event, index)}/>
                ))}
                <p className='error'>{error}</p>
                <button disabled={!formIsValid}>Submit</button>
                <button type='button' onClick={cancelChangesHandler}>Cancel</button>
            </form>
        </div>
    )
};

export default userProfileEdit;