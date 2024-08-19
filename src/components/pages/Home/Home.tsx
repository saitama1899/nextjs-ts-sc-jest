import { useAppContext } from "@/context/AppContext";
import { HomeWrapper } from "./Home.style";
import React from "react";

const Home: React.FC = () => {
	const { loading } = useAppContext();
	return (
		<HomeWrapper>
			{loading ? (
				<Spinner />
			) : (
				<>
					Home
				</>
			)}
		</HomeWrapper>
	);
};

export default Home;
