import {profileApi} from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const GET_PHOTO = "GET_PHOTO";
const ERROR_MESSAGE = "ERROR_MESSAGE";

const GET_PROFILE = "GET_PROFILE";
const GET_STATUS = "GET_STATUS";


let initialState = {

        posts: [
            {id: 0, items: "Я в своем самопознании натолько преисполнился", like: 100, name: "Сергей Коваленко"},
            {id: 1, items: "Если ты первый - ТЫ ПЕРВЫЙ!", like: 100, name: "Сергей Коваленко"},
        ],
        info: null,
        status: '',
        error: ''


}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let postSpace = {
                id: 2,
                items: action.newPostText,
                like: 0,
                name: 'Сергей Коваленко'
            }
            return {
                ...state,
                posts: [...state.posts, postSpace],
                newPostText: ""
            }

        }
            case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p.id === action.postId)
            }
            case ERROR_MESSAGE:
            return {...state, error: action.error
            }

        case GET_PHOTO:
            return {...state, info: {...state.info, photos: action.photo}
            }


        case GET_PROFILE:
            return {
                ...state,
                info : {...action.profile}
            }
            case GET_STATUS:
            return {
                ...state,
                status : action.status
            }
        default:
            return state;
    }

}

export let addPost = (newPostText) => ({type : ADD_POST, newPostText});
export let getPhotoSuccess = (photo) => ({type : GET_PHOTO, photo});
export let deletePost = (postId) => ({type : DELETE_POST, postId});
export let getProfileSuccess = (profile) => ({type : GET_PROFILE, profile});
export let getStatusSuccess = (status) => ({type : GET_STATUS, status});
export let errorMessageSuccess = (error) => ({type : ERROR_MESSAGE, error});

export const getProfile = (userId) => async (dispatch) =>  {

    let responce = await profileApi.getProfile(userId)


        dispatch(getProfileSuccess(responce.data))

    }
    export const addPhoto = (photo) => async (dispatch) =>  {

    let responce = await profileApi.addPhoto(photo)
debugger
        if(responce.data.resultCode === 0){

            dispatch(getPhotoSuccess(responce.data.data.photos))
        }


    }

export const getProfileStatus = (userId) => async (dispatch) =>  {
   let responce = await profileApi.getStatus(userId)

        dispatch(getStatusSuccess( responce.data))

}
export const updateStatus = (status) => async (dispatch) => {

    let responce = await profileApi.updateStatus(status)

    if (responce.resultCode === 0) {

        dispatch(getStatusSuccess(responce.data))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) =>  {
    const userId = getState().auth.id
    let responce = await profileApi.saveProfile(profile)

    if(responce.data.resultCode === 0){
debugger
        dispatch(getProfile(userId))
    }else if (responce.data.resultCode === 1){
        debugger
        dispatch(errorMessageSuccess("Error: "+responce.data.messages))
    }





}




export default profileReducer;