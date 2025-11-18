import { useState, useEffect } from 'react';
import type { Company, FilterOptions, SortField, SortOrder } from './types';
import { fetchCompanies } from './services/api';
import { filterCompanies, sortCompanies, paginateCompanies } from './utils/dataUtils';
import FilterBar from './components/FilterBar';
import SortControls from './components/SortControls';
import CompanyCard from './components/CompanyCard';
import CompanyTable from './components/CompanyTable';
import Pagination from './components/Pagination';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('cards');
  
  // Filter state
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: '',
    industry: '',
    location: '',
  });
  
  // Sort state
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(9);

  // Fetch companies on mount
  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCompanies();
      setCompanies(data);
    } catch (err) {
      setError('Failed to load companies. Please make sure the API server is running.');
    } finally {
      setLoading(false);
    }
  };

  // Get unique industries and locations for filters
  const industries = Array.from(new Set(companies.map((c) => c.industry))).sort();
  const locations = Array.from(new Set(companies.map((c) => c.location))).sort();

  // Apply filters, sorting, and pagination
  const filteredCompanies = filterCompanies(companies, filters);
  const sortedCompanies = sortCompanies(filteredCompanies, sortField, sortOrder);
  const totalPages = Math.ceil(sortedCompanies.length / pageSize);
  const paginatedCompanies = paginateCompanies(sortedCompanies, currentPage, pageSize);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortField, sortOrder]);

  const handleSortChange = (field: SortField, order: SortOrder) => {
    setSortField(field);
    setSortOrder(order);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <ErrorMessage message={error} onRetry={loadCompanies} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Companies Directory
              </h1>
              <p className="text-gray-600 mt-1">
                Browse and filter through {companies.length} companies
              </p>
            </div>
            
            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'cards'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🎴 Cards
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'table'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                📊 Table
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <FilterBar
          filters={filters}
          industries={industries}
          locations={locations}
          onFilterChange={setFilters}
        />

        {/* Sort Controls */}
        <SortControls
          sortField={sortField}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-700">
            Showing{' '}
            <span className="font-semibold">
              {paginatedCompanies.length}
            </span>{' '}
            of{' '}
            <span className="font-semibold">{sortedCompanies.length}</span>{' '}
            companies
          </p>
        </div>

        {/* Company Display */}
        {sortedCompanies.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No companies found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters to see more results
            </p>
          </div>
        ) : viewMode === 'cards' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <CompanyTable companies={paginatedCompanies} />
        )}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-sm mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600">
            Companies Directory © {new Date().getFullYear()} | Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
