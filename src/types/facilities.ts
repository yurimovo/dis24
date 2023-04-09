export type Facility = {
    uid: number,
    facility_name: string,
    facility_address: string,
    contract_numbers: string,
    contract_date: Date,
    price: number,
    price_date: Date,
    ownership_id: number,
    category_id: number,
    security_type_id: number,
    contract_file_number: number,
    lettered_file_number: number,
    spi_id: number,
    hardware_id: number,
    surv_org_id: number,
    mount_org_id: number,
    pult_number_id: number,
    sim_id: number,
    responsible: string, 
    assortment: string, 
    security_hours: string,
    organizations:
        {organization_name: string}
};

export type FacilityInList = {
    facility_name: string,
    facility_address: string,
    organizations:
        {organization_name: string}
};