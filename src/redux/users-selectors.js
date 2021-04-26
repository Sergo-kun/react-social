import {createSelector} from 'reselect'
const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsers,users => {

    return users.filter(n => true)
})
export const usersCountSelector = (state) => {

    return  state.usersPage.usersCount
}
export const totalCountSelector = (state) => {
    return  state.usersPage.totalCount
}
export const activePageSelector = (state) => {
    return  state.usersPage.activePage
}
export const isFetchingSelector = (state) => {
    return  state.usersPage.isFetching
}
export const isFetchingButtonFollowSelector = (state) => {
    return  state.usersPage.isFetchingButtonFollow
}



