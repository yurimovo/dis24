export type Facility = {
    organization: string
    facility: string,
    address: string,
    contruct_number: string,
    contruct_date: string,
    price: string,
    price_date: string,
    ownership_type: string,
    facility_category: string,
    security_type: string,
    contruct_file_number: string,
    lettered_file_number: string,
    spi: string,
    facility_hardware: string,
    surving_organization: string,
    mounting_organization: string,
    pult_number: string,
    sim_number: string,
    responsible: string, 
    assortment: string, 
    security_hours: string,
    comm_year: string
};

export type FacilityInList = {
    facility_id: number,
    facility: string,
    address: string,
    organization: string
};

export type ExportedFacility = {
    positionNumber: string,
    organization: string,
    facility: string,
    address: string,
    contruct: string,
    security_type: string,
    spi: string,
    comm_year: string,
    surving_organization: string
};

export type FacilityForForm = {
    facility_id: number,
    facility: string
};