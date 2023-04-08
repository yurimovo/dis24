import axios from "axios";

export const fetchFacilities = () => {
	try {
		axios.get('/api/facilities/facility_list')
			.then(res => {
				return res
			})
	} catch (e) {
		throw e;
	}
};