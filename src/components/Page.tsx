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
import { newRecipeFields, newRecipeHeaders } from "../util/data";
import { formStateVariableProps } from "../util/interfaces";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { updateUser } from "../reducers/UserSlice";
import FormikForm from "./FormikForm";

interface PageProps {
	title: string;
}

interface CardsProps {
	title: string;
	icon?: ReactNode;
	show: boolean;
	highlight: boolean;
}

const Page = ({ title }: PageProps): JSX.Element => {
	const dispatch = useAppDispatch();
	const [openNewRecipeModal, setOpenNewRecipeModal] =
		useState<boolean>(false);

	const { isLoading, error, isAuthenticated, user } = useAuth0();

	const mongoUser = useAppSelector((state) => state.mongoUser.values);
	console.log("mongoUser", mongoUser);

	// const [newRecipeForm, setNewRecipeForm] = useState<formStateVariableProps>({
	// 	recipe_name: "",
	// 	prep_time: "",
	// 	cook_time: "",
	// 	total_time: "",
	// 	servings: "",
	// 	category: "",
	// 	source: "",
	// 	tags: [],
	// 	ingredients: [],
	// });

	useEffect(() => {
		if (isAuthenticated) {
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
	return (
		<div className={`pb-20`}>
			{selected == "Plan" && (
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
					<PageTitle title={title} />
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
