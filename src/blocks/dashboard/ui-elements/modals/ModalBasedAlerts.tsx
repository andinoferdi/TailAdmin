"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";
import {
  IconAlertCircle,
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
} from "@tabler/icons-react";

export default function ModalBasedAlerts() {
  const successModal = useModal();
  const infoModal = useModal();
  const warningModal = useModal();
  const errorModal = useModal();
  return (
    <ComponentCard title="Modal Based Alerts">
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={successModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-success-500 shadow-theme-xs hover:bg-success-600"
        >
          Success Alert
        </button>
        <button
          onClick={infoModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-blue-light-500 shadow-theme-xs hover:bg-blue-light-600"
        >
          Info Alert
        </button>
        <button
          onClick={warningModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-warning-500 shadow-theme-xs hover:bg-warning-600"
        >
          Warning Alert
        </button>
        <button
          onClick={errorModal.openModal}
          className="px-4 py-3 text-sm font-medium text-white rounded-lg bg-error-500 shadow-theme-xs hover:bg-error-600"
        >
          Danger Alert
        </button>
      </div>
      {/* Success Modal */}
      <Modal
        isOpen={successModal.isOpen}
        onClose={successModal.closeModal}
        className="max-w-[600px] p-5 lg:p-10"
      >
        <div className="text-center">
          <div className="mb-7 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-success-500/10 text-success-500 dark:bg-success-500/15">
              <IconCircleCheck className="h-10 w-10" stroke={1.6} />
            </span>
          </div>
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            Well Done!
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor
            felis risus nisi non. Quisque eu ut tempor curabitur.
          </p>

          <div className="flex items-center justify-center w-full gap-3 mt-7">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-success-500 shadow-theme-xs hover:bg-success-600 sm:w-auto"
            >
              Okay, Got It
            </button>
          </div>
        </div>
      </Modal>
      {/* Info Modal */}
      <Modal
        isOpen={infoModal.isOpen}
        onClose={infoModal.closeModal}
        className="max-w-[600px] p-5 lg:p-10"
      >
        <div className="text-center">
          <div className="mb-7 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-500/15">
              <IconInfoCircle className="h-10 w-10" stroke={1.6} />
            </span>
          </div>

          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            Information Alert!
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor
            felis risus nisi non. Quisque eu ut tempor curabitur.
          </p>

          <div className="flex items-center justify-center w-full gap-3 mt-7">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-blue-light-500 shadow-theme-xs hover:bg-blue-light-600 sm:w-auto"
            >
              Okay, Got It
            </button>
          </div>
        </div>
      </Modal>
      {/* Warning Modal */}
      <Modal
        isOpen={warningModal.isOpen}
        onClose={warningModal.closeModal}
        className="max-w-[600px] p-5 lg:p-10"
      >
        <div className="text-center">
          <div className="mb-7 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-warning-500/10 text-warning-500 dark:bg-warning-500/15">
              <IconAlertTriangle className="h-10 w-10" stroke={1.6} />
            </span>
          </div>

          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            Warning Alert!
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor
            felis risus nisi non. Quisque eu ut tempor curabitur.
          </p>

          <div className="flex items-center justify-center w-full gap-3 mt-7">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-warning-500 shadow-theme-xs hover:bg-warning-600 sm:w-auto"
            >
              Okay, Got It
            </button>
          </div>
        </div>
      </Modal>
      {/* Error Modal */}
      <Modal
        isOpen={errorModal.isOpen}
        onClose={errorModal.closeModal}
        className="max-w-[600px] p-5 lg:p-10"
      >
        <div className="text-center">
          <div className="mb-7 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-error-500/10 text-error-500 dark:bg-error-500/15">
              <IconAlertCircle className="h-10 w-10" stroke={1.6} />
            </span>
          </div>

          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            Danger Alert!
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Feugiat ipsum libero tempor
            felis risus nisi non. Quisque eu ut tempor curabitur.
          </p>

          <div className="flex items-center justify-center w-full gap-3 mt-7">
            <button
              type="button"
              className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-error-500 shadow-theme-xs hover:bg-error-600 sm:w-auto"
            >
              Okay, Got It
            </button>
          </div>
        </div>
      </Modal>
    </ComponentCard>
  );
}
