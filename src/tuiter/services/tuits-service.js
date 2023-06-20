import axios from 'axios';

// const TUITS_API = 'http://localhost:4000/api/tuits';
// const TUITS_API = 'https://tuiter-node-server-app-x93i.onrender.com/api/tuits';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const API_BASE = "http://localhost:4000/api";
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
const request = axios.create({
    withCredentials: true,
});

export const createTuit = async (tuit) => {
    const response = await request.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits  = async ()     => {
    const response = await request.get(TUITS_API);
    return response.data;
}

export const findMyTuits = async () => {
    const response = await request.get(`${TUITS_API}/my-tuits`);
    return response.data;
};

export const deleteTuit = async (tid) => {
    const response = await request.delete(`${TUITS_API}/${tid}`);
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await request.put(`${TUITS_API}/${tuit._id}`, tuit);
    // return tuit;
    return response.data;
}
  