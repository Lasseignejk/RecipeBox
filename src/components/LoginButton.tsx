import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	return (
		!isAuthenticated && (
			<button
				className="border-[1px] border-lightOutline px-4 rounded-full hover:text-lightSurfCon hover:bg-lightTertiary hover:border-lightTertiary"
				onClick={() => loginWithRedirect()}>
				Login with your Google account
			</button>
		)
	);
};

export default LoginButton;
