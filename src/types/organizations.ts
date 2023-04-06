import { Facility } from "./facilities";

export type Organization = {
    uid: number,
    organizationName: string,
    legalAddress: string,
    inn: string,
    orgn: string,
    facilities: Array<Facility>
};