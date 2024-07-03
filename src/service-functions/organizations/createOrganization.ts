import { Organization } from "../../types/organizations";

export const createOrganization = async (data: Organization) => {
  const organizationData = JSON.stringify(data)
  try {
    const r = await fetch('/api/organizations/organization_add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: organizationData
    });
  } catch (error) {
    throw error;
  }
};