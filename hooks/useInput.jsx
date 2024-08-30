import { useState } from 'react'
let hasError;
export default function useInput(identifier, validationFunc) {
    const [enteredValue, setEnteredValue] = useState(identifier)
    const [isEdited, setIsEdited] = useState(false)

    const valueIsInValid = validationFunc(enteredValue)
    function handleChange(e) {
        setEnteredValue(e.target.value)
        setIsEdited(false)
    }
    function handleBlur(e) {
        // console.log('blurred...')
        setIsEdited(true)
    }
    hasError = isEdited && valueIsInValid
    return {
        enteredValue,
        setEnteredValue,
        handleChange,
        handleBlur,
        hasError
        //you can also just set the has error  as an argument here with definded logic like that: "hasError: isEdited && valueIsInValid" instead separately declaring it as variable outside the function statement
    }
}
