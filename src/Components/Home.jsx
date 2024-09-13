import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs, deleteBlog } from "../services/apis";
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getBlogs();
      setBlogs(response);
    };

    fetchBlogs();
  }, []);

  const handleOpen = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/editblog/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };
  return (
    <div>
      <Container sx={{ mt: 3 }}>
        {blogs.map((blog, index) => {
          return (
            <Box key={index} sx={{ mb: 3 }}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="p" component="div">
                    By: {blog.authorName}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "100%",
                      gap: 1,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => handleOpen(blog.id)}
                    >
                      Open
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleEdit(blog.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </Container>
    </div>
  );
}

export default Home;
