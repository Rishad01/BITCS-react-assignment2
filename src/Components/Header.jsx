import { AppBar,Toolbar,Box } from "@mui/material";
import { Link } from "react-router-dom";

function Header(){
    return (
    <AppBar position="static">
    <Toolbar>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', width: '100%' }}>
        <Link to='/' >
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
      </Box>
    </Toolbar>
  </AppBar>)
  }

  export default Header;