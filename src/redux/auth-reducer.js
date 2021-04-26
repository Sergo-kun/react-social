import {getAuthApi} from "../api/api";
import {stopSubmit} from "redux-form";

const GET_USER_DATA = "GET_USER_DATA";
const LOGIN_ERROR = "LOGIN_ERROR";

let initialState = {

    id: null,
    email: null,
    login: null,
    isAuth: false,
    isError: false



}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DATA: {

            return {
                ...state,
                ...action.data,

            }
        }
        case LOGIN_ERROR: {

            return {
                ...state,
                isError: action.boolean
            }
        }
        default:
            return state;
    }

}

export let setAuthUserDataSuccess = (id, email, login, isAuth) => ({type: GET_USER_DATA, data : {id, email, login, isAuth}})

export let loginErrorSuccess = (boolean) => ({type: LOGIN_ERROR, boolean})

export const setAuthUserData =  () => async (dispatch) => {
    let response = await getAuthApi.me() /*{withCredentials: true} - утверждаем что мы авторизованы */

            if (response.data.resultCode === 0) { /*если resultCode === 0 то значит мы залогинины и можна диспачить данные для авторизации*/
                let {email, id, login} = response.data.data;
                dispatch(setAuthUserDataSuccess(id, email, login, true));
            }


}
export const login = (email, password, rememberMe) => async (dispatch) =>{

   let response = await getAuthApi.login(email, password, rememberMe)

        if (response.data.resultCode === 0){
            dispatch(setAuthUserData())
            dispatch(loginErrorSuccess(false))
        }else
        if (response.data.resultCode === 1){
            dispatch(loginErrorSuccess(true))
        }

}
export const logout = () => async (dispatch) =>{
    let response = await getAuthApi.logout()
        if (response.data.resultCode === 0){
            dispatch(setAuthUserDataSuccess(null, null, null, false))

        }

}

export default authReducer;