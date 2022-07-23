import * as types from "../Redux/actionType"

export const submitFormValuesRequest = (values) => {
    return {
        type: types.SUBMIT_FORM_VALUES,
        payload:values
    }
}

export const actionType=(actionType,actionData)=>{
    return{
        type:types.ACTION_TYPE,
        payload:{actionType,actionData}
    }
}

