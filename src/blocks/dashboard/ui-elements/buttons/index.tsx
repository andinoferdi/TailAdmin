import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button";
import { BoxIcon } from "@/icons";

const buttonSizes = ["sm", "md"] as const;

export default function DashboardButtonsBlock() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Buttons" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Primary Button">
          <div className="flex items-center gap-5">
            {buttonSizes.map((size) => (
              <Button key={`primary-${size}`} size={size} variant="primary">
                Button Text
              </Button>
            ))}
          </div>
        </ComponentCard>
        <ComponentCard title="Primary Button with Left Icon">
          <div className="flex items-center gap-5">
            {buttonSizes.map((size) => (
              <Button key={`primary-left-${size}`} size={size} variant="primary" startIcon={<BoxIcon />}>
                Button Text
              </Button>
            ))}
          </div>
        </ComponentCard>
        <ComponentCard title="Primary Button with Right Icon">
          <div className="flex items-center gap-5">
            {buttonSizes.map((size) => (
              <Button key={`primary-right-${size}`} size={size} variant="primary" endIcon={<BoxIcon />}>
                Button Text
              </Button>
            ))}
          </div>
        </ComponentCard>
        <ComponentCard title="Secondary Button">
          <div className="flex items-center gap-5">
            {buttonSizes.map((size) => (
              <Button key={`outline-${size}`} size={size} variant="outline">
                Button Text
              </Button>
            ))}
          </div>
        </ComponentCard>
        <ComponentCard title="Outline Button with Left Icon">
          <div className="flex items-center gap-5">
            {buttonSizes.map((size) => (
              <Button key={`outline-left-${size}`} size={size} variant="outline" startIcon={<BoxIcon />}>
                Button Text
              </Button>
            ))}
          </div>
        </ComponentCard>
        <ComponentCard title="Outline Button with Right Icon">
          <div className="flex items-center gap-5">
            {buttonSizes.map((size) => (
              <Button key={`outline-right-${size}`} size={size} variant="outline" endIcon={<BoxIcon />}>
                Button Text
              </Button>
            ))}
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}

