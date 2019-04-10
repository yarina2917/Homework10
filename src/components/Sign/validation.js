export const checkValidity = (value, rules) => {
    let isValid = true;
    let errorName = '';

    if (!rules) {
        return true;
    }

    if (rules.minLength) {
        const check = value.length >= rules.minLength;
        isValid =  check && isValid;
        errorName = check ? errorName : `Should be at least ${rules.minLength} symbols`;
    }

    if (rules.maxLength) {
        const check = value.length <= rules.maxLength;
        isValid = check && isValid;
        errorName = check ? errorName : `Should be less than ${rules.minLength} symbols`;
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const check = pattern.test(value);
        isValid =  check && isValid;
        errorName = check ? errorName : 'Email is not valid';
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        const check = pattern.test(value);
        isValid = check && isValid;
        errorName = check ? errorName : 'Must be only numbers';
    }

    if (rules.required) {
        const check = value.trim() !== '';
        isValid = check && isValid;
        errorName = check ? errorName : 'Field is required'
    }

    return {isValid: isValid, errorName: errorName};
};