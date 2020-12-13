import React from 'react';
import './App.css';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import FormFields from './components/FormFields/FormFields';
import {Select} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

interface FormValues {
  firstname: string
  lastname: string
  age: number
  gender: string
  email: string
}


const InitialValues: FormValues = {
  firstname: '',
  lastname: '',
  age: 0,
  gender: "",
  email: ''
}

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string()
        .min(2,"At leat 2 charachters or more")
        .max(10, "Less than 10 characters please")
        .required("Firstname is required"),
  lastname: Yup.string()
        .min(2,"At leat 2 charachters or more")
        .max(10, "Less than 10 characters please")
        .required("Name is required"),
  age: Yup.number()
        .lessThan(50, 'Age must be less than 50')
        .moreThan(5, 'Age must be more than 5')
        .required("age is required"),
  gender: Yup.string()
        .required("Gender is required"),
  email: Yup.string().email()
        .min(2,"At leat 2 charachters or more")
        .max(25, "Less than 25 characters please")
        .required("Name is required"),        
})

function App() {

  const ForSubmit = (values: FormValues) : void => {
    const {firstname, lastname, age, email, gender} = values
    alert(JSON.stringify(`${firstname}, ${lastname}, ${age}, ${email},`))
  }

  return (
    <div className="App">
     <h1> Register </h1>

     <Formik
      initialValues={InitialValues}
      onSubmit={ForSubmit}
      validationSchema={RegisterSchema}
      > 
      { (formik) => {
        console.log(formik.values)
          return (
            <Form> 
              <FormFields label="Firstname" name="firstname"/>
              <br />
              <FormFields label="Lastname" name="lastname"/>
              <br />
              <FormFields label="Age" name="age"/>
              <br />
             
             <InputLabel id="Gender" >Gander</InputLabel>
             <Field 
                as = {Select}
                name="gender"
                label="gender"
                id="Gender"
                onBlur={formik.handleBlur} 
                value={formik.values.gender}
                onChange={formik.handleChange}
                fullWidth
                required
             >
             <MenuItem value=""><em>None</em></MenuItem>
             <MenuItem value="Male">Male</MenuItem>
             <MenuItem value="Female">Female</MenuItem>
             </Field>
             <ErrorMessage name="gender" />              
             <br />
              <br />
              <FormFields label="Email" name="email"/>
              <br />
              <button disabled={!formik.dirty || !formik.isValid} type="submit" >Submit </button>  <br />
            </Form>
          )
      }}

     </Formik>


    </div>
  );
}

export default App;
