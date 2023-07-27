interface TagProps {
	tag: string;
}

const Tag = ({ tag }: TagProps): JSX.Element => {
	return (
		<span
			className={`px-3 rounded-xl border-lightOutlineVar border-[1px] text-lightSecondary text-sm`}>
			{tag}
		</span>
	);
};

export default Tag;
