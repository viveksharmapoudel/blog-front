import React, { useState } from "react";
import { sessionKey } from "../constants";
import { createCtx } from "./createContext";

interface AuthContext {
	authenticated: boolean;
	setAuthenticated: (authenticated: boolean) => void;
	user: any;
	setUser: (user: any) => void;
	collapsed: any;
	setCollapsed: (collapsed: any) => void;
}

const [useContext, CtxProvider] = createCtx<AuthContext>();

type Props = {
	children: React.ReactNode;
};

export const useAuthContext = useContext;

export const AuthContextProvider = ({ children }: Props) => {
	const token =
		typeof window !== "undefined" ? localStorage?.getItem(sessionKey) : "";

	const [authenticated, setAuthenticated] = useState<boolean>(!!token);
	const [user, setUser] = useState(null);
	const [collapsed, setCollapsed] = useState(null);

	return (
		<CtxProvider
			value={{
				authenticated,
				setAuthenticated,
				user,
				setUser,
				collapsed,
				setCollapsed,
			}}
		>
			{children}
		</CtxProvider>
	);
};
function SessionKey(SessionKey: any) {
	throw new Error("Function not implemented.");
}
