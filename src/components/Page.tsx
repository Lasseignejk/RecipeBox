import { useAppSelector } from '../util/hooks'
import PlanCalendar from './PlanCalendar';

interface PageProps {
	title: string;
}

const Page = ({title}:PageProps):JSX.Element => {
  const selected = useAppSelector((state) => state.selected.value)
  return (
		<div>
			{selected == "Plan" && (
				<>
          <PlanCalendar />
					<h1>{title}</h1>
				</>
			)}
			{selected == "Recipes" && <h1>{title}</h1>}
			{selected == "Groceries" && <h1>{title}</h1>}
			{selected == "Account" && <h1>{title}</h1>}
		</div>
  );
}

export default Page