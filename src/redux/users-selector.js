import { createSelector } from "reselect";

const getUsersSelector = (state) => state.usersPage.users;

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users
})
