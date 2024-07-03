export type Facility = {
    organization: string
    facility: string,
    address: string,
    contruct_number: string,
    contruct_date: string,
    price: number,
    price_date: string,
    ownership_type: string,
    facility_category: string,
    security_type: string,
    contruct_file_number: number,
    lettered_file_number: number,
    spi: string,
    facility_hardware: string,
    surving_organization: string,
    mounting_organization: string,
    pult_number: string,
    sim_number: string,
    responsible: string, 
    assortment: string, 
    security_hours: string
};

export type FacilityInList = {
    facility_id: number,
    facility: string,
    address: string,
    organization: string
};