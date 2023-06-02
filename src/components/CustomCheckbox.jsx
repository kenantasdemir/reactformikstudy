import React from 'react'
import { useField } from 'formik'

function CustomCheckbox({label,...props}) {

    const [field,meta] = useField(props)
  return (
    <>
    <div className="form-check form-switch row">
      <input
        {...field}
        {...props}
        className={meta.error ? 'error-input form-check-input mt-5 column ' : 'form-check-input column mt-5'}
      />
        <label class="form-check-label d-flex justify-content-center mt-5" for="flexSwitchCheckDefault"></label>

      <span className="mt-5">Kullanım koşullarını kabul ediyorum</span>
    </div>

    {meta.error && <div className="text-danger mt-5">{meta.error}</div>}
  </>
  )
}

export default CustomCheckbox