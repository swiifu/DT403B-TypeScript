import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const mockProducts = [
    {
        id: '1',
        name: 'Microsoft 365 Business Standard',
        marketSegment: 'Corporate',
        prices: {
            monthly: 8.37,
            annual: 9.99,
            threeYear: 10.49,
        },
        commitment: 'Annual',
    },
    {
        id: '2',
        name: 'Microsoft 365 Business Premium',
        marketSegment: 'Education',
        prices: {
            monthly: 4.99,
            annual: 5.49,
            threeYear: 6.49,
        },
        commitment: '3-Year Commit',
    },
];
export function ProductListCard() {
    const [search, setSearch] = useState('');
    const [segment, setSegment] = useState('All');
    const filtered = mockProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) &&
        (segment === 'All' || product.marketSegment === segment));
    return (_jsxs("div", { className: "bg-slate-800 p-4 rounded-2xl shadow", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Product List" }), _jsxs("div", { className: "flex gap-4 mb-4", children: [_jsx("input", { type: "text", placeholder: "Search products...", className: "p-2 rounded bg-slate-700 text-white flex-1", value: search, onChange: (e) => setSearch(e.target.value) }), _jsxs("select", { className: "p-2 rounded bg-slate-700 text-white", value: segment, onChange: (e) => setSegment(e.target.value), children: [_jsx("option", { value: "All", children: "All Segments" }), _jsx("option", { value: "Corporate", children: "Corporate" }), _jsx("option", { value: "Education", children: "Education" }), _jsx("option", { value: "Charity", children: "Charity" })] })] }), _jsx("div", { className: "space-y-4", children: filtered.map((product) => (_jsxs("div", { className: "p-4 bg-slate-700 rounded-xl flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children: product.name }), _jsxs("p", { className: "text-sm text-slate-300", children: ["Segment: ", product.marketSegment, " | Commitment: ", product.commitment] }), _jsxs("p", { className: "text-sm text-slate-400", children: ["Monthly: \u00A3", product.prices.monthly.toFixed(2), " | Annual: \u00A3", product.prices.annual.toFixed(2), " | 3-Year: \u00A3", product.prices.threeYear.toFixed(2)] })] }), _jsx("button", { className: "bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded", children: "+" })] }, product.id))) })] }));
}
