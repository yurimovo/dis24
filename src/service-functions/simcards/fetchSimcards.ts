import { SimcardInList } from "../../types/simcards";

export const fetchSimcards = async () => {
	try {
		const r = await fetch(`/api/simcards/simcards_list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<SimcardInList>;
	} catch (e) {
		throw e;
	}
};