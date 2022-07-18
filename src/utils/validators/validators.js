export const required = (value) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required!'
    }
}

const maxLength = (maxValue) => (value) => {
    if (value.length <= maxValue) {
        return undefined
    } else {
        return `Max length of text cannot be more than ${maxValue} symbols!`
    }
}

export const maxLength15 = maxLength(15);
export const maxLength50 = maxLength(50);