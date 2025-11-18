export interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  employees: number;
  founded: number;
  description: string;
}

export interface FilterOptions {
  searchQuery: string;
  industry: string;
  location: string;
}

export type SortField = 'name' | 'industry' | 'location' | 'employees' | 'founded';
export type SortOrder = 'asc' | 'desc';
