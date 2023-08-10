import { ReactNode, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../util/hooks";
import PlanCalendar from "./PlanCalendar";
import { TbFridge } from "react-icons/tb";
import PlanCard from "./PlanCard";
import PageTitle from "./PageTitle";
import Button from "./Button";
import RecipeContainer from "./Recipe/RecipeContainer";
import SearchBar from "./Search/SearchBar";
import Modal from "./Modal";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
// import { updateUser } from "../reducers/UserSlice";
import FormikForm from "./FormikForm";
import { useNavigate } from "react-router-dom";
import { setSelectedNav } from "../reducers/SelectedSlice";
import { fetchUserRecipes } from "../reducers/userRecipesSlice";
import { fetchUserDetails } from "../reducers/UserSlice";

interface PageProps {
	title: string;
}

interface CardsProps {
	title: string;
	icon?: ReactNode;
	show: boolean;
	highlight: boolean;
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

const Page = ({ title }: PageProps): JSX.Element => {
	const dispatch = useAppDispatch();
	const [openNewRecipeModal, setOpenNewRecipeModal] =
		useState<boolean>(false);
	const { isLoading, error, isAuthenticated, user } = useAuth0();
	console.log(user);

	// const mongoUser = useAppSelector((state) => state.mongoUser.values);

	const { values } = useAppSelector((state) => state.userDetails);
	console.log("userDetailsId", values._id);

	const getUserDetailsAndRecipes = async (user: UserObject) => {
		try {
			const data = await dispatch(fetchUserDetails(user));
			console.log("DATA", data);
			await dispatch(fetchUserRecipes(values._id));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isAuthenticated && user) {
			console.log("user authenticated");
			getUserDetailsAndRecipes(user);
		}
		if (!isAuthenticated) {
			dispatch(setSelectedNav("Home"));
			console.log("user not authenticated");
			handleNavigate();
		}
	}, [isAuthenticated, user]);

	const cards: CardsProps[] = [
		{
			title: "Prep",
			icon: <TbFridge />,
			show: true,
			highlight: true,
		},
		{
			title: "Breakfast",
			show: true,
			highlight: false,
		},
		{
			title: "Lunch",
			show: true,
			highlight: false,
		},
		{
			title: "Dinner",
			show: true,
			highlight: false,
		},
		{
			title: "Misc",
			show: true,
			highlight: false,
		},
	];
	const selected = useAppSelector((state) => state.selected.nav);
	// console.log("Page", selected);

	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate("/");
	};
	return (
		<div className={`pb-20`}>
			{selected == "Plan" && isAuthenticated && (
				<>
					<PlanCalendar />
					<div className="flex flex-col gap-5 p-3">
						{cards.map((card: CardsProps, index: number) => (
							<PlanCard card={card} key={index} />
						))}
					</div>
				</>
			)}
			{selected == "Recipes" && (
				<div className={`p-3 flex flex-col gap-2`}>
					<PageTitle title={title} />
					<Button
						text={"New Recipe"}
						passedFunction={() =>
							setOpenNewRecipeModal(!openNewRecipeModal)
						}
						outline={true}
						absolute={true}
						top="top-5"
						right="right-3"
					/>
					<SearchBar />
					{openNewRecipeModal && (
						<Modal
							form={<FormikForm />}
							// table={true}
							// headers={newRecipeHeaders}
							// fields={newRecipeFields}
							title={"New Recipe"}
							openStateFunction={setOpenNewRecipeModal}
							openStateVariable={openNewRecipeModal}
							// formStateFunction={setNewRecipeForm}
							// formStateVariable={newRecipeForm}
						/>
					)}

					<RecipeContainer column={true} />
				</div>
			)}
			{selected == "Groceries" && (
				<div className={`p-3`}>
					<PageTitle title={title} />
				</div>
			)}
			{selected == "Account" && (
				<div className={`p-3`}>
					{!isAuthenticated ? (
						<PageTitle title={"Login to your account"} />
					) : (
						<PageTitle title={title} />
					)}
					{error && <p>Authentication error</p>}
					{!error && isLoading && <p>Loading...</p>}
					{!error && !isLoading && (
						<>
							<LoginButton />
							<LogoutButton />
							<Profile />
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default Page;
