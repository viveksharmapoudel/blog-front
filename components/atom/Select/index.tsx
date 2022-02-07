import React from "react";
import { Select } from "antd";
import styled from "styled-components";
import { THEME } from "../../../config/theme";

export interface ISelect {
	width?: string;
	height?: string;
	className?: string;
	admin?: boolean;
	radius?: string;
	onBlur?: any;
	clear?: boolean;
	defaultValue?: string | string[] | number | number[];
	options?: any[];
	value?: any;
	onChange?: any;
	type?: "optgroup" | "";
	dark?: boolean;
	placeholder?: string;
	error?: any;
	name?: any;
	bgColor?: string;
	required?: boolean;
	label?: string;
	shadow?: string;
	showSearch?: boolean;
	mode?: "multiple" | "tag";
}

const Wrapper = styled.div`
	margin-top: 20px;
`;

const SelectWithStyle = styled(({ dark, bgColor, admin, error, ...props }) => {
	return (
		<Select
			getPopupContainer={(trigger) => trigger.parentNode}
			{...dark}
			{...admin}
			{...props}
			{...error}
			bgcolor={bgColor}
		/>
	);
})`
	width: ${({ width }: ISelect) => {
		return width ? `${width} !important` : "auto";
	}};

	& .ant-select-selector {
		border-radius: ${({ radius }: ISelect) => {
			return radius ? `${radius} !important` : "4px !important";
		}};
		border-color: ${({ error }: ISelect) => {
			return error ? `${THEME.colors.red} !important` : `#D2D2D2 !important`;
		}};
		min-height: ${({ height }: ISelect) => {
			return height ? `${height} !important` : "46px";
		}};
		width: ${({ width }: ISelect) => {
			return width ? `${width} !important` : "auto";
		}};
		box-shadow: ${({ shadow }: ISelect) => {
			return shadow === "true"
				? ` 0px 4px 4px rgba(0, 0, 0, 0.1); !important`
				: "";
		}};

		background-color: ${({ bgColor, dark }: ISelect) => {
			return bgColor
				? `${bgColor} !important`
				: dark
				? `${THEME.colors.gray2} !important`
				: THEME.colors.gray2;
		}};
	}

	& .ant-select-selection-item {
		display: flex;
		align-items: center;
	}

	& .ant-select-selection-search {
		padding-top: 6px;
	}

	& .ant-select-selection-item,
	.ant-select-selection-placeholder {
		min-height: ${({ admin }: ISelect) => {
			return admin ? "40px" : "46px";
		}};
		vertical-align: middle;
	}
`;

const Error = styled.div`
	color: ${THEME.colors.red};
`;

const StyledLabel = styled.div`
	& label {
		font-size: 16px;
		padding-right: 5px;
	}
	& .required {
		color: #ff6767;
		font-size: 16px;
	}
`;

const SelectComponent = (props: ISelect) => {
	const { Option } = Select;
	const {
		options,
		clear,
		type,
		admin,
		label,
		required,
		onChange,
		name,
		dark,
		value,
		mode,
		...rest
	} = props;

	return (
		<Wrapper>
			{label && (
				<StyledLabel>
					<label>{label}</label>
					{required && <span className="required">*</span>}
				</StyledLabel>
			)}
			<SelectWithStyle
				allowClear={clear}
				admin={admin}
				onChange={onChange}
				name={name}
				dark={dark}
				value={value}
				mode={mode}
				showArrow
				{...rest}
			>
				{options &&
					options.map((option: any, index: number) =>
						typeof option == "object" ? (
							<Option key={index} value={option.value}>
								{option.name}
							</Option>
						) : (
							<Option key={index} value={option}>
								{option}
							</Option>
						)
					)}
			</SelectWithStyle>
			{props.error && <Error>{props.error}</Error>}
		</Wrapper>
	);
};

export { SelectComponent };
