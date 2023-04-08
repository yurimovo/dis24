/*
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
};*/

import {Organization} from "../../types/organizations";

export const fetchOrganizations = async () => {
	try {
		const r = await fetch(`/api/organizations/organizations_list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		console.log('r', r);
		const data = await r.json();
		return data as Array<Organization>;
	} catch (e) {
		throw e;
	}
};