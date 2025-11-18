# Companies Directory 🏢

A modern, responsive React-based frontend application for browsing and filtering company data. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Multiple View Modes**: Switch between card and table layouts
- **Advanced Filtering**: Filter companies by name, industry, and location
- **Sorting Options**: Sort by name, industry, location, employees, or founding year
- **Pagination**: Easy navigation through large datasets
- **Loading & Error States**: Proper UX feedback for all states
- **Mock API**: JSON Server for development and testing

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **JSON Server** - Mock REST API

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd companies-directory
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running the Application

### Option 1: Run both frontend and API together (Recommended)
```bash
npm run dev:all
```

This will start:
- Vite dev server at http://localhost:5173
- JSON Server API at http://localhost:3001

### Option 2: Run separately

**Frontend only:**
```bash
npm run dev
```

**API server only:**
```bash
npm run api
```

## 📦 Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build:
```bash
npm run preview
```

## 🌐 Deployment

This application can be easily deployed to:

### Vercel
1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and configure the build
4. Deploy!

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Render
1. Create a new Web Service
2. Connect your repository
3. Build command: `npm run build`
4. Start command: `npm run preview`
5. Deploy!

**Note:** For production deployment, you'll need to replace the JSON Server with a real backend API or use a hosted JSON Server alternative.

## 📁 Project Structure

```
companies-directory/
├── src/
│   ├── components/          # React components
│   │   ├── CompanyCard.tsx
│   │   ├── CompanyTable.tsx
│   │   ├── FilterBar.tsx
│   │   ├── SortControls.tsx
│   │   ├── Pagination.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorMessage.tsx
│   ├── services/            # API services
│   │   └── api.ts
│   ├── utils/               # Utility functions
│   │   └── dataUtils.ts
│   ├── types.ts             # TypeScript types
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   └── style.css            # Global styles
├── public/                  # Static assets
├── db.json                  # Mock database
├── index.html
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🎨 Features Breakdown

### Filtering
- **Search**: Search companies by name or description
- **Industry Filter**: Filter by specific industries
- **Location Filter**: Filter by company locations
- **Clear Filters**: Reset all filters with one click

### Sorting
- Sort by: Name, Industry, Location, Employees, Founded Year
- Toggle between ascending and descending order

### Pagination
- Configurable page size (default: 9 items per page)
- Page number buttons with ellipsis for large datasets
- Previous/Next navigation

### View Modes
- **Card View**: Visual card layout with key information
- **Table View**: Comprehensive table with all details

## 🔌 API Endpoints

The JSON Server provides the following endpoint:

- `GET /companies` - Get all companies

You can extend this with:
- `GET /companies/:id` - Get a specific company
- `POST /companies` - Add a new company
- `PUT /companies/:id` - Update a company
- `DELETE /companies/:id` - Delete a company

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Built as part of the Frontend Developer technical assessment for Frontlines Media.

## 🙏 Acknowledgments

- Design inspiration from modern dashboard applications
- Sample company data generated for demonstration purposes
- Built with ❤️ using React and TypeScript
