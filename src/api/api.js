import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "e21a2f29-5f8c-4034-a17e-3a5cd82904dc" },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  }
}

export const authAPI = {
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
  getAuth() {
    return instance
    .get(`auth/me`)
    .then(response => { 
        return response.data
      });
  }
}

export const followAPI = {
  unFollow(userID) {
    return instance
      .delete(`follow/${userID}`)
      .then(response => {
        return response.data;
      });
  },
  follow(userID) {
    return instance
      .post(`follow/${userID}`, {}, instance)
      .then(response => {
        return response.data;
      });
  }
}

export const profileAPI = {
  getUserProfile(userID) {
    return instance
      .get(`profile/` + userID)
      .then(response => {
        return response.data;
      });
  },
  getUserStatus(userID) {
    return instance
      .get(`profile/status/` + userID)
      .then(response => {
        return response.data;
      });
  },
  updateUserStatus(status) {
    return instance
      .put(`profile/status/`, { status: status })
      .then(response => {
        return response.data;
      });
  }
}
