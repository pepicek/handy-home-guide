
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import IndexAlt1 from "./pages/IndexAlt1";
import IndexAlt2 from "./pages/IndexAlt2";
import IndexAlt3 from "./pages/IndexAlt3";
import Search from "./pages/Search";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SpecialOffersPage from "./pages/SpecialOffers";
import HowItWorksPage from "./pages/HowItWorks";
import Providers from "./pages/Providers";
import SpecialOfferDetails from "./pages/SpecialOfferDetails";
import BookNow from "./pages/BookNow";
import ViewProfile from "./pages/ViewProfile";
import CheckSchedule from "./pages/CheckSchedule";
import RequestQuote from "./pages/RequestQuote";
import ServiceCategory from "./pages/ServiceCategory";
import MapView from "./pages/MapView";

import HomepageVariation1 from "./pages/HomepageVariation1";
import HomepageVariation2 from "./pages/HomepageVariation2";
import HomepageVariation3 from "./pages/HomepageVariation3";

import HeroVariation1 from "@/components/variations/HeroVariation1";
import HeroVariation2 from "@/components/variations/HeroVariation2";
import HeroVariation3 from "@/components/variations/HeroVariation3";

import ServiceSearch from "./pages/ServiceSearch";
import ProjectSearch from "./pages/ProjectSearch";
import MarketResearch from "./pages/MarketResearch";
import AllCategories from "./pages/AllCategories";

import ProviderRating from "./pages/ProviderRating";

import SignIn from "./pages/SignIn";

import Register from "./pages/Register";
import RegisterVisitor from "./pages/RegisterVisitor";
import RegisterProvider from "./pages/RegisterProvider";
import VisitorQuestionnaire from "./pages/VisitorQuestionnaire";
import ProviderOnboarding from "./pages/ProviderOnboarding";

import { 
  DashboardLayout,
  Dashboard,
  Services,
  Appointments,
  SpecialOffers,
  Settings
} from "./pages/dashboard";

import Clients from "./pages/dashboard/Clients";
import Messages from "./pages/dashboard/Messages";
import Analytics from "./pages/dashboard/Analytics";
import Earnings from "./pages/dashboard/Earnings";
import ProSubscription from "./pages/dashboard/ProSubscription";
import Listings from "./pages/dashboard/Listings";
import ListingsSettings from "./pages/dashboard/ListingsSettings";

// New invoice pages
import CreateInvoice from "./pages/dashboard/invoices/CreateInvoice";
import IssuedInvoices from "./pages/dashboard/invoices/IssuedInvoices";

// New target pages
import AnnualTarget from "./pages/dashboard/targets/AnnualTarget";
import TargetSettings from "./pages/dashboard/targets/TargetSettings";

// New export page
import EarningsExport from "./pages/dashboard/exports/EarningsExport";

import ClientDashboardLayout from "./components/client/ClientDashboardLayout";
import ClientDashboard from "./pages/client/ClientDashboard";
import SavedProviders from "./pages/client/SavedProviders";
import ProjectsManager from "./pages/client/ProjectsManager";
import QuoteRequests from "./pages/client/QuoteRequests";
import ClientReviews from "./pages/client/ClientReviews";
import ClientSettings from "./pages/client/ClientSettings";
import FinancialSummary from "./pages/client/FinancialSummary";
import SearchHistory from "./pages/client/SearchHistory";

import NewProject from "./pages/client/projects/NewProject";
import ProjectDetails from "./pages/client/projects/ProjectDetails";
import EditProject from "./pages/client/projects/EditProject";

import RequestNewQuote from "./pages/client/quotes/RequestNewQuote";
import QuoteDetails from "./pages/client/quotes/QuoteDetails";
import MessageProvider from "./pages/client/quotes/MessageProvider";

import FindProviders from "./pages/client/providers/FindProviders";

import ClientProfile from "./pages/dashboard/client/ClientProfile";
import ServiceHistory from "./pages/dashboard/client/ServiceHistory";

import Credits from "./pages/Credits";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/alt1" element={<IndexAlt1 />} />
          <Route path="/alt2" element={<IndexAlt2 />} />
          <Route path="/alt3" element={<IndexAlt3 />} />
          
          <Route path="/home/v1" element={<HomepageVariation1 />} />
          <Route path="/home/v2" element={<HomepageVariation2 />} />
          <Route path="/home/v3" element={<HomepageVariation3 />} />
          
          <Route path="/search" element={<Search />} />
          <Route path="/search/map" element={<MapView />} />
          <Route path="/special-offers" element={<SpecialOffersPage />} />
          <Route path="/special-offers/:id" element={<SpecialOfferDetails />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-now/:id" element={<BookNow />} />
          <Route path="/profile/:id" element={<ViewProfile />} />
          <Route path="/schedule/:id" element={<CheckSchedule />} />
          <Route path="/request-quote/:id" element={<RequestQuote />} />
          <Route path="/category/:category" element={<ServiceCategory />} />
          <Route path="/provider/:id/ratings" element={<ProviderRating />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
          
          <Route path="/search/services" element={<ServiceSearch />} />
          <Route path="/search/projects" element={<ProjectSearch />} />
          <Route path="/search/market" element={<MarketResearch />} />
          <Route path="/categories" element={<AllCategories />} />
          
          <Route path="/signin" element={<SignIn />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/register/visitor" element={<RegisterVisitor />} />
          <Route path="/register/provider" element={<RegisterProvider />} />
          <Route path="/register/visitor/questionnaire" element={<VisitorQuestionnaire />} />
          <Route path="/register/provider/onboarding" element={<ProviderOnboarding />} />
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="services" element={<Services />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="special-offers" element={<SpecialOffers />} />
            <Route path="clients" element={<Clients />} />
            <Route path="messages" element={<Messages />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="settings" element={<Settings />} />
            <Route path="pro" element={<ProSubscription />} />
            <Route path="clients/:id" element={<ClientProfile />} />
            <Route path="clients/:id/history" element={<ServiceHistory />} />
            <Route path="appointments/schedule/:id" element={<CheckSchedule />} />
            <Route path="listings" element={<Listings />} />
            <Route path="listings/service/:serviceId" element={<Listings />} />
            <Route path="listings/settings" element={<ListingsSettings />} />
            
            {/* New Invoice Routes */}
            <Route path="invoices/create" element={<CreateInvoice />} />
            <Route path="invoices" element={<IssuedInvoices />} />
            
            {/* New Target Routes */}
            <Route path="targets/annual" element={<AnnualTarget />} />
            <Route path="targets/settings" element={<TargetSettings />} />
            
            {/* New Export Route */}
            <Route path="exports/earnings" element={<EarningsExport />} />
          </Route>
          
          <Route path="/client" element={<ClientDashboardLayout />}>
            <Route index element={<ClientDashboard />} />
            <Route path="saved-providers" element={<SavedProviders />} />
            <Route path="projects" element={<ProjectsManager />} />
            <Route path="projects/new" element={<NewProject />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
            <Route path="projects/:id/edit" element={<EditProject />} />
            <Route path="quotes" element={<QuoteRequests />} />
            <Route path="quotes/new" element={<RequestNewQuote />} />
            <Route path="quotes/:id" element={<QuoteDetails />} />
            <Route path="quotes/:id/message" element={<MessageProvider />} />
            <Route path="reviews" element={<ClientReviews />} />
            <Route path="finance" element={<FinancialSummary />} />
            <Route path="search-history" element={<SearchHistory />} />
            <Route path="settings" element={<ClientSettings />} />
            <Route path="providers/find" element={<FindProviders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
