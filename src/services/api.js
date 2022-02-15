import axios from 'axios';

const url = 'https://ghumakkad-blog.herokuapp.com'


export const createPost = async (data) => {
    try{
        return await axios.post(`${url}/create`, data);
    }
    catch (e) {
        console.log(`error while creating post ${e}`);
    }
}

export const getAllPosts = async (params) => {
    try{
        let response = await axios.get(`${url}/posts${params}`);
       return response.data;
    }
    catch(e){
        console.log(`error while getting all posts ${e}`);
    }
}

export const getPostById = async (id) => {
    try{
        let response = await axios.get(`${url}/details/${id}`);
        return response;
    }   
    catch(e){
        console.log(`error while getting post by id ${e}`);
    }
}

export const updateSinglePost = async (id, data) => {
    try {
        let response = await axios.put(`${url}/update/${id}`, data);
        return response;
    }
    catch (e) {
        console.log(`error while updating post by id ${e}`);
    }
}

export const deletePostById = async (id) => {
    try{
        return await axios.delete(`${url}/delete/${id}`);
    }
    catch(e){
        console.log(`error while deleting post`);
    }
}

export const uploadFile = async (data) => {
    try{
        return await axios.post(`${url}/file/upload`, data);
    }   
    catch(e){
        console.log(`error while uploading image ${e}`);
    }
}