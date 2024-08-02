export type Department = {
    short_name: string,
    full_name: string,
    legal_address: string,
    actual_address: string,
    inn: string,
    company_director: string
};

export type DepartmentInList = {
    department_id: number,
    short_name: string,
    inn: string,
    company_director: string
};