import type React from "react";
import { type ReactNode, createContext, useContext, useState } from "react";

interface AppContextProps {
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [loading, setLoading] = useState(false);

	return (
		<AppContext.Provider
			value={{
				loading,
				setLoading,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
};
