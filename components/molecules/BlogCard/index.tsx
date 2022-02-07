import moment from "moment";
import Router from "next/router";
import React from "react";
import styled from "styled-components";
import { THEME } from "../../../config/theme";
import { IBlogListCard } from "../../../interfaces";

const Wrapper = styled.div`
	max-width: 92%;
	margin: auto;
	box-shadow: 0px 5px 8px -1px rgba(0, 0, 0, 0.3);
	padding-bottom: 20px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border-bottom: 4px solid ${THEME.colors.redPurple};
	background-color: ${THEME.colors.gray2};
	& :hover {
		cursor: pointer;
	}
	& .img-wrapper {
		background-color: ${THEME.colors.gray3};

		> img {
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			width: 100%;
			max-height: 200px;
			object-fit: contain;
		}
	}
	& .user-name {
		${THEME.typography.captionBold}
		margin-top: 10px;
		padding-left: 20px;
		color: ${THEME.colors.lightBlack};
	}
	& .date {
		${THEME.typography.textSmall}
		color: ${THEME.colors.gray5};
		margin-top: 5px;
		padding-left: 20px;
	}
	& .blog-title {
		${THEME.typography.typographyH4}
		margin-top: 16px;
		padding-left: 20px;
	}

	& .tags-wrapper {
		margin-left: 30px;
		display: flex;
		flex-wrap: wrap;
		color: ${THEME.colors.gray8};
		& > span {
			margin-right: 8px;
		}
	}

	@media (min-width: 728px) {
		max-width: 600px;
		& .img-wrapper {
			> img {
				max-height: 300px;
			}
		}
	}
`;

export const BlogCard: React.FC<IBlogListCard> = ({
	title,
	image,
	created_at,
	user_name,
	tags,
	id,
}) => {
	const onClick = () => {
		Router.push(`/blog/view/${id}`);
	};
	return (
		<Wrapper onClick={onClick}>
			<div className="img-wrapper">
				<img src={image || "images/no-image.png"} alt="" />
			</div>
			<p className="user-name">{user_name}</p>
			<p className="date">{moment(created_at).format("YYYY/MM/DD")}</p>
			<p className="blog-title">{title}</p>
			<div className="tags-wrapper">
				{tags &&
					tags.map((item, idx) => <span key={`${item}_${idx}`}>#{item}</span>)}
			</div>
		</Wrapper>
	);
};
