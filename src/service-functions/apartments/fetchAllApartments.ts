import { Apartment } from "../../types/apartments";

export const fetchAllApartments = async () => {
	try {
		const r = await fetch(`/api/apartments/apartments-list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<Apartment>;
	} catch (e) {
		throw e;
	}
};