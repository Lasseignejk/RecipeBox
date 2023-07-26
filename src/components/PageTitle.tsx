type PageTitleProps = {
	title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
	return <h1 className={`text-lightPrimary font-bold text-3xl`}>{title}</h1>;
};

export default PageTitle;
