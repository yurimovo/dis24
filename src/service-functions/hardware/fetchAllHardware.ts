import { HardwareInList } from "../../types/hardware";

export const fetchAllHardware = async () => {
	try {
		const r = await fetch(`/api/hardware/hardware-list`, {
			method: "GET",
			mode: "cors",
			credentials: "include",
		});
		const data = await r.json();
		return data as Array<HardwareInList>;
	} catch (e) {
		throw e;
	}
};