import { useAppSelector, useAppDispatch } from "../util/hooks";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import PageTitle from "./PageTitle";
import { useEffect } from "react";
import { setSelectedNav } from "../reducers/SelectedSlice";
import { useNavigate } from "react-router-dom";
import { fetchUserDetails } from "../reducers/UserSlice";
import { fetchUserRecipes } from "../reducers/userRecipesSlice";

interface PageProps {
	title: string;
}

interface UserObject {
	email?: string;
	email_verified?: boolean;
	family_name?: string;
	given_name?: string;
	locale?: string;
	name?: string;
	nickname?: string;
	picture?: string;
	sub?: string;
	updated_at?: string;
}

const AllAccessPage = ({ title }: PageProps): JSX.Element => {
	const dispatch = useAppDispatch();
	const { isLoading, error, isAuthenticated, user } = useAuth0();
	const selected = useAppSelector((state) => state.selected.nav);
	const { values } = useAppSelector((state) => state.userDetails);
	const navigate = useNavigate();

	const getUserDetailsAndRecipes = async (user: UserObject) => {
		try {
			await dispatch(fetchUserDetails(user));
			await dispatch(fetchUserRecipes(values._id));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isAuthenticated && user) {
			console.log("user authenticated");
			getUserDetailsAndRecipes(user);
			dispatch(setSelectedNav("Plan"));
			navigate("/plan");
		}
	});
	return (
		<div className="pb-20 p-3 flex flex-col gap-5 items-start">
			{selected == "Home" && (
				<>
					<PageTitle title={"Welcome to My Recipe Box!"} />
				</>
			)}
			{selected == "About" && <PageTitle title={title} />}
			{selected == "Login" && (
				<>
					<PageTitle title={"Login to your account"} />
					<LoginButton />
				</>
			)}
		</div>
	);
};

export default AllAccessPage;
