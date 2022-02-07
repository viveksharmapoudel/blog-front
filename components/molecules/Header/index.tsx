import { Avatar } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { TextField } from "../..";
import { THEME } from "../../../config/theme";
import { Button } from "../../atom";

const HeaderSection = styled.div`
	box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
	padding-top: 10px;
	padding-bottom: 10px;
	& .inner-wrapper {
		max-width: 1200px;
		display: flex;
	}
	& .img-wrapper {
		height: 50px;
		width: 50px;
		& > img {
			width: 100%;
		}
	}
`;

export const Header = () => {
	const [search, setSearchValue] = useState("");

	return (
		<HeaderSection>
			<div className="inner-wrapper">
				<div className="left-side">
					<div className="img-wrapper">
						<img src="logo.png" alt="logo" />
					</div>
					<TextField
						value={search}
						onChange={(e) => setSearchValue(e.target.value)}
						placeholder={"search"}
						type={"search"}
					/>
				</div>
				<div className="right-side">
					<Button>Create Post</Button>
					<div>
						<Avatar />
					</div>
				</div>
			</div>
		</HeaderSection>
	);
};
