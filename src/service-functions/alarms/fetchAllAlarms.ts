import { AlarmInList } from "../../types/alarms";

export const fetchAllAlarms = async () => {
	try {
		const r = await fetch(`/api/alarms/alarms-list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<AlarmInList>;
	} catch (e) {
		throw e;
	}
};