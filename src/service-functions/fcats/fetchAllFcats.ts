import { FcatInList } from "../../types/fcats";

export const fetchAllFcats = async () => {
	try {
		const r = await fetch(`/api/fcats/fcats-list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<FcatInList>;
	} catch (e) {
		throw e;
	}
};