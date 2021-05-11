import * as axios from "axios";





const instance = axios.create({
    withCredentials: true,
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "a1c489b8-3e36-4a90-a7d3-130e9012edb9"
    }
})
export const  getFriendsApi = {
    getFriends  (activePage ,usersCount ) {
        return (

            instance.get(`users?friend=true&page=${activePage}&count=${usersCount}`,{})

            )
    }
}
export const getUsersApi = {
    getUsers(activePage,usersCount){
        return (
            instance.get(`users?page=${activePage}&count=${usersCount}`, {})
                .then(responce => {
                    return responce.data
                }
            )
        )
    },
    unfollow(id) {
        return( instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}` , {}).
        then(responce => {
            return responce.data

        }))
    },
    follow(id) {
        return( instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}` , {} , {}).
            then(responce => {
                return responce.data
        }))
    }
}
export const profileApi ={
    getProfile(userId){
        return (
            instance.get('profile/'+ userId))
    },
    getStatus(userId){
        return (
            instance.get('profile/status/'+ userId)
        )
    },
    updateStatus(status){
        return (
            instance.put('profile/status/' , {status : status}))
    },
    saveProfile(profile){

        return (

            instance.put('profile' , profile))
    },
    addPhoto(photo){
        const data = new FormData()
        data.append('image',photo)
        debugger
        return (

            instance.put('profile/photo/' , data,{
                "Content-Type": "multipart/form-data"
            })
        )
    }

}
export const getCaptchaApi = {
    getCaptcha(){
        debugger
        return (
            instance.get('/security/get-captcha-url')
        )
}
}
export const getAuthApi = {
    me(){
        return (
            instance.get(`auth/me`, {})
    )
    },

    login(email, password, rememberMe, captcha){

        return(
            instance.post('auth/login',{email, password, rememberMe, captcha})
        )
    },
    logout(){
        return(
            instance.delete('auth/login',)
        )
    }
}