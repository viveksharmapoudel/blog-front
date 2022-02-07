import { notification } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { useMutation, useQuery } from "react-query";
import Error from "next/error";
import styled from "styled-components";
import { addBlog, fetchBlogDummy, updateBlog } from "../../../services";
import * as yup from "yup";
import { useFormik } from "formik";
import Head from "next/head";
import { Button, Loader, Select, TextField } from "../../atom";
import { tagSelectData } from "../../../constants";

interface Props {
	id?: string | string[];
}

const Container = styled.section`
	margin: auto;
	max-width: 100%;
	& > form {
		display: flex;
		flex-direction: column;
	}

	& .custom-button {
		align-self: flex-end;
		margin-top: 20px;
	}
	& .form-field {
		margin-top: 20px;
	}
	& .tag-select {
		width: 92%;
	}
	@media (min-width: 768px) {
		& .tag-select {
			width: 600px;
		}
	}
	@media (min-width: 900px) {
		max-width: 900px;
	}
`;

export const BlogForm = ({ id }: Props) => {
	const router = useRouter();

	const {
		data: blogData,
		isLoading: blogLoading,
		isError,
	} = useQuery<any, any>(["fetchblog", id], () => fetchBlogDummy(Number(id)), {
		enabled: !!id,
		refetchOnWindowFocus: false,
		retry: false,
		keepPreviousData: false,
	});

	const { mutate, isLoading, isSuccess } = useMutation<any, any>(
		id ? updateBlog : addBlog,
		{
			onSuccess: () => {
				notification.success({
					message: "Blog has been updated successfully",
				});
				router.push("/blog/dashboard");
			},
			onError: (err: any) => {
				notification.error({
					message:
						err.message || "An error has occurred. Please try again later.",
				});
			},
		}
	);

	const initialValues = blogData || {
		title: "",
		image: "",
		contents: "",
		tag: [],
	};

	const validationSchema = yup.object().shape({
		title: yup
			.string()
			.required("Required")
			.max(150, "Maximum 150 character allowed."),
		image: yup.string().url().required("Image url is required"),
		contents: yup.string().required("Contents is required"),
		tags: yup.array().min(1, "Minimum one tag is needed").required("Required"),
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		enableReinitialize: true,
		onSubmit: (values) => {
			mutate({ ...values });
		},
	});

	if (isError) {
		return <Error statusCode={404} />;
	}

	if (blogLoading) {
		return (
			<>
				<Head>
					<title>{id ? "Edit Blog" : "Add Blog"}</title>
				</Head>
				<Loader />
			</>
		);
	}

	return (
		<Container>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					name="title"
					label="Title"
					required
					value={formik.values.title}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					error={formik.touched.title && formik.errors?.title}
					maxLength={150}
					showCount
				/>
				<TextField
					name="Cover Image"
					label="image"
					required
					value={formik.values.image}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					error={formik.touched.image && formik.errors?.image}
				/>

				<Select
					name="tags"
					label="Tag Select"
					value={formik.values.tags}
					onChange={(v: any) => {
						formik.setFieldValue("tags", v);
					}}
					error={
						(formik.touched.tags || formik.submitCount > 0) &&
						formik.errors?.tags
					}
					options={tagSelectData}
					showSearch
					required
					clear
					mode="multiple"
					className="tag-select"
				/>

				<TextField
					name="contents"
					label="Contents"
					required
					type="textarea"
					value={formik.values.contents}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					error={formik.touched.contents && formik.errors.contents}
					minRows={6}
					showCount
					maxLength={400}
					className={"form-field"}
				/>

				<Button
					htmlType="submit"
					type="ghost"
					loading={isLoading}
					disabled={isSuccess}
					className="custom-button"
				>
					{id ? "Edit" : "Add"}
				</Button>
			</form>
		</Container>
	);
};
