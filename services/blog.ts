import { QueryKey } from "react-query";
import { API } from "../config/api";
import { dummyBlogs, dummyOneBlog } from "../constants";

interface IQueryKey {
	queryKey?: QueryKey[];
}

// export const fetchBlog = (id): Promise<any> => {
// 	// return API.get(`/`);
// 	return dummyOneBlog;
// };

// export const fetchBlogs = ({ queryKey }): Promise<any> => {
// 	// return API.get(`/`);
// 	return dummyOneBlog;
// };

export const addBlog = (values: any): Promise<any> => {
	return API.post("/blog", values);
};

export const updateBlog = (values: any): Promise<any> => {
	return API.put(`/blog/${values.id}`, values);
};

export const deleteBlog = (id: number) => {
	return API.delete(`/blog/${id}`);
};

export const fetchBlogDummy = (id: number) => {
	// return API.get(`/`);
	console.log("test", id);
	return dummyOneBlog;
};

export const fetchBlogsDummy = () => {
	// return API.get(`/`);
	return dummyBlogs;
};
