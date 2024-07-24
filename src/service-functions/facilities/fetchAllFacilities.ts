import { Facility} from "../../types/facilities";

export const fetchAllFacilities = async () => {
	try {
		const r = await fetch(`/api/facilities/facility-list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<Facility>;
	} catch (e) {
		throw e;
	}
};