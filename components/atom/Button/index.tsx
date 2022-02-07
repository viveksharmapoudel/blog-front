import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Button, ButtonProps } from "antd";
import { THEME } from "../../../config/theme";

interface IProps {
	children?: ReactNode;
	type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
	block?: boolean;
	danger?: boolean;
	size?: "large" | "middle" | "small";
	disabled?: boolean;
	ghost?: boolean;
	href?: string;
	icon?: ReactNode;
	loading?: boolean;
	target?: string;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	height?: string;
	minWidth?: string;
	width?: string;
	background?: string;
	color?: string;
	fontSize?: string;
	fontWeight?: string;
	padding?: string;
	border?: string;
	borderradius?: string;
}

const StyledButton = styled(Button)`
	padding: ${({ padding }: IProps) => padding || ".5em 1.5em"};
	height: ${({ height }: IProps) => height || "42px"};
	min-width: ${({ minWidth }: IProps) => minWidth || "100px"};
	width: ${({ width }: IProps) => width && width};
	background: ${({ background }: IProps) => background || THEME.colors.primary};
	color: ${({ color }: IProps) => (color ? color : THEME.colors.white)};
	font-size: ${({ fontSize }: IProps) => fontSize || "16px"};
	font-weight: ${({ fontWeight }: IProps) => fontWeight || "600 !important"};
	border: ${({ border }: IProps) => border || "none"};
	border-radius: ${({ borderradius }: IProps) => borderradius || "4px"};
	&:hover,
	&:focus,
	&:active {
		background: ${({ background }: IProps) => background || THEME.colors.white};
		color: ${({ color }: IProps) => color || THEME.colors.primary};
	}
	&:hover {
		opacity: 0.8;
	}

	&[disabled],
	&[disabled]:hover {
		background: ${({ background }: IProps) =>
			background || THEME.colors.secondary};
		color: ${({ color }: IProps) => color || THEME.colors.primary};
	}
`;

const ButtonComponent: FC<IProps> = ({
	children,
	block,
	danger,
	disabled,
	ghost,
	href,
	icon,
	loading,
	size,
	target,
	type,
	onClick,
	className,
	...rest
}) => {
	return (
		<StyledButton
			block={block}
			danger={danger}
			disabled={disabled}
			ghost={ghost}
			href={href}
			icon={icon}
			loading={loading}
			size={size}
			target={target}
			type={type}
			onClick={onClick}
			className={className}
			{...rest}
		>
			{children}
		</StyledButton>
	);
};

export { ButtonComponent as Button };
