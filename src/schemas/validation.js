import * as yup from "yup"
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const basicSchema = yup.object().shape({
    fullname:yup.string("İsim alanında sayılar ve semboller bulunamaz")
    .min(5,"minimum 5 karakter").max(50,"maksimum 50 karakter").required("tam isim alanı zorunludur."),

    email:yup.string().email("geçerli formatta bir email adresi giriniz").required("email alanı zorunludur."),

    password:yup.string("parola alanı string olmalıdır").min(5,"parola 5 karakterden küçük olamaz")
    .max(16,"parola 16 karakterden büyük olamaz").matches(
        passwordRules,{
            message:"Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz."
        }
    ).required("Şifre girmek zorunludur."),

    confirmPassword:yup.string().oneOf([yup.ref('password')],"Şifreler eşleşmiyor.").required("Lütfen şifrenizi doğrulayın"),

    age:yup.number("yaş alanı sayı olmalıdır").positive("yaş alanına negatif sayı girilemez")
       .integer("yaş alanı tamsayı olmalıdır.").required("yaş alanı boş geçilemez."),
    
    movie:yup.mixed().notRequired(),

    department:yup.string("departman bilgisi string olmalıdır").min(2,"departman ismi 2 karakterden az olamaz")
    .max(30,"departman bilgisi 30 karakterden uzun olamaz").required("departman bilgisi zorunludur."),

    salary:yup.number("maaş bilgisini numerik olarak girmelisiniz").required("maaş bilgisi zorunludur.")


 
})