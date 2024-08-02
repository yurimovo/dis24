import { DepartmentInList } from "../../types/departments";

export const fetchAllDepartments = async () => {
	try {
		const r = await fetch(`/api/departments/departments-list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<DepartmentInList>;
	} catch (e) {
		throw e;
	}
};