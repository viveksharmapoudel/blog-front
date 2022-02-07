import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { BlogForm } from "../../../components";

const EditBlog: FC = ({ id }: any) => {
	return (
		<>
			<BlogForm id={id} />
		</>
	);
};

export default EditBlog;

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			id: context.query?.id || 1,
		},
	};
};
