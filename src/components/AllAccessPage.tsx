import { useAppSelector, useAppDispatch } from "../util/hooks";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import PageTitle from "./PageTitle";
import { useEffect } from "react";
import { updateUser } from "../reducers/UserSlice";
import { setSelectedNav } from "../reducers/SelectedSlice";
import { useNavigate } from "react-router-dom";

interface PageProps {
	title: string;
}

const AllAccessPage = ({ title }: PageProps): JSX.Element => {
	const dispatch = useAppDispatch();
	const { isLoading, error, isAuthenticated, user } = useAuth0();
	const selected = useAppSelector((state) => state.selected.nav);
	const navigate = useNavigate();
	useEffect(() => {
		if (isAuthenticated) {
			console.log("user authenticated");
			const checkUser = async () => {
				try {
					const response = await fetch(
						import.meta.env.VITE_BACKEND + "/user/check",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(user),
						}
					);
					const data = await response.json();

					dispatch(updateUser(data));
				} catch (error) {
					console.log(error);
				}
			};
			checkUser();
			dispatch(setSelectedNav("Plan"));
			navigate("/plan");
		}
	});
	return (
		<div className="pb-20">
			{selected == "Home" && <PageTitle title={title} />}
			{selected == "About" && <PageTitle title={title} />}
			{selected == "Login" && (
				<div>
					<PageTitle title={title} />
					<LoginButton />
				</div>
			)}
		</div>
	);
};

export default AllAccessPage;
