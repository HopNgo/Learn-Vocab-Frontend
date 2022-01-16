import axios from 'axios';

const URL = 'https://learn-vocab-app.herokuapp.com';

export const getVocabs = () => axios.get(`${URL}/api/getVocabs`);

export const postVocab = (payload) => axios.post(`${URL}/api/postVocab`, payload);

export const updateVocab = (payload) => axios.post(`${URL}/api/updateVocab`, payload);

export const deleteVocab = (payload) => axios.post(`${URL}/api/deleteVocab`, payload);