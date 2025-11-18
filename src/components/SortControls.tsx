import React from 'react';
import type { SortField, SortOrder } from '../types';

interface SortControlsProps {
  sortField: SortField;
  sortOrder: SortOrder;
  onSortChange: (field: SortField, order: SortOrder) => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  sortField,
  sortOrder,
  onSortChange,
}) => {
  const sortOptions: { value: SortField; label: string }[] = [
    { value: 'name', label: 'Name' },
    { value: 'industry', label: 'Industry' },
    { value: 'location', label: 'Location' },
    { value: 'employees', label: 'Employees' },
    { value: 'founded', label: 'Founded Year' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-sm font-medium text-gray-700">Sort by:</span>
        
        <select
          value={sortField}
          onChange={(e) => onSortChange(e.target.value as SortField, sortOrder)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          onClick={() =>
            onSortChange(sortField, sortOrder === 'asc' ? 'desc' : 'asc')
          }
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          {sortOrder === 'asc' ? (
            <>
              <span>↑</span>
              <span>Ascending</span>
            </>
          ) : (
            <>
              <span>↓</span>
              <span>Descending</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SortControls;
