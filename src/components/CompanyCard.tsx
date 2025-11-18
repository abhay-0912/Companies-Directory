import React from 'react';
import type { Company } from '../types';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{company.name}</h3>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
          {company.industry}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{company.description}</p>
      
      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-700">
          <span className="font-semibold mr-2">📍 Location:</span>
          <span>{company.location}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-700">
          <span className="font-semibold mr-2">👥 Employees:</span>
          <span>{company.employees.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-700">
          <span className="font-semibold mr-2">📅 Founded:</span>
          <span>{company.founded}</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
