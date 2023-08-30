import { FaSearch } from "react-icons/fa";
import { RecipeProps } from "../../util/interfaces";
import { useAppSelector } from "../../util/hooks";

interface SearchBarProps {
	searchRecipes: RecipeProps[];
	setSearchRecipes: (arr: RecipeProps[]) => void;
}

const SearchBar = ({ setSearchRecipes }: SearchBarProps): JSX.Element => {
	const userRecipes: RecipeProps[] = useAppSelector(
		(state) => state.userRecipes.userRecipes
	);

	const handleSearch = (str: string) => {
		const filteredRecipes = userRecipes.filter((recipe) =>
			recipe.recipe_name.toLowerCase().includes(str)
		);
		setSearchRecipes(filteredRecipes);
	};
	return (
		<div className="flex justify-center">
			<div
				className={`flex items-center bg-lightSurfConHigh px-3 gap-2 rounded-full py-1`}>
				<label htmlFor="search" className={`text-lightSecondary`}>
					<FaSearch />
				</label>
				<input
					id="search"
					type="text"
					className={`outline-none bg-lightSurfConHigh`}
					placeholder="Chicken Parmesan"
					onChange={(e) => handleSearch(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
