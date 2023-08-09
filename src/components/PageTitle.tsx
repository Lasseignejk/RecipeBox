type PageTitleProps = {
	title: string;
};

const PageTitle = ({ title }: PageTitleProps): JSX.Element => {
	return <h1 className={`text-lightPrimary font-bold text-3xl`}>{title}</h1>;
};

export default PageTitle;
