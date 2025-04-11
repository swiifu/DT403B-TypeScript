import { useState } from 'react';
import { mockMicrosoftProducts } from '../api/mockData';

export function ProductListCard() {
    const [search, setSearch] = useState('');
    const [segment, setSegment] = useState('All');

    const filtered = mockMicrosoftProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (segment === 'All' || product.segment === segment)
    );

    return (
        <div className="w-full max-w-md min-h-[300px] p-6 rounded-[20px] border border-slate-700 bg-slate-800 shadow-md">
            <h2 className="text-lg font-semibold mb-4">🛒 Product List</h2>

            <div className="flex flex-col gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 rounded bg-slate-700 text-white placeholder-slate-400"
                />

                <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="p-2 rounded bg-slate-700 text-white"
                >
                    <option value="All">All Segments</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Education">Education</option>
                    <option value="Charity">Charity</option>
                </select>
            </div>

            <div className="space-y-4">
                {filtered.map(product => (
                    <div
                        key={product.sku}
                        className="p-4 bg-slate-700 rounded-xl flex justify-between items-center"
                    >
                        <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-slate-300">
                                Segment: {product.segment} | Commitment: {product.term.join(', ')}
                            </p>
                            <p className="text-sm text-slate-400">
                                Monthly: £{product.billingCycle.monthly.toFixed(2)} | Annual: £{product.billingCycle.annual.toFixed(2)} | 3-Year: £{product.billingCycle.threeYear.toFixed(2)}
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
