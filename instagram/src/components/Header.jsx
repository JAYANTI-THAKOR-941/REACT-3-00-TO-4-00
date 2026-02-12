import { useState } from 'react';
import './style.css';

const Header = ()=>{

    const [isAuth,setIsAuth] = useState(false);

    const onLogin = ()=>{
        setIsAuth(true);
        alert('Login Successfully.!');
    }

    const onLogout = ()=>{
        setIsAuth(false);
        alert('Logout successfully.!!');
    }
    
    return(
        <div className="header">
            <div className="logo">
                <h1>Instagram</h1>
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Post</a>
                <a href="#">Reels</a>
                <a href="#">Help</a>
            </div>
            <div className="btns">
                {
                    isAuth ? <button onClick={onLogout}>Logout</button>:<button onClick={onLogin}>Login</button>
                }
            </div>
        </div>
    )
}

export default Header;