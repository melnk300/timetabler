// Regostration
// Get verification code
// Check verification code
// Authorithation

import axios from "axios";
import "../types/server_type";

const backURL = (path:string) => BACK_URL+path

class AuthService {

    async registration(firstname: string, lastname: string, birthday: string, phone: string, email: string):Promise<ResponseValue> {
        let res = await axios({
            method: 'post',
            url: "/registration",
            baseURL: BACK_URL,
            data: {
                'firstname': firstname,
                'lastname': lastname,
                'birthday': birthday,
                'phone': phone,
                'email': email
            }
        })

        if (res.status == 200) {
            return SuccessResponce(res.data)
        }  else {
            return ErrorResponce(res.headers.Err!)
        }
    }

    async get_code(source: string, method:VerificationMethod):Promise<ResponseValue>  {
        let res = await axios({
            method: 'get',
            baseURL: BACK_URL,
            url: "/verification",
            params: {
                source: source,
                method: method
            }
        })

        if (res.status == 200) {
            return SuccessResponce(res.data)
        }  else {
            return ErrorResponce(res.headers.Err!)
        }
    }

    async verification_code(source:string, password:string, code:string, device:string):Promise<ResponseValue>  {
        let res = await axios({
            method: 'put',
            baseURL: BACK_URL,
            url: "/verification",
            params: {
                code: code,
                pwd: password,
                source: source,
                device: device
            }
        })

        if (res.status == 200) {
            return SuccessResponce(res.data)
        }  else {
            return ErrorResponce(res.headers.Err!)
        }
    }

    async autorithation(phone: string, password: string, device: string):Promise<ResponseValue>  {
        let res = await axios({
            method: 'put',
            baseURL: BACK_URL,
            url: "/authorization",
            auth: {
                username: phone,
                password: password
            },
            params: {
                device: device
            }
        })

        if (res.status == 200) {
            return SuccessResponce(res.data)
        }  else {
            return ErrorResponce(res.headers.Err!)
        }
    }

}