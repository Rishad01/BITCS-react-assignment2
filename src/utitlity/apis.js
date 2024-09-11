import axios from "axios";

const api_url = 'http://localhost:5000/blogs';

const getBlogs=async()=>{
    try{
        const response = await axios.get(api_url);
        return response.data;
    }
    catch(error)
    {
        console.error(error);
    }
}

const getBlogById = async (id) => {
    try {
        const response = await axios.get(`${api_url}/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog:', error);
    }
};

const editBlog=async(id,updatedData)=>{
    try{
        const response = await axios.put(`${api_url}/${id}`, updatedData);
        console.log(response.data);
        return response.data;
    }catch (error) {
        console.error('Error editing blog:', error);
    }
}

const deleteBlog=async (id)=>{
    try {
        await axios.delete(`${api_url}/${id}`);
    } catch (error) {
        console.error('Error deleting blog:', error);
    }
}

export {getBlogs,getBlogById,editBlog,deleteBlog};