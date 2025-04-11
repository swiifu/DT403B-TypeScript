import { ProductListCard } from './components/ProductListCard.tsx';
import { PriceHistoryCard } from './components/PriceHistoryCard.tsx';
import { RevenueChartCard } from './components/RevenueChartCard.tsx';
import { CustomerListCard } from './components/CustomerListCard.tsx';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-900 text-white p-6 space-y-6">
            <h1 className="text-4xl font-bold mb-4">📊 Microsoft Licensing Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                <ProductListCard />
                <PriceHistoryCard />
                <RevenueChartCard />
                <CustomerListCard />
            </div>
        </div>
    );
}