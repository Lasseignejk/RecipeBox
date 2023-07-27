import { ReactNode } from "react";

interface CardsProps {
	card: {
		title: string;
		icon?: ReactNode;
		show: boolean;
		highlight: boolean;
	};
}

const PlanCard = ({ card }: CardsProps): JSX.Element => {
	const highlightClasses = card.highlight
		? "bg-lightSurfConLow text-lightTertiary h-40"
		: "bg-lightSurfConHigh text-lightPrimary h-36";
	return (
		<div className={`gap-3 p-3 rounded-xl font-bold ${highlightClasses}`}>
			<div className={`flex gap-1`}>
				{card.icon && <span className={`text-2xl`}>{card.icon}</span>}
				<p>{card.title}</p>
			</div>
		</div>
	);
};

export default PlanCard;
