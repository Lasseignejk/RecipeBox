import { useAppSelector } from '../util/hooks'
import PlanCalandar from './PlanCalandar';

interface PageProps {
	title: string;
}

const Page = ({title}:PageProps):JSX.Element => {
  const selected = useAppSelector((state) => state.selected.value)
  return (
		<div>
			{selected == "Plan" && (
				<>
          <PlanCalandar />
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