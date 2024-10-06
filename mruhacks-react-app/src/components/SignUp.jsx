import './SignUp.css'
import ProfileEdit from './ProfileEdit';
const SignUp = ({modify}) => {
	return(
		<div id="signup">
			<h2>SignUp</h2>
                <div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" size="30" required></input>
                    </div>
                    <div>
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" placeholder="Enter your password" size="30" required></input>
                    </div>
                    

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" size="30" required></input>
                    </div>

                    <ProfileEdit displaySubmit={false}/>

                    <button onClick={() => {modify(0)}}>submit</button>
                </div>
		</div>
	)
};

export default SignUp