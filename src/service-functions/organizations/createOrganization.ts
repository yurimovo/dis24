import { Organization } from "../../types/organizations";

export const createOrganization = async (data: Organization) => {
  const organizationData = JSON.stringify(data)
  console.log('data', data);
  console.log('orgdata', organizationData)
  try {
    const r = await fetch('/api/organizations/organization_add', {
      method: 'POST',
      mode: "cors",
      credentials: "include",
      body: organizationData
    });
    return (await r.json());
  } catch (error) {
    throw error;
  }
};