import type { Company } from '../types';
import { companiesData } from '../data/companiesData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const fetchCompanies = async (): Promise<Company[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/companies`);
    if (!response.ok) {
      throw new Error('Failed to fetch companies');
    }
    return await response.json();
  } catch (error) {
    console.warn('API unavailable, using fallback data:', error);
    // Return static data as fallback for production deployment
    return Promise.resolve(companiesData as Company[]);
  }
};
