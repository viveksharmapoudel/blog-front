import { LeftOutlined, SearchOutlined, SmileOutlined } from "@ant-design/icons";
import { Avatar, Popover } from "antd";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TextField } from "../..";
import { THEME } from "../../../config/theme";
import { useAuthContext } from "../../../store/AuthContext";
import { Button } from "../../atom";

const HeaderWrapper = styled.section`
	background-color: ${THEME.colors.gray2};
`;

const HeaderSection = styled.div`
	box-shadow: 6px -1px 6px 0px rgba(0, 0, 0, 0.75);
	position: sticky;
	background-color: ${THEME.colors.white};
	margin-bottom: 30px;
	& .inner-wrapper {
		max-width: 100%;
		margin: auto;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	& .logo-wrapper {
		margin-right: 20px;
		width: 50px;
		& > img {
			width: 100%;
		}
	}

	& .right-side {
		display: flex;
	}

	& .left-side {
		display: flex;
		align-items: center;
	}

	& .search-bar {
		display: none;
	}

	& .search-icon {
		margin-right: 8px;
		padding: 4px 8px;
		background-color: ${THEME.colors.gray3};
		border-radius: 5px;
		height: 35px;
		& :hover {
			cursor: pointer;
		}
	}

	& .logged-out {
		display: flex;
		align-items: center;
		& .login-text {
			margin-right: 10px;
			& :hover {
				cursor: pointer;
			}
		}
	}

	@media (min-width: 768px) {
		& .search-icon {
			display: none;
		}
		& .search-bar {
			display: unset;
		}
	}
`;

const POPUP = styled.div`
	display: flex;
	flex-direction: column;
	& > span {
		margin: 5px;
		padding: 5px 10px;
		border-radius: 5px;
		color: ${THEME.colors.lightBlack};
		border: 1px solid ${THEME.colors.lightGreen};
	}
	& > span:hover {
		cursor: pointer;
	}
`;

export const Header = () => {
	const [search, setSearchValue] = useState("");
	const { user } = useAuthContext();
	const [showSearchBar, setShowSearchBar] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const checkWindowWidth = () => {
			if (window.innerWidth > 768) {
				setShowSearchBar(false);
			}
		};
		window.addEventListener("resize", checkWindowWidth);
		return () => window.removeEventListener("resize", checkWindowWidth);
	});

	const PopComponent = () => {
		return (
			<POPUP>
				<span onClick={() => router.push("/dashboard")}>Dashboard</span>
				<span onClick={() => router.push("/signout")}>Sign Out</span>
			</POPUP>
		);
	};

	return (
		<HeaderWrapper>
			<HeaderSection>
				<div className="inner-wrapper">
					<div className="left-side">
						<div className="logo-wrapper">
							<img src="logo.png" alt="logo" />
						</div>
						<TextField
							value={search}
							onChange={(e) => setSearchValue(e.target.value)}
							placeholder={"search"}
							type={"search"}
							className={"search-bar"}
							width="400px"
						/>
					</div>

					<div className="right-side">
						<div
							className="search-icon"
							onClick={() => setShowSearchBar(!showSearchBar)}
						>
							<SearchOutlined
								style={{ fontSize: 24, color: THEME.colors.gray6 }}
							/>
						</div>
						{!user ? (
							<div className="logged-in">
								<Button type="ghost" borderradius={5}>
									Create Post
								</Button>
								<Popover placement="bottomLeft" content={<PopComponent />}>
									<Avatar icon={<SmileOutlined />} style={{ marginLeft: 10 }} />
								</Popover>
							</div>
						) : (
							<div className="logged-out">
								<p className="login-text" onClick={() => router.push("/login")}>
									Log In
								</p>
								<Button type="ghost" borderradius={5}>
									Create Account
								</Button>
							</div>
						)}
					</div>
				</div>
			</HeaderSection>
			<div style={{ paddingLeft: "40px" }}>
				<TextField
					value={search}
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder={"search"}
					type={"search"}
					width="400px"
					hidden={!showSearchBar}
				/>
			</div>
		</HeaderWrapper>
	);
};
