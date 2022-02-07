import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { BlogCard } from "../components";
import { fetchMemes } from "../services";

const Container = styled.div`
	margin: 20px;
`;

export default function Home() {
	return (
		<Container>
			<BlogCard
				created_at="2022-01-31T04:20:52Z"
				title={"This is the first card."}
				tag={["first", "nepal", "check"]}
				user_name={"vivek"}
				id={1}
			/>
		</Container>
	);
}
