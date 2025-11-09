
import DemographicCard from "./DemographicCard";
import MonthlySalesChart from "./MonthlySalesChart";
import MonthlyTargetCard from "./MonthlyTargetCard";
import RecentOrdersCard from "./RecentOrdersCard";
import StatisticsChart from "./StatisticsChart";
import CustomersCard from "./CustomersCard";
import OrdersCard from "./OrdersCard";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          <CustomersCard />
          <OrdersCard />
        </div>
        <MonthlySalesChart />
      </div>
      <div className="col-span-12 xl:col-span-5">
        <MonthlyTargetCard />
      </div>
      <div className="col-span-12">
        <StatisticsChart />
      </div>
      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>
      <div className="col-span-12 xl:col-span-7">
        <RecentOrdersCard />
      </div>
    </div>
  );
}

