import {OrganizationInList} from "../../types/organizations";

export const fetchOrganizations = async () => {
	try {
		const r = await fetch(`/api/organizations/organizations_list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<OrganizationInList>;
	} catch (e) {
		throw e;
	}
};