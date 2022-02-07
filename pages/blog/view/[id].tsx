import { Spin } from "antd";
import moment from "moment";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { THEME } from "../../../config/theme";
import { fetchBlogDummy } from "../../../services";

const Container = styled.div`
	max-width: 92%;
	margin: auto;
	margin-top: 60px;
	& .img-wrapper {
		background-color: ${THEME.colors.gray3};
		> img {
			width: 100%;
			max-height: 300px;
			object-fit: contain;
		}
	}

	& .user-name {
		${THEME.typography.captionBold}
		margin-top: 10px;
		color: ${THEME.colors.lightBlack};
	}
	& .date {
		${THEME.typography.textSmall}
		color: ${THEME.colors.gray5};
		margin-top: 5px;
	}
	& .blog-title {
		${THEME.typography.typographyH4}
		margin-top: 16px;
	}

	& .tag-wrapper {
		margin-left: 10px;
		display: flex;
		flex-wrap: wrap;
		color: ${THEME.colors.gray8};
		& > span {
			margin-right: 8px;
		}
	}

	& .content-wrapper {
		margin-top: 30px;
		& .html-content {
			> img {
				max-width: 100%;
			}
		}
	}

	@media (min-width: 1100px) {
		max-width: 1100px;
		& .img-wrapper {
			& > img {
				max-height: 500px;
			}
		}
	}
`;

const BlogDetail = ({ id }: any) => {
	const [html, setHtml] = useState("");
	const {
		data: blogData,
		isLoading: blogLoading,
		isError,
	} = useQuery<any, any>(["fetchBlog", id], () => fetchBlogDummy(id), {
		enabled: !!id,
		refetchOnWindowFocus: false,
		retry: false,
		keepPreviousData: false,
	});

	if (blogLoading || !blogData) {
		return (
			<Container>
				<Spin />
			</Container>
		);
	}

	return (
		<Container>
			<div className="img-wrapper">
				<img src={blogData?.image || "images/no-image.png"} alt="" />
			</div>
			<p className="user-name">{blogData?.user_name}</p>
			<p className="date">
				{moment(blogData?.created_at).format("YYYY/MM/DD")}
			</p>
			<p className="blog-title">{blogData.title}</p>
			<div className="tag-wrapper">
				{blogData.tag &&
					blogData.tag.map((item: string, idx: number) => (
						<span key={`${item}_${idx}`}>#{item}</span>
					))}
			</div>
			<p className="content-wrapper"></p>
		</Container>
	);
};

export default BlogDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			id: context.query?.id || 1,
		},
	};
};
