import { QueryKey } from "react-query";
import { API } from "../config/api";
import { dummyOneBlog } from "../constants";

interface IQueryKey {
	queryKey?: QueryKey[];
}

export const fetchBlog = (id): Promise<any> => {
	// return API.get(`/`);
	console.log("test", id);
	return dummyOneBlog;
};

export const fetchBlogDummy = (id: number) => {
	// return API.get(`/`);
	console.log("test", id);
	return dummyOneBlog;
};
