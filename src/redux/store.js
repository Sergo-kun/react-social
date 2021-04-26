import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendReducer from "./friend-reducer";




let store = {
     _state : {
         profilePage : {
             posts: [
                 {items: "Я в своем самопознании натолько преисполнился", like: 100, name: "Сергей Коваленко"},
                 {items: "Если ты первый - ТЫ ПЕРВЫЙ!", like: 100, name: "Сергей Коваленко"},
             ],
             newPostText: 'rev',
             info: [
                 {ava: "https://i.pinimg.com/236x/57/a4/89/57a4892ee1cc569bb104b2ac5f1baee4.jpg", name: "Сергей Коваленко", phone: "46753245", status: "Статус: Если ты дерьмо не бросишь, то дерьмо тебя бросит!"},

             ],
         },
         dialogPage : {
             dialogs: [
                 {id: 1, name: "Саня"},
                 {id: 2, name: "Катя"},
                 {id: 3, name: "Коля"},
                 {id: 4, name: "Маша"},
                 {id: 5, name: "Іван"}
             ],
             newMessageText : '',
             messages: [
                 {message: "Нюхай бебру"},
                 {message: "Нюхай бебру"},
                 {message: "Нюхай бебру"},
             ],
         },
         friendsPage : {
             friends: [
                 {ava: "https://i.pinimg.com/236x/c7/a7/9c/c7a79cd4a637a7d08bdd7f2337ecba6f.jpg", name: "Коля"},
                 {ava: "https://i.pinimg.com/236x/aa/a3/50/aaa350daa45e8bf9127568fb022fc84e.jpg", name: "Саня"},
                 {ava: "https://i.pinimg.com/236x/87/ad/80/87ad8022251da2836870d9af36047ded.jpg", name: "Діма"}
             ]}

    },
    _rerenderEntireTree () {
        console.log('State was changed');
    },

    getState(){
      return this._state;
    },

   _addPost() {
        let postSpace = {
            items: this._state.newPostText,
            like: 0,
            name: 'Сергей Коваленко'
        }
        this._state.posts.push(postSpace);
        this._state.newPostText = "";
        this._rerenderEntireTree(this._state);
    },
    _updateNewPostText(newText) {
        this._state.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },

    _sendMessage(){
        let messageSpace = {
            message: this._state.newMessageText
        }
        this._state.messages.push(messageSpace);
        this._rerenderEntireTree(this._state);
    },
    _updateNewMessageText (newMessage) {
        this._state.newMessageText = newMessage;
        this._rerenderEntireTree(this._state);
    },

    dispatch(action){

       this._state.profilePage = profileReducer(this._state.profilePage, action)
       this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
       this._state.friendsPage = friendReducer(this._state.friendsPage, action)

        this._rerenderEntireTree(this._state);

    },


     subscribe(observer) {
        this._rerenderEntireTree = observer; //наблюдатель
    },
}




export default store;