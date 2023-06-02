import React from 'react'
import {Form,Formik} from "formik"
import { advancedSchema } from '../schemas/advancedSchema'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckbox'

function FormikComponents() {

    
    const onSubmit = async(values,actions) => {
        console.log(values)
        console.log(actions)

        await new Promise((resolve)=>{
            setTimeout(resolve,1000)
        })

        actions.resetForm();
}



  return (
        <div className="container d-flex justify-content-center align-items-center">
            {" "}
            <Formik validationSchema={advancedSchema} initialValues={{username:"",city:"",isAccepted:false}} onSubmit={onSubmit} >
                {()=>(
                    <Form>
                        <CustomInput  label="Kullanıcı Adı" name="username" type="text" placeholder="Kullanıcı adınız"/>
                        <CustomSelect label="Yaşadığınız şehir" name="city" placeholder="Yaşadığınız şehri seçiniz" >
                                    <option value="xxx">Lütfen şehrinizi seçiniz</option>
                                    <option value="kayseri">Kayseri</option>
                                    <option value="istanbul">İstanbul</option>
                                    <option value="ankara">Ankara</option>
                                    <option value="izmir">İzmir</option>
                                    <option value="adana">Adana</option>

                         </CustomSelect>

                         <CustomCheckbox id="flexSwitchCheckDefault" type="checkbox" name="isAccepted" />
                    
                    
                    </Form>
                )}
            </Formik>
        </div>
  )
}

export default FormikComponents