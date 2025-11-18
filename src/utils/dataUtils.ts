import type { Company, FilterOptions, SortField, SortOrder } from '../types';

export const filterCompanies = (
  companies: Company[],
  filters: FilterOptions
): Company[] => {
  return companies.filter((company) => {
    const matchesSearch =
      filters.searchQuery === '' ||
      company.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(filters.searchQuery.toLowerCase());

    const matchesIndustry =
      filters.industry === '' || company.industry === filters.industry;

    const matchesLocation =
      filters.location === '' || company.location === filters.location;

    return matchesSearch && matchesIndustry && matchesLocation;
  });
};

export const sortCompanies = (
  companies: Company[],
  field: SortField,
  order: SortOrder
): Company[] => {
  return [...companies].sort((a, b) => {
    let aValue = a[field];
    let bValue = b[field];

    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = (bValue as string).toLowerCase();
    }

    if (aValue < bValue) return order === 'asc' ? -1 : 1;
    if (aValue > bValue) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

export const paginateCompanies = (
  companies: Company[],
  page: number,
  pageSize: number
): Company[] => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return companies.slice(startIndex, endIndex);
};
