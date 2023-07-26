import { ReactNode } from "react";
import { useAppSelector } from "../util/hooks";
import PlanCalendar from "./PlanCalendar";
import { TbFridge } from "react-icons/tb";
import PlanCard from "./PlanCard";

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
	const selected = useAppSelector((state) => state.selected.value);
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
			{selected == "Recipes" && <h1>{title}</h1>}
			{selected == "Groceries" && <h1>{title}</h1>}
			{selected == "Account" && <h1>{title}</h1>}
		</div>
	);
};

export default Page;
