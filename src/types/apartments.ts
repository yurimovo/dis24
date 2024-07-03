export type Apartment = {
    apartment_id: number,
    address: string,
    contruct_number: string,
    contruct_date: Date,
    price: number,
    price_date: Date,
    category_id: number,
    security_type_id: number,
    contract_file_number: number,
    lettered_file_number: number,
    spi_id: number,
    hardware_id: number,
    pult_number_id: number,
    sim_id: number,
    assortment: string,
    owner: string
};

export type ApartmentInList = {
    apartment_id: number,
    address: string,
    contruct_number: string,
    owner: string
};