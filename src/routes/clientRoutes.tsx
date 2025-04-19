
import { RouteObject } from "react-router-dom";
import ClientDashboardLayout from "@/components/client/ClientDashboardLayout";
import {
  ClientDashboard,
  SavedProviders,
  ProjectsManager,
  QuoteRequests,
  ClientReviews,
  FinancialSummary,
  SearchHistory,
  ClientSettings,
  NewProject,
  EditProject,
  ProjectDetails,
  RequestNewQuote,
  QuoteDetails,
  MessageProvider
} from "@/pages/client";

export const clientRoutes: RouteObject[] = [{
  path: "/client",
  element: <ClientDashboardLayout />,
  children: [
    { path: "", element: <ClientDashboard /> },
    { path: "saved-providers", element: <SavedProviders /> },
    { path: "projects", element: <ProjectsManager /> },
    { path: "projects/new", element: <NewProject /> },
    { path: "projects/:id", element: <ProjectDetails /> },
    { path: "projects/:id/edit", element: <EditProject /> },
    { path: "quotes", element: <QuoteRequests /> },
    { path: "quotes/new", element: <RequestNewQuote /> },
    { path: "quotes/:id", element: <QuoteDetails /> },
    { path: "quotes/:id/message", element: <MessageProvider /> },
    { path: "reviews", element: <ClientReviews /> },
    { path: "finance", element: <FinancialSummary /> },
    { path: "search-history", element: <SearchHistory /> },
    { path: "settings", element: <ClientSettings /> }
  ]
}];
