const Login = () => {
	return(
		<div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" size="30" required></input>

			<label for="pass">Password</label>
            <input type="password" name="pass" id="pass" placeholder="Enter your password" size="30" required></input>

            <input type="submit">Login</input>

            /**TODO:Signup link*/
		</div>
	)
};

export default Login