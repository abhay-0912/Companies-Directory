import type { Company } from '../types';

const API_BASE_URL = 'http://localhost:3001';

export const fetchCompanies = async (): Promise<Company[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/companies`);
    if (!response.ok) {
      throw new Error('Failed to fetch companies');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};
