import UpcomingEvents from "./home/ucoming-events";
import DealsChart from "./home/deals-chart";
import UpcomingEventsSkeleton from "./skeleton/upcoming-events";
import AccordionHeaderSkeleton from "./skeleton/accordion-header";
import LatestActivitiesSkeleton from "./skeleton/latest-activities";
import KanbanColumnSkeleton from "./skeleton/kanban";
import ProjectCardSkeleton from "./skeleton/project-card";
import DashboardTotalCountCard from "./home/total-count-card";
import DashboardLatestActivities from "./home/latest-activities";
import { ContactStatusTag } from "./tags/contact-status-tag";

/**
 * Exports various components from the current module.
 *
 * @module components/index
 *
 * @exports UpcomingEvents - Component for displaying upcoming events.
 * @exports DealsChart - Component for displaying a chart of deals.
 * @exports UpcomingEventsSkeleton - Skeleton component for upcoming events.
 * @exports AccordionHeaderSkeleton - Skeleton component for accordion headers.
 * @exports LatestActivitiesSkeleton - Skeleton component for latest activities.
 * @exports KanbanColumnSkeleton - Skeleton component for Kanban columns.
 * @exports ProjectCardSkeleton - Skeleton component for project cards.
 */
export {
  UpcomingEvents,
  DealsChart,
  UpcomingEventsSkeleton,
  AccordionHeaderSkeleton,
  LatestActivitiesSkeleton,
  KanbanColumnSkeleton,
  ProjectCardSkeleton,
  DashboardTotalCountCard,
  DashboardLatestActivities,
  ContactStatusTag
};

export * from "./tasks/form/description";
export * from "./tasks/form/due-date";
export * from "./tasks/form/stage";
export * from "./tasks/form/title";
export * from "./tasks/form/users";
export * from "./tasks/form/header";
export * from "./accordion";
export * from "./text";
export * from "./tags/user-tag";
