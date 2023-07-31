import { ReactNode } from "react";
import { useAppSelector } from "../util/hooks";
import PlanCalendar from "./PlanCalendar";
import { TbFridge } from "react-icons/tb";
import PlanCard from "./PlanCard";
import PageTitle from "./PageTitle";
import Button from "./Button";
import RecipeContainer from "./Recipe/RecipeContainer";
import SearchBar from "./Search/SearchBar";

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
						{cards.map((card: CardsProps) => (
							<PlanCard card={card} />
						))}
					</div>
				</>
			)}
			{selected == "Recipes" && (
				<div className={`p-3 flex flex-col gap-2`}>
					<PageTitle title={title} />
					<Button
						text={"New Recipe"}
						passedFunction={() => console.log("clicked")}
						outline={true}
						absolute={true}
						top="top-5"
						right="right-3"
					/>
					<SearchBar />
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
				</div>
			)}
		</div>
	);
};

export default Page;
