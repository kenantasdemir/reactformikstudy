import { useField } from 'formik'
import React from 'react'

function CustomInput({label,...props}) {

    const [field,meta] = useField(props)

    console.log(field)
    console.log(meta)
  return (
    <>
    <label className="mt-5">{label}</label>
    <input
      {...field}
      {...props}
      className={meta.error ? 'error-input form-control mt-1' : 'form-control mt-1'}
    />

    {meta.error && <div className="text-danger">{meta.error}</div>}
  </>
  ) 
}

export default CustomInput