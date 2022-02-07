import styled from "styled-components";
import { THEME } from "../../../config/theme";

const FooterSection = styled.div`
	background-color: ${THEME.colors.gray5};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	margin-top: 30px;

	& .main-title {
		${THEME.typography.captionBold}
	}

	& .bottom-title {
		${THEME.typography.text}
		font-style: italic;
	}

	@media (min-width: 768px) {
		margin-top: 60px;
	}
`;

export const Footer = () => {
	return (
		<FooterSection>
			<p className="main-title">Very interesting blog</p>
			<p className="bottom-title">Copyright © Blog All Rights Reserved.</p>
		</FooterSection>
	);
};
