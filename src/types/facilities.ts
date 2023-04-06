export type Facility = {
    uid: number,
    facilityName: string,
    facilityAddress: string,
    contractNumbers: string, 
    contractDate: Date,  
    price: number,
    priceDate: Date, 
    ownershipId: number, 
    categoryId: number, 
    securityTypeId: number, 
    contractFileNumber: number,
    letteredFileNumber: number, 
    spiId: number, 
    hardwareId: number, 
    survOrgId: number, 
    mountOrgId: number, 
    pultNumberId: number,
    simId: number, 
    responsible: string, 
    assortment: string, 
    securityHours: string
};

export type Organization = {
    uid: number,
    organizationName: string,
    legalAddress: string,
    inn: string,
    orgn: string,
    facilities: Array<Facility>
}