import React, { ReactNode } from "react";
import styled from "styled-components";
import { Button as AntButton } from "antd";
import { useRouter } from "next/router";
import { THEME } from "../../../config/theme";

type ButtonType = "primary" | "ghost";
export interface ButtonProps {
	children?: React.ReactNode;
	htmlType?: "button" | "submit" | "reset";
	type?: ButtonType;
	fullwidth?: boolean;
	padding?: string;
	loading?: boolean;
	admin?: boolean | 1 | 0;
	disabled?: boolean;
	href?: string;
	icon?: ReactNode;
	minheight?: number;
	minwidth?: number;
	withshadow?: boolean;
	background?: string;
	borderradius?: number;
	rounded?: boolean;
	typography?: any;
	className?: string;
	color?: string;
	fontsize?: number;
	bold?: boolean;
	margin?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Wrapper = styled.div`
	display: contents;
	& .ant-btn-primary {
		background-color: ${({ admin }: ButtonProps) => {
			return admin ? THEME.colors.primary : THEME.colors.primary;
		}};
		color: ${THEME.colors.gray8};
	}
	& .ant-btn-ghost {
		border: 1px solid ${THEME.colors.primary};
		background: ${THEME.colors.white};
		color: ${THEME.colors.primary};
	}
`;
const StyledButton = styled(AntButton)`
	&[disabled] {
		background-color: ${({ admin }: ButtonProps) => {
			return admin
				? `${THEME.colors.primary} !important`
				: `${THEME.colors.white} !important`;
		}};
		opacity: ${({ admin }: ButtonProps) => {
			return admin && 0.7;
		}};
		border: none;
		box-shadow: none !important;
		color: ${({ admin }: ButtonProps) => {
			return admin
				? `${THEME.colors.white} !important`
				: `rgba(0, 0, 0, 0.25) !important`;
		}};
	}

	border-radius: ${({ borderradius, rounded, admin }: ButtonProps) => {
		return rounded
			? "30px"
			: borderradius
			? `${borderradius}px`
			: admin
			? "2px"
			: "2px";
	}};
	font-family: "Roboto", sans-serif;
	background: ${({ background }: ButtonProps) => {
		return background && `${background} !important`;
	}};
	border: none;
	box-shadow: ${({ withshadow }: ButtonProps) => {
		return withshadow
			? "-1.22465e-15px 20px 20px rgba(4, 0, 0, 0.08) !important"
			: "none !important";
	}};
	margin: ${({ margin }: ButtonProps) => {
		return margin && margin;
	}};
	padding: ${({ padding }: ButtonProps) => {
		return padding && `${padding} !important`;
	}};
	font-size: ${({ fontsize }: ButtonProps) => {
		return fontsize ? `${fontsize}px` : "14px";
	}};
	color: ${({ color }: ButtonProps) => {
		return color && `${color} !important`;
	}};
	font-weight: ${({ bold }: ButtonProps) => {
		return bold && "bold";
	}};
	min-width: ${({ minwidth }: ButtonProps) => {
		return minwidth ? `${minwidth}px` : "auto";
	}};
	min-height: ${({ minheight }: ButtonProps) => {
		return minheight ? `${minheight}px` : "auto";
	}};
	${({ typography }: ButtonProps) => {
		if (typography) {
			return typography;
		}
	}}
`;

export const Button: React.FC<ButtonProps> = ({
	children,
	fullwidth,
	onClick,
	href,
	htmlType,
	loading,
	className,
	admin,
	...rest
}) => {
	const router = useRouter();
	return (
		<Wrapper admin={admin}>
			<StyledButton
				onClick={href ? () => router.push(href) : onClick}
				admin={admin ? 1 : 0}
				htmlType={htmlType}
				block={fullwidth}
				loading={loading}
				className={className}
				{...rest}
			>
				{children}
			</StyledButton>
		</Wrapper>
	);
};
