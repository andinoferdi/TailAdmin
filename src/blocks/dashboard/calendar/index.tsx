import Calendar from "@/blocks/dashboard/calendar/Calendar";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

export default function DashboardCalendarBlock() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Calendar" />
      <Calendar />
    </div>
  );
}

