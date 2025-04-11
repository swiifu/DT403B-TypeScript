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

    const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (segment === 'All' || product.marketSegment === segment)
    );

    return (
        <div className="bg-slate-800 p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Product List</h2>
            <div className="flex gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="p-2 rounded bg-slate-700 text-white flex-1"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="p-2 rounded bg-slate-700 text-white"
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                >
                    <option value="All">All Segments</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Education">Education</option>
                    <option value="Charity">Charity</option>
                </select>
            </div>

            <div className="space-y-4">
                {filtered.map((product) => (
                    <div
                        key={product.id}
                        className="p-4 bg-slate-700 rounded-xl flex justify-between items-center"
                    >
                        <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-slate-300">
                                Segment: {product.marketSegment} | Commitment: {product.commitment}
                            </p>
                            <p className="text-sm text-slate-400">
                                Monthly: £{product.prices.monthly.toFixed(2)} | Annual: £{product.prices.annual.toFixed(2)} | 3-Year: £{product.prices.threeYear.toFixed(2)}
                            </p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">
                            +
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}