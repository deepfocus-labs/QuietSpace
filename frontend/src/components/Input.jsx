import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = "",
    ...props
}, ref){

    // id is provided to link label and input

    const id = useId();
    return (
        <div className='w-full mb-2 md:mb-4'>
            {/* Lable for the input */}
            {label && <label
            className='block mb-2 text-sm font-medium '
            htmlFor={id}
            >{label}</label>}

            {/* input button for the input provided */}
            <input 
            type={type}
            className= {`border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 lg:p-2.5 ${className}`}
            {...props}
            ref = {ref}
            id = {id} 
            />

        </div>
    )
})

export default Input;