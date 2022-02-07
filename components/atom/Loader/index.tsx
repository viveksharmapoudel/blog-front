import React from "react";
import { Spin } from "antd";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { THEME } from "../../../config/theme";
interface Props {
	size?: "small" | "large" | "default";
	text?: string;
	indicator?: any;
	height?: string;
	type?: "spinningBubbles";
}

const LoaderWrapper = styled.div`
	width: 100%;
	height: ${({ height }: Props) => height || "100%"};
	display: grid;
	place-items: center;
`;

const Loader: React.FC<Props> = ({
	size = "default",
	height,
	type,
	...rest
}) => {
	return (
		<LoaderWrapper height={height}>
			{type === "spinningBubbles" ? (
				<ReactLoading
					type={type}
					color={THEME.colors.primary}
					height={45}
					width={45}
				/>
			) : (
				<Spin size={size} {...rest} />
			)}
		</LoaderWrapper>
	);
};

export { Loader };
