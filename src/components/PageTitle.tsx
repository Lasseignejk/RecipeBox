type PageTitleProps = {
	title: string;
	center?: boolean;
};

const PageTitle = ({ title, center }: PageTitleProps): JSX.Element => {
	const centerClasses = center ? "text-center" : "";
	return (
		<h1 className={`text-lightPrimary font-bold text-3xl ${centerClasses}`}>
			{title}
		</h1>
	);
};

export default PageTitle;
