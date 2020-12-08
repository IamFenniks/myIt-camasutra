import React from 'react';

export const required = values => {
    if (values) return undefined;
    return "Field is required";
}

// export const maxlength20 = values => {
//     if (values && values.length > 20) return "Max length is 20 symbols";
//     return undefined;
// }

// export const maxlength50 = values => {
//     if (values && values.length > 50) return "Max length is 50 symbols";
//     return undefined;
// }

export const maxLengthCreator = maxLength => values => {
    if (values && values.length >= maxLength) return `Max length is ${ maxLength } symbols`;
    return undefined;
}
