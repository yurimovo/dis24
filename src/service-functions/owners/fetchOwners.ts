import { OwnersInList } from "../../types/owners";

export const fetchOwners = async () => {
  try {
    const r = await fetch(`/api/owners/owners_list`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
    const data = await r.json();
    return data as Array<OwnersInList>;
  } catch (e) {
    throw e;
  }
};