import { Empty, Spin } from "antd";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { BlogListCard } from "../../../components";
import { IBlog } from "../../../interfaces";
import { fetchBlogsDummy } from "../../../services";

const Container = styled.div`
	max-width: 100%;
	margin: auto;
	& .list-wrapper {
		& > div {
			margin-bottom: 20px;
		}
	}

	@media (min-width: 768px) {
		max-width: 1000px;
	}
`;
const Spinner = styled.div`
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const BlogList = () => {
	const {
		data: blogs,
		isLoading: blogLoading,
		isError,
		isSuccess,
	} = useQuery<any, any>(["fetchBlog"], () => fetchBlogsDummy, {
		enabled: true,
		refetchOnWindowFocus: false,
		retry: false,
		keepPreviousData: false,
	});

	const onDelete = (id: number) => {
		console.log(id);
	};

	// if (blogLoading || !blogs) {
	// 	return (
	// 		<Spinner>
	// 			<Spin />
	// 		</Spinner>
	// 	);
	// }
	return (
		<Container>
			{blogs?.length === 0 ? (
				<Empty description="No Blog published" />
			) : (
				<div className="list-wrapper">
					{blogs?.map((blog: IBlog, idx: number) => (
						<BlogListCard {...blog} key={`blog_${idx}`} onDelete={onDelete} />
					))}
				</div>
			)}
		</Container>
	);
};

export default BlogList;
