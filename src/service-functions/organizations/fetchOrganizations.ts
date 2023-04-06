import axios from "axios";

export const fetchOrganizations = async () => {
	try {
        axios.get('/api/organizations/organizations_list')
            .then(res => {
                return res.data
            })
	} catch (e) {
		throw e;
	}
};