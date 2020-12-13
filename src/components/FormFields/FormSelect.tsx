import React, {FC} from 'react'
import {TextField, Select} from '@material-ui/core'
import {Formik, Field, ErrorMessage} from 'formik'
import MenuItem from '@material-ui/core/MenuItem';


interface FoemFieldProps {
    name: string
    label: string
}

const FormSelect: FC <FoemFieldProps>  = ({name, label}) => {
    return (
        <div>    

            <Field as={Select} name={name} label={label}>
             <option value={"Male"}>Male</option>
             <option value={"Female"}>Female</option>
             <option value={"None"}>None</option>
           </Field>
            
        </div>
    )
}

export default FormSelect