export type Apartment = {
    owner: string, 
    address: string, 
    phones: string, 
    inn: string, 
    contruct_number: string, 
    contruct_date: string, 
    price: string, 
    price_date: string, 
    security_type: string, 
    contruct_file_number: string,
    lettered_file_number: string, 
    apartment_category: string, 
    penal_number: string, 
    pult_number: string, 
    spi: string, 
    apartment_hardware: string, 
    mounting_organization: string, 
    surving_organization: string, 
    assortment: string,
    comm_year: string
};

export type ApartmentInList = {
    apartment_id: number,
    address: string,
    contruct_number: string,
    owner: string
};

export type ExportedApartment = {
    positionNumber: string,
    owner: string,
    address: string,
    contruct: string,
    security_type: string,
    spi: string,
    comm_year: string,
    surving_organization: string
};