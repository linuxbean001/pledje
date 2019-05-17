import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/api/auth/exists/email/' + email);
export const checkUsernameExists = (username) => axios.get('/api/auth/exists/username/' + username);

export const localRegister = ({email, username, password}) => axios.post('/api/auth/register/local', { email, username, password });
export const localLogin = ({name, password}) => axios.post('/users/login', { name, password });

export const checkStatus = () => axios.get('/users/check');
export const logout = () => axios.post('/users/logout');