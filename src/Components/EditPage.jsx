import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById,editBlog } from "../util/apis";
import { Container,Card,CardActions,Button,Box,Typography,CardContent,Input } from "@mui/material";

function EditPage()
{
    const[blog,setBlog]=useState(null);
    const [description, setDescription] = useState('');
    const{id}=useParams();
    useEffect(()=>{
        const fetchBlog=async()=>{
            const response=await getBlogById(id);
            setBlog(response);
            setDescription(response.description);
        }

        fetchBlog();
    },[id]);

    const handleDescriptionChange=(event)=>{
        setDescription(event.target.value);
    }

    const handleEdit=async(id)=>{
        try {
            const updatedBlog = await editBlog(id, {
                ...blog,
                description
            });
            //console.log(updatedBlog.description);
            setBlog(updatedBlog);
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    }

    if (!blog) {
        return <div>Loading...</div>;
    }

    return(
        <Container>
           <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                        {blog.title}
                        </Typography>
                        <Input 
                        multiline
                        size="lg"
                        name="descrp"
                        value={description}
                        onChange={handleDescriptionChange}
                        style={{ width: '100%', minHeight: '75%' }}
                    />
                    </CardContent>
                    <CardActions>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', gap: 1 }}>
                            <Button variant="contained" onClick={()=>handleEdit(blog.id)}>Edit</Button>
                        </Box>
                    </CardActions>
                </Card>
        </Container>
    )
}

export default EditPage;