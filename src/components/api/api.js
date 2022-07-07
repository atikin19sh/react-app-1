import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b7e3fc9f-9834-4824-b35a-8e7bd415af63"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    followUser (userId) {
        return instance.post(`follow/${userId}`).then(response => { 
            return response.data;
        })
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`).then(response => { 
            return response.data;
        })
    }
}
