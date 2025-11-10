import React from "react";
import {
  IconAlertCircle,
  IconAlertTriangle,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconBell,
  IconBolt,
  IconBox,
  IconCalendar,
  IconChartPie,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronUp,
  IconCircleCheck,
  IconClipboardCheck,
  IconClock,
  IconCopy,
  IconCube,
  IconCurrencyDollar,
  IconDots,
  IconDotsVertical,
  IconDownload,
  IconEye,
  IconEyeClosed,
  IconFile,
  IconFileDescription,
  IconFileText,
  IconGridDots,
  IconLock,
  IconMail,
  IconMessageCircle,
  IconPackage,
  IconPencil,
  IconPlugConnected,
  IconPlus,
  IconSend,
  IconSquareRoundedX,
  IconStar,
  IconTable,
  IconTrash,
  IconUser,
  IconUserCircle,
  IconUsersGroup,
  IconVideo,
  IconVolume,
} from "@tabler/icons-react";

type IconProps = React.ComponentProps<typeof IconAlertCircle>;

type IconComponent = React.ComponentType<IconProps> & {
  displayName?: string;
};

const withIcon = (Icon: IconComponent) => {
  const WrappedIcon: React.FC<IconProps> = ({ stroke = 1.5, ...props }) => (
    <Icon stroke={stroke} {...props} />
  );
  WrappedIcon.displayName = Icon.displayName ?? "Icon";
  return WrappedIcon;
};

export const PlusIcon = withIcon(IconPlus);
export const CloseIcon = withIcon(IconSquareRoundedX);
export const BoxIcon = withIcon(IconBox);
export const CheckCircleIcon = withIcon(IconCircleCheck);
export const AlertIcon = withIcon(IconAlertTriangle);
export const InfoIcon = withIcon(IconAlertCircle);
export const ErrorIcon = withIcon(IconAlertCircle);
export const BoltIcon = withIcon(IconBolt);
export const ArrowUpIcon = withIcon(IconArrowUp);
export const ArrowDownIcon = withIcon(IconArrowDown);
export const FolderIcon = withIcon(IconPackage);
export const VideoIcon = withIcon(IconVideo);
export const AudioIcon = withIcon(IconVolume);
export const GridIcon = withIcon(IconGridDots);
export const FileIcon = withIcon(IconFile);
export const DownloadIcon = withIcon(IconDownload);
export const ArrowRightIcon = withIcon(IconArrowRight);
export const GroupIcon = withIcon(IconUsersGroup);
export const BoxIconLine = withIcon(IconPackage);
export const ShootingStarIcon = withIcon(IconStar);
export const DollarLineIcon = withIcon(IconCurrencyDollar);
export const TrashBinIcon = withIcon(IconTrash);
export const AngleUpIcon = withIcon(IconChevronUp);
export const AngleDownIcon = withIcon(IconChevronDown);
export const PencilIcon = withIcon(IconPencil);
export const CheckLineIcon = withIcon(IconCheck);
export const CloseLineIcon = withIcon(IconSquareRoundedX);
export const ChevronDownIcon = withIcon(IconChevronDown);
export const ChevronUpIcon = withIcon(IconChevronUp);
export const PaperPlaneIcon = withIcon(IconSend);
export const LockIcon = withIcon(IconLock);
export const EnvelopeIcon = withIcon(IconMail);
export const UserIcon = withIcon(IconUser);
export const CalenderIcon = withIcon(IconCalendar);
export const EyeIcon = withIcon(IconEye);
export const EyeCloseIcon = withIcon(IconEyeClosed);
export const TimeIcon = withIcon(IconClock);
export const CopyIcon = withIcon(IconCopy);
export const ChevronLeftIcon = withIcon(IconChevronLeft);
export const UserCircleIcon = withIcon(IconUserCircle);
export const TaskIcon = withIcon(IconClipboardCheck);
export const ListIcon = withIcon(IconClipboardCheck);
export const TableIcon = withIcon(IconTable);
export const PageIcon = withIcon(IconFileText);
export const PieChartIcon = withIcon(IconChartPie);
export const BoxCubeIcon = withIcon(IconCube);
export const PlugInIcon = withIcon(IconPlugConnected);
export const DocsIcon = withIcon(IconFileDescription);
export const MailIcon = withIcon(IconMail);
export const HorizontaLDots = withIcon(IconDots);
export const ChatIcon = withIcon(IconMessageCircle);
export const MoreDotIcon = withIcon(IconDotsVertical);
export const BellIcon = withIcon(IconBell);
