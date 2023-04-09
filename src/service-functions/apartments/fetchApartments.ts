import { ApartmentInList } from "../../types/apartments";

export const fetchApartments = async () => {
  try {
    const r = await fetch(`/api/apartments/apartments_list`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
    const data = await r.json();
    return data as Array<ApartmentInList>;
  } catch (e) {
    throw e;
  }
};