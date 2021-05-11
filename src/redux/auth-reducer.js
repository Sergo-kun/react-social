import {getAuthApi, getCaptchaApi} from "../api/api";


const GET_USER_DATA = "GET_USER_DATA";
const LOGIN_ERROR = "LOGIN_ERROR";
const GET_CAPTCHA = "GET_CAPTCHA";

let initialState = {
    captcha: '',
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
        case GET_CAPTCHA: {

            return {
                ...state,
                captcha: action.captcha
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
export let getCaptchaSuccess = (captcha) => ({type: GET_CAPTCHA, captcha})

export const setAuthUserData =  () => async (dispatch) => {
    let response = await getAuthApi.me() /*{withCredentials: true} - утверждаем что мы авторизованы */

            if (response.data.resultCode === 0) { /*если resultCode === 0 то значит мы залогинины и можна диспачить данные для авторизации*/
                let {email, id, login} = response.data.data;
                dispatch(setAuthUserDataSuccess(id, email, login, true));
            }


}
export const login = (email, password, rememberMe, captcha) => async (dispatch) =>{

   let response = await getAuthApi.login(email, password, rememberMe, captcha)
    debugger
        if (response.data.resultCode === 0){

            dispatch(setAuthUserData())
            dispatch(loginErrorSuccess(false))
        }else
        if (response.data.resultCode === 10){

            dispatch(loginErrorSuccess(true))
            dispatch(getCaptchaThank())
        }

}
export const logout = () => async (dispatch) =>{
    let response = await getAuthApi.logout()
        if (response.data.resultCode === 0){
            dispatch(setAuthUserDataSuccess(null, null, null, false))
        }

}
export const getCaptchaThank = () => async (dispatch) =>{
    let response = await getCaptchaApi.getCaptcha()

    dispatch(getCaptchaSuccess(response.data.url))
}

export default authReducer;