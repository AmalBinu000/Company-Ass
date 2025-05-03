import axios from 'axios'


const API = axios.create({
    baseURL:"http://localhost:2015/api"
})

export const fetchNotes = () => API.get("/note");

export const fetchNotesById = (id) => API.get(`/note/${id}`);

export const createNotes = (newData) => API.post("/note",newData);

export const updateNotes = (id,updatedNote) => API.patch(`/note/${id}`,updatedNote);

export const deleteNotes = (id) => API.delete(`/note/${id}`);