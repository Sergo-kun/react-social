import profileReducer, {addPost, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 0, items: "Я в своем самопознании натолько преисполнился", like: 100, name: "Сергей Коваленко"},
        {id: 1, items: "Если ты первый - ТЫ ПЕРВЫЙ!", like: 100, name: "Сергей Коваленко"},
    ]
}

test('new post should be added', () => {
    //1 - стартовые тестовые данные
    let action = addPost('бубукака')

    // 2 action
    let newState = profileReducer(state,action)

    // 3 жидания

    expect(newState.posts.length).toBe(3);

});


test('after deleting message length should be decrement', () => {
    //1 - стартовые тестовые данные
    let action = deletePost (1)

    // 2 action
    let newState = profileReducer(state,action)

    // 3 жидания


    expect(newState.posts.length).toBe(1);
});


