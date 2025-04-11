import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProductListCard } from './components/ProductListCard';
import { PriceHistoryCard } from './components/PriceHistoryCard';
import { RevenueChartCard } from './components/RevenueChartCard';
import { CustomerListCard } from './components/CustomerListCard';
export default function Dashboard() {
    return (_jsxs("div", { className: "min-h-screen bg-slate-900 text-white p-6 space-y-6", children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "\uD83D\uDCCA Microsoft Licensing Dashboard" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6", children: [_jsx(ProductListCard, {}), _jsx(PriceHistoryCard, {}), _jsx(RevenueChartCard, {}), _jsx(CustomerListCard, {})] })] }));
}
