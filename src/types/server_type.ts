type ResponseValue = {
    success: boolean,
    data: any|null,
    err: string|null
}

function SuccessResponce(data:any|null = null):ResponseValue {
    return {
        success: true,
        data: data,
        err: ""
    }
}

function ErrorResponce(err: string, data:any|null = null):ResponseValue {
    return {
        success: false,
        data: data,
        err: err
    }
}

enum VerificationMethod {
    PHONE = 'phone',

}