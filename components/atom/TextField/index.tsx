import React, { FC, ReactNode } from "react";
import { Input } from "antd";
import styled from "styled-components";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { THEME } from "../../../config/theme";

const { TextArea, Search, Password } = Input;

type InputSize = "large" | "middle" | "small";

type InputType =
	| "textarea"
	| "number"
	| "text"
	| "password"
	| "email"
	| "search"
	| "tel";

interface IProps {
	type?: InputType;
	minRows?: number;
	maxRows?: number;
	label?: string;
	required?: boolean;
	allowClear?: boolean;
	defaultValue?: string;
	disabled?: boolean;
	maxLength?: number;
	prefix?: ReactNode;
	size?: InputSize;
	error?: any;
	placeholder?: string;
	onSearch?: (value: any, event: any) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (
		event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	value?: any;
	loading?: boolean;
	showCount?: boolean;
	name?: string;
	className?: string;
	width?: string;
	autoComplete?: "on" | "off" | "new-password";
}

const StyledInput = styled(Input)`
	& .ant-input {
		border: none !important;
	}
`;

const TextFieldWrapper = styled.div`
	width: ${({ width }: IProps) => {
		return width ? `${width} !important` : "100%";
	}};
	& .max-length {
		color: ${THEME.colors.red};
	}
	& .ant-input:focus {
		box-shadow: none;
		border: 1px solid ${THEME.colors.primary};
	}
	& .ant-input:hover {
		border: 1px solid ${THEME.colors.primary};
	}
	/* stylelint-disable */
	& .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
		border-color: ${THEME.colors.primary} !important;
	}
	& .ant-input-affix-wrapper:focus {
		box-shadow: none !important;
		border-color: ${THEME.colors.primary} !important;
	}
	& .ant-input-affix-wrapper-focused {
		box-shadow: none !important;
		border-color: ${THEME.colors.primary} !important;
	}

	@media (max-width: 480px) {
		max-width: 100%;
	}
`;

const StyledPassword = styled(Password)`
	box-shadow: none;
	& .ant-input {
		border: none !important;
		&:hover,
		&:focus {
			border: none !important;
		}
	}
	& .ant-input-affix-wrapper-focused {
		border: 1px solid ${THEME.colors.primary} !important;
		border-color: ${THEME.colors.primary};
		box-shadow: none;
	}
	& .ant-input-affix-wrapper:focus {
		border-color: ${THEME.colors.primary} !important;
		border: 1px solid ${THEME.colors.primary} !important;
		box-shadow: none;
	}
	&:hover,
	&:focus,
	&:active,
	&:focus-within {
		border: 1px solid ${THEME.colors.primary} !important;
		box-shadow: none;
	}
`;

const StyledTextArea = styled(TextArea)`
	resize: none;
`;

const StyledSearch = styled(Search)`
	width: ${({ width }: IProps) => `${width}!important` || "100%"};
	& .ant-input-wrapper {
		& input {
			line-height: 1.5915;
			&:hover,
			&:focus,
			&:active {
				outline: none;
				border: ${({ allowClear }: IProps) =>
					!allowClear ? " 1px solid #d9d9d9 !important" : "none"};
			}
		}

		& .ant-input-affix-wrapper {
			height: 32px;
		}

		& .ant-input-group-addon {
			& .ant-btn {
				border: 1px solid #d9d9d9 !important;
			}
		}
	}
	@media (max-width: 480px) {
		max-width: 100%;
	}
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

const ErrorWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	& .error {
		color: ${THEME.colors.red};
		font-size: 14px;
	}
	& .counter {
		font-size: 12px;
	}
`;

const TextField: FC<IProps> = ({
	minRows,
	maxRows,
	type,
	label,
	required,
	error,
	onSearch,
	loading,
	showCount,
	maxLength,
	value,
	prefix,
	onChange,
	className,
	onBlur,
	allowClear = true,
	autoComplete = "off",
	...rest
}) => {
	const getCounterUI = () => {
		return (
			<div className={value?.length === maxLength ? "max-length" : ""}>
				{value?.length || "0"} {maxLength ? "/ " + maxLength : ""}
			</div>
		);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (type === "tel") {
			const { value } = e.target;
			const isNum = Number.isInteger(Number(value));
			if (!isNum) return;
			onChange && onChange(e);
		} else {
			onChange && onChange(e);
		}
	};

	const getInputField = () => {
		switch (type) {
			case "textarea":
				return (
					<TextFieldWrapper className={className}>
						{label && (
							<StyledLabel>
								<label>{label}</label>
								{required && <span className="required">*</span>}
							</StyledLabel>
						)}
						<StyledTextArea
							autoSize={{ minRows: minRows || 2, maxRows: maxRows || 4 }}
							maxLength={maxLength}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							autoComplete={autoComplete}
							{...(rest as any)}
						/>
						<ErrorWrapper>
							{error ? <div className="error">{error}</div> : <div />}
							{showCount && <div className="counter">{getCounterUI()}</div>}
						</ErrorWrapper>
					</TextFieldWrapper>
				);
			case "password":
				return (
					<TextFieldWrapper className={className}>
						{label && (
							<StyledLabel>
								<label>{label}</label>
								{required && <span className="required">*</span>}
							</StyledLabel>
						)}
						<StyledPassword
							maxLength={maxLength}
							type={type}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							autoComplete={"new-password"}
							prefix={prefix}
							iconRender={(visible) =>
								visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
							}
							{...rest}
						/>
						<ErrorWrapper>
							{error ? <div className="error">{error}</div> : <div />}
							{showCount && <div className="counter">{getCounterUI()}</div>}
						</ErrorWrapper>
					</TextFieldWrapper>
				);
			case "search":
				return (
					<TextFieldWrapper className={className}>
						<StyledSearch
							loading={loading}
							onSearch={onSearch}
							onChange={onChange}
							placeholder="Search..."
							onBlur={onBlur}
							value={value}
							allowClear={allowClear}
							autoComplete={autoComplete}
							{...rest}
						/>
					</TextFieldWrapper>
				);
			default:
				return (
					<TextFieldWrapper className={className} {...rest}>
						{label && (
							<StyledLabel>
								<label>{label}</label>
								{required && <span className="required">*</span>}
							</StyledLabel>
						)}
						<StyledInput
							maxLength={maxLength}
							type={type}
							value={value}
							onChange={handleChange}
							onBlur={onBlur}
							prefix={prefix}
							autoComplete={autoComplete}
							{...rest}
						/>
						<ErrorWrapper>
							{error ? <div className="error">{error}</div> : <div />}
							{showCount && <div className="counter">{getCounterUI()}</div>}
						</ErrorWrapper>
					</TextFieldWrapper>
				);
		}
	};

	return getInputField();
};

export { TextField };
