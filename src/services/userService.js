import { last } from "lodash";
import axios from "../axios";

const handleLogin = (email, password) => {
    return axios.post('/api/login', { email, password });
}


const getAllUser = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`); //params
}

const handleDelete = (id) => {
    return axios.delete(`/api/delete-user?id=${id}`);
}

const handleCreateUser = (data) => {
    return axios.post('/api/create-user', {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
    })
}

const handleEditUser = (data) => {
    return axios.put('/api/edit-user', data)
}
// eslint-disable-next-line
export default {
    handleLogin,
    getAllUser,
    handleDelete,
    handleCreateUser,
    handleEditUser,
};