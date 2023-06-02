import { useField } from 'formik'
import React from 'react'

function CustomSelect({label,...props}) {

    const [field,meta] = useField(props)
    console.log(field)
    console.log(meta)


  return (
    <div>
      <label className="mt-5">{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? 'error-select form-select form-select-sm' : 'form-select form-select-sm mt-2'}
      />

      {meta.error && <div className="text-danger">{meta.error}</div>}
    </div>
  )
}

export default CustomSelect