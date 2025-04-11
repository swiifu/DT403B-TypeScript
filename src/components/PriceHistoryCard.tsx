import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { mockMicrosoftProducts } from '../api/mockData';

export const PriceHistoryCard = () => {
    const [selectedSKU, setSelectedSKU] = useState<string>('');

    const uniqueSKUs = Array.from(new Set(mockMicrosoftProducts.map((item) => item.sku)));

    const filteredData = selectedSKU
        ? mockMicrosoftProducts.filter((item) => item.sku === selectedSKU)
        : [];

    return (
        <div className="bg-slate-800 p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Price History</h2>

            <select
                className="w-full p-2 mb-4 rounded"
                onChange={(e) => setSelectedSKU(e.target.value)}
                value={selectedSKU}
            >
                <option value="">Select a license</option>
                {uniqueSKUs.map((sku) => (
                    <option key={sku} value={sku}>
                        {sku}
                    </option>
                ))}
            </select>

            {filteredData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <ScatterChart>
                        <XAxis type="category" dataKey="date" name="Date" />
                        <YAxis type="number" dataKey="price" name="Price" unit="£" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="Price" data={filteredData} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            ) : (
                <p className="text-gray-400 text-sm">Select a product to view price history.</p>
            )}
        </div>
    );
};