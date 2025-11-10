import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import VideosExample from "./VideosExample";

export default function DashboardVideosBlock() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Videos" />
      <VideosExample />
    </div>
  );
}

