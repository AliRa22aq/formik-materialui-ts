import React, {FC} from 'react'
import {TextField} from '@material-ui/core'
import {Field, ErrorMessage} from 'formik'

interface FoemFieldProps {
    name: string
    label: string
}

const FormFields: FC <FoemFieldProps>  = ({name, label}) => {
    return (
        <div>
            <Field 
                as={TextField} 
                name={name} 
                label={label} 
                fullWidth
                helperText={<ErrorMessage name={name} />}
                required
                />
            
        </div>
    )
}

export default FormFields
