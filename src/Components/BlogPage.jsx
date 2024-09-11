import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../utitlity/apis";
import { Container,Card,CardActions,Button,Box,Typography,CardContent } from "@mui/material";

function BlogPage()
{
    const[blog,setBlog]=useState(null);
    const{id}=useParams();
    useEffect(()=>{
        const fetchBlog=async()=>{
            const response=await getBlogById(id);
            setBlog(response);
        }

        fetchBlog();
    },[id]);

    if (!blog) {
        return <div>Loading...</div>; // Display a loading state while fetching
    }

    return(
        <Container>
           <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                        {blog.title}
                        </Typography>
                        <Typography variant="p" component="div">
                        {blog.description}
                        </Typography>
                        <Typography variant="p" component="div">
                        By: {blog.authorName}
                        </Typography>
                    </CardContent>
                </Card>
        </Container>
    )
}

export default BlogPage;