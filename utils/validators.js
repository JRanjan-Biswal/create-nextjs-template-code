/**
 * This file houses functions that can be used for
 * validation of form fields.
 *
 * Note : these funtion return true , when they pass validation
 * they return false, when they fail validation
 */


export const textValidator = value => {
    const stringValue = String(value).trim();
    !stringValue.match(/^[A-Za-z ]+$/) ? false : true;
}


export const phoneNumberValidator = value => {
    const stringValue = String(value).trim();
    !stringValue.match(/^[9872]\d{9}$/) ? false : true;
}

export const emailValidator = value => {
    const stringValue = String(value).trim();
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    !mailRegex.test(stringValue) ? false : true;
}
