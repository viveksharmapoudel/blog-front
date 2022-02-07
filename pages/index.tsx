import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { BlogCard, Loader } from "../components";
import { THEME } from "../config/theme";
import { fetchBlogsDummy, fetchMemes } from "../services";

const Container = styled.div`
	margin: auto;
	margin-top: 20px;
	max-width: 1200px;
	& .blog-wrapper {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 30px;
	}

	@media (min-width: 800px) {
		width: 92%;
		& .blog-wrapper {
			grid-template-columns: 1fr 1fr;
			grid-row-gap: 40px;
		}
	}
`;

export default function Home() {
	const {
		data: blogData,
		isLoading: blogLoading,
		isError,
	} = useQuery<any, any>(["fetchBlog"], fetchBlogsDummy, {
		enabled: true,
		refetchOnWindowFocus: false,
		retry: false,
		keepPreviousData: false,
	});

	if (blogLoading) {
		return <Loader />;
	}
	return (
		<Container>
			{blogData?.length > 0 ? (
				<div className="blog-wrapper">
					{blogData?.map((item, idx) => (
						<BlogCard
							created_at={item?.created_at}
							image={item?.image}
							key={`blog_${idx}`}
							title={item?.title}
							id={item?.id}
							user_name={item?.user_name}
							tags={item?.tags}
						/>
					))}
				</div>
			) : null}
		</Container>
	);
}
