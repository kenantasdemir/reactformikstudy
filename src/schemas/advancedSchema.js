import * as yup from "yup"


export const advancedSchema = yup.object().shape({
        username:yup.string("Kullanıcı adı sadece metin içermelidir.").min(2,"kullanıcı adı 2 karakterden kısa olamaz")
        .max(15,"kullanıcı adı 15 karakterden uzun olamaz")
        .required("kullanıcı adı girilmesi zorunludur."),
        city:yup.string().oneOf(["kayseri","istanbul","ankara","izmir","adana"],"Lütfen şehrinizi seçiniz"),
        isAccepted:yup.boolean().oneOf([true],"Kullanıcı koşullarını kabul ediniz")
})