import React from 'react';

const Select = ({title, list , formKey, register}) => {

    return (
        <div>
            <h3 className='post__select-title'>{title}</h3>
            <select {...register(`${formKey}`)} className='post__select-select' name="" id="">

                    <option selected disabled>
                    Alege
                    </option>

                {
                    list.map(item => (
                        <option value="">{item}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default Select;