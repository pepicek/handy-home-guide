
import { RouteObject } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Dashboard,
  Services,
  Appointments,
  SpecialOffers,
  Settings,
  Clients,
  Messages,
  Analytics,
  Earnings,
  Listings,
  ListingsSettings
} from "@/pages/dashboard";

import ClientProfile from "@/pages/dashboard/client/ClientProfile";
import ServiceHistory from "@/pages/dashboard/client/ServiceHistory";
import CreateInvoice from "@/pages/dashboard/invoices/CreateInvoice";
import IssuedInvoices from "@/pages/dashboard/invoices/IssuedInvoices";
import InvoicePreview from "@/pages/dashboard/invoices/InvoicePreview";
import InvoiceEdit from "@/pages/dashboard/invoices/InvoiceEdit";
import AnnualTarget from "@/pages/dashboard/targets/AnnualTarget";
import TargetSettings from "@/pages/dashboard/targets/TargetSettings";
import EarningsExport from "@/pages/dashboard/exports/EarningsExport";
import Support from "@/pages/dashboard/Support";
import TicketsList from "@/pages/dashboard/support/TicketsList";
import CreateTicket from "@/pages/dashboard/support/CreateTicket";
import TicketDetails from "@/pages/dashboard/support/TicketDetails";
import ProSubscription from "@/pages/dashboard/ProSubscription";
import CheckSchedule from "@/pages/CheckSchedule";
import ScheduleConsultation from "@/pages/ScheduleConsultation";

// Import SuperAdmin components
import SuperAdminDashboard from "@/pages/dashboard/superadmin/SuperAdminDashboard";

// Import PrivateRoute component for route protection
import { PrivateRoute } from "@/components/auth/PrivateRoute";

export const dashboardRoutes: RouteObject[] = [{
  path: "/dashboard",
  element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
  children: [
    { path: "", element: <Dashboard /> },
    { path: "services", element: <Services /> },
    { path: "appointments", element: <Appointments /> },
    { path: "special-offers", element: <SpecialOffers /> },
    { path: "clients", element: <Clients /> },
    { path: "messages", element: <Messages /> },
    { path: "analytics", element: <Analytics /> },
    { path: "earnings", element: <Earnings /> },
    { path: "settings", element: <Settings /> },
    { path: "pro", element: <ProSubscription /> },
    { path: "pro/schedule-consultation", element: <ScheduleConsultation /> },
    { path: "clients/:id", element: <ClientProfile /> },
    { path: "clients/:id/history", element: <ServiceHistory /> },
    { path: "appointments/schedule/:id", element: <CheckSchedule /> },
    { path: "listings", element: <Listings /> },
    { path: "listings/service/:serviceId", element: <Listings /> },
    { path: "listings/settings", element: <ListingsSettings /> },
    { path: "invoices/create", element: <CreateInvoice /> },
    { path: "invoices", element: <IssuedInvoices /> },
    { path: "invoices/:id/preview", element: <InvoicePreview /> },
    { path: "invoices/:id/edit", element: <InvoiceEdit /> },
    { path: "targets/annual", element: <AnnualTarget /> },
    { path: "targets/settings", element: <TargetSettings /> },
    { path: "exports/earnings", element: <EarningsExport /> },
    { path: "support", element: <Support /> },
    { path: "support/tickets", element: <TicketsList /> },
    { path: "support/tickets/new", element: <CreateTicket /> },
    { path: "support/tickets/:ticketId", element: <TicketDetails /> },
    
    // SuperAdmin routes (protected with additional role checks)
    { 
      path: "admin", 
      element: <PrivateRoute requiresAdmin={true}><SuperAdminDashboard /></PrivateRoute> 
    },
  ]
}];
