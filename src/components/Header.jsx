import '../styles/Landing.css'
export const Header = () => {
 return(
    <nav>
        <div className='left'>
            <div className='logo'>Lē</div>
            <p>L-earn</p>
        </div>
        <div className='right'>
            <button className='login-button'>Log In</button>
            <button className='signup-button'>Sign Up</button>
        </div>
    </nav> 
 )
}