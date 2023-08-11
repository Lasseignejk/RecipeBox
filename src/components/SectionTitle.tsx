interface SectionTitleProps {
	title: string;
}

const SectionTitle = ({ title }: SectionTitleProps): JSX.Element => {
	return <h1 className={`text-lg font-bold`}>{title}</h1>;
};

export default SectionTitle;
