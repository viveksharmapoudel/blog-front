import { QueryKey } from "react-query";
import { API } from "../config/api";

interface IQueryKey {
	queryKey?: QueryKey[];
}

export const fetchMemes = ({ queryKey }: IQueryKey): Promise<any> => {
	return API.get(`/`);
};
