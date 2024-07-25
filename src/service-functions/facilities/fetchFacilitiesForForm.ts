import { FacilityForForm } from "../../types/facilities";

export const fetchFacilitiesForForm = async () => {
	try {
		const r = await fetch(`/api/facilities/facility-for-form`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<FacilityForForm>;
	} catch (e) {
		throw e;
	}
};