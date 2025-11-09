import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import CheckboxComponents from "./CheckboxComponents";
import DefaultInputs from "./DefaultInputs";
import DropzoneComponent from "./DropZone";
import FileInputExample from "./FileInputExample";
import InputGroup from "./InputGroup";
import InputStates from "./InputStates";
import RadioButtons from "./RadioButtons";
import SelectInputs from "./SelectInputs";
import TextAreaInput from "./TextAreaInput";
import ToggleSwitch from "./ToggleSwitch";

export default function DashboardFormElementsBlock() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Form Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          <SelectInputs />
          <TextAreaInput />
          <InputStates />
        </div>
        <div className="space-y-6">
          <InputGroup />
          <FileInputExample />
          <CheckboxComponents />
          <RadioButtons />
          <ToggleSwitch />
          <DropzoneComponent />
        </div>
      </div>
    </div>
  );
}

