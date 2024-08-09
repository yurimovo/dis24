import { SectypeInList } from "../../types/sectypes";

export const fetchAllSectypes = async () => {
	try {
		const r = await fetch(`/api/sectypes/sectypes-list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<SectypeInList>;
	} catch (e) {
		throw e;
	}
};