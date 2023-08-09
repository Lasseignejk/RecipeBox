import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	const handleLogin = () => {
		loginWithRedirect();
	};

	return !isAuthenticated && <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
