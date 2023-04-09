export type Apartment = {
    uid: number,
    apartment_address: string,
    contract_numbers: string,
    contract_date: Date,
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
    owners:
        {owner: string}
};

export type ApartmentInList = {
    apartment_address: string,
    contract_numbers: string,
    owners:
        {owner: string}
};