import menuIcon from '../assets/menu.png'
export const Header = () => {
  return (
    <nav>
      <div className="left">
        <div className="logo">Lē</div>
        <p>L-earn</p>
      </div>
      <div className="right">
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
      </div>
      <div className="mobile-right">
        <img src={menuIcon}/>
        <div className='menu-items'>
            <div>Login</div>
            <div>Sign up</div>
        </div>
      </div>
    </nav>
  );
};
