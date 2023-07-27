import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
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
				/>
			</div>
		</div>
	);
};

export default SearchBar;
