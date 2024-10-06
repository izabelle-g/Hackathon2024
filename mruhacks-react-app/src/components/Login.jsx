import './Login.css'

const Login = ({modify}) => {
	return(
		<div>
            <button id='upper' onClick={ () =>{
                modify(1);
                // newUser(11);
                console.log("buruh");
            }}> New user?</button>
            <div id="loginBG">
                <div><label htmlFor="email">Email</label>
                    <input type="email" name="email"  placeholder="Enter your email" size="30" required></input>
                </div>

                <br></br>
                <div><label htmlFor="password">Password</label>
                    <input type="password" name="pass" id="pass" placeholder="Enter your password" size="30" required></input>
                </div>
                <br></br>
                <button id="login" onClick={() => {
                    modify(11);}} >Submit
                </button>
		    </div>
        </div>
	)
};

export default Login