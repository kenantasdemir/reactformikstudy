import React from 'react'
import { useFormik } from "formik"
import { basicSchema } from '../schemas/validation'
import styled from 'styled-components'

function RegisterForm() {

    const onSubmit = async(values,actions) => {
            console.log(values)
            console.log(actions)

            await new Promise((resolve)=>{
                setTimeout(resolve,1000)
            })

            actions.resetForm();
    }

   



    const { values, errors, isSubmitting,handleChange, handleSubmit } = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
            age: "",
            movie: "",
            department: "",
            salary: ""
        },
        validationSchema: basicSchema,
        onSubmit: onSubmit

    })

    return (
        <div className='container'>
            <div className="form-group">
                <form action="" className="row" onSubmit={handleSubmit}>


                    <div className="column col-sm-6 ">

                        <input id="fullname" placeholder="Adınız" type="text" className={errors.fullname ? "form-control mt-5 error-input":"form-control mt-5"} onChange={handleChange} value={values.fullname} />
                        {errors.fullname && <p className="text-danger"> {errors.fullname} </p>}

                        <input id="email" placeholder="Email adresiniz" type="email" className={errors.email ? "form-control mt-5 error-input":"form-control mt-5"} onChange={handleChange} value={values.email} />
                        {errors.email && <p className="text-danger"> {errors.email} </p>}

                        <input id="password" placeholder="Şifrenizi girin" type="password" className={errors.password ? "form-control mt-5 error-input":"form-control mt-5"} onChange={handleChange} value={values.password} />
                        {errors.password && <p className="text-danger"> {errors.password} </p>}


                        <input id="confirmPassword" placeholder="Şifrenizi onaylayın" type="password" className={errors.confirmPassword ? "form-control mt-5 error-input":"form-control mt-5"} onChange={handleChange} value={values.confirmPassword} />
                            {errors.confirmPassword && <p className="text-danger"> {errors.confirmPassword} </p>}
                    
                    </div>


                    <div className="column col-sm-6">

                        <input id="age" placeholder="Yaşınızı giriniz" type="number" className={errors.age ? "form-control mt-5 error-input":"form-control mt-5"} onChange={handleChange} value={values.age} />
                        {errors.age && <p className="text-danger"> {errors.age} </p>}


                        <input id="movie" placeholder="Film giriniz" type="text" className={errors.movie ? "form-control mt-5 error-input":"form-control mt-5"} onChange={handleChange} value={values.movie} />
                            {errors.movie && <p className="text-danger"> {errors.movie} </p>}



                        <input id="department" placeholder="Departman giriniz" type="text" className={errors.department ? "form-control mt-5 error-input":"form-control mt-5"} onChange={handleChange} value={values.department} />
                            {errors.department && <p className="text-danger"> {errors.department} </p>}


                        <input id="salary" placeholder="Maaşınızı giriniz" type="number" className={errors.salary ? "form-control mt-5 error-input":"form-control mt-5"} onChange={handleChange} value={values.salary} />
                                {errors.salary && <p className="text-danger"> {errors.salary} </p>}

                    </div>


                    <div className="d-flex justify-content-center align-items-center mt-5">
                        <button className="btn btn-primary" type="submit">Gönder</button>
                    </div>


                  
                </form>
            
            </div>
        </div>
    )
}

export default RegisterForm