export type Owners = {
  uid: number,
  owner: string,
  legal_address: string,
  inn: string,
  passport_series: string,
  passport_number: string,
  passport_organization: string,
  passport_date: Date
};

export type OwnersInList = {
  owner: string,
  legal_address: string,
  inn: string,
}