import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { GlobalStyles } from "../styles/global-styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "../store/AuthContext";

const queryClient = new QueryClient({ defaultOptions: {} });

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>template App</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=12.0, minimum-scale=.25, user-scalable=yes"
				/>
			</Head>
			<GlobalStyles />
			<QueryClientProvider client={queryClient}>
				<AuthContextProvider>
					<Component {...pageProps} />
				</AuthContextProvider>
			</QueryClientProvider>
		</>
	);
};

export default MyApp;
