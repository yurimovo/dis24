import { FacilityInList } from "../../types/facilities";

export const fetchFacilities = async () => {
	try {
		const r = await fetch(`/api/facilities/facility-list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<FacilityInList>;
	} catch (e) {
		throw e;
	}
};