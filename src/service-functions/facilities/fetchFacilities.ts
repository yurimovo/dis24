import axios from "axios";

export const fetchFacilities = async () => {
	try {
        axios.get('/api/facilities/facility_list')
			.then(res => {
				return res.data
			})
	} catch (e) {
		throw e;
	}
};