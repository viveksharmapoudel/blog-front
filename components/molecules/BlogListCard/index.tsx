import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Space } from "antd";
import moment from "moment";
import { Router, useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { THEME } from "../../../config/theme";
import { IBlogListCard } from "../../../interfaces";

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	box-shadow: 3px -1px 8px 1px rgba(0, 0, 0, 0.15);

	& .date {
		${THEME.typography.textSmall}
		color: ${THEME.colors.gray5};
		margin-top: 5px;
		padding-left: 20px;
	}
	& .title {
		${THEME.typography.typographyH4}
		margin-top: 16px;
		padding-left: 20px;
	}
	& .action {
		align-self: flex-end;
		margin-top: 20px;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		& .action {
			align-self: center;
		}
	}
`;

interface IProps extends IBlogListCard {
	onDelete: (id: number) => void;
}

export const BlogListCard: React.FC<IProps> = ({
	id,
	title,
	created_at,
	onDelete,
}) => {
	const router = useRouter();
	return (
		<Wrapper>
			<div>
				<p className="title">{title}</p>
				<p className="date">{moment(created_at).format("YYYY/MM/DD")}</p>
			</div>
			<div className="action">
				<Space size="middle">
					<EditOutlined
						onClick={() => router.push(`/blog/edit/${id}`)}
						title="Edit"
						style={{ color: THEME.colors.gray6 }}
					/>
					<EyeOutlined
						onClick={() => router.push(`/blog/view/${id}`)}
						title="View"
						style={{ color: THEME.colors.gray6 }}
					/>
					<DeleteOutlined
						style={{ color: THEME.colors.red }}
						title="Delete"
						onClick={() => onDelete(id)}
					/>
				</Space>
			</div>
		</Wrapper>
	);
};
