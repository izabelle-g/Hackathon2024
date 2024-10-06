const SignUp = () => {
	return(
		<div>
			<h2>SignUp</h2>

            <form action="" method="post">
                <p>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" size="30" required></input>

                    <label for="pass">Password</label>
                    <input type="password" name="pass" id="pass" placeholder="Enter your password" size="30" required></input>

                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" size="30" required></input>

                    <input type="submit"></input>
                </p>
            </form>
		</div>
	)
};

export default SignUp