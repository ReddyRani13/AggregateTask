import { SUBMIT_FORM_VALUES,ACTION_TYPE } from "./actionType"
import { v4 as uuidv4 } from 'uuid';


const mockDataA = [
        { id: 1, firstName: "Rahul", lastName: "KLL", emailAddress: "rahul@gmail.com", company:"Middlesbrough",  address: "tnhb colony", city: "tirupathi", state: "andhra pradesh", zip: "34596" },
        { id: 2, firstName: "Jane", lastName: "Hopper", emailAddress: "jane@gmail.com", company:"Emproto",  address: "kbr colony", city: "banglore", state: "karnataka", zip: "517501" },
        { id: 3, firstName: "Eleven", lastName: "El", emailAddress: "eleven@gmail.com", company:"Amazon",  address: "sth colony", city: "chennai", state: "tamil Nadu ", zip: "34596" },
        { id: 4, firstName: "Ragner", lastName: "Lb", emailAddress: "ragner@gmail.com", company:"Flipkart",  address: "lkd colony", city: "banglore", state: "karnataka", zip: "517501" },
        { id: 5, firstName: "Phani", lastName: "Bt", emailAddress: "phani@gmail.com", company:"Sunlighten",  address: "ngo colony", city: "tirupathi", state: "andhra pradesh", zip: "34596" },
        ]

const initialState = {
   formData:mockDataA,
   type:'',
   previewData:{}
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_FORM_VALUES:
            return {
                ...state,
                formData: [...state.formData, { ...action.payload, id: uuidv4() }],

            }
            break;
        case ACTION_TYPE:
            return{
                ...state,
                type:action.payload.actionType,
                previewData:action.payload.actionData

            }
            break;
        default:
            return state
    }

}

export default formReducer