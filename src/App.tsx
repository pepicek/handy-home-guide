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

// New signin page
import SignIn from "./pages/SignIn";

// New registration pages
import Register from "./pages/Register";
import RegisterVisitor from "./pages/RegisterVisitor";
import RegisterProvider from "./pages/RegisterProvider";
import VisitorQuestionnaire from "./pages/VisitorQuestionnaire";
import ProviderOnboarding from "./pages/ProviderOnboarding";

// Dashboard pages
import { 
  DashboardLayout,
  Dashboard,
  Services,
  Appointments,
  SpecialOffers,
  Settings
} from "./pages/dashboard";

// New dashboard pages
import Clients from "./pages/dashboard/Clients";
import Messages from "./pages/dashboard/Messages";
import Analytics from "./pages/dashboard/Analytics";
import Earnings from "./pages/dashboard/Earnings";
import ProSubscription from "./pages/dashboard/ProSubscription";

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
          <Route path="*" element={<NotFound />} />
          
          <Route path="/search/services" element={<ServiceSearch />} />
          <Route path="/search/projects" element={<ProjectSearch />} />
          <Route path="/search/market" element={<MarketResearch />} />
          <Route path="/categories" element={<AllCategories />} />
          
          {/* Signin route */}
          <Route path="/signin" element={<SignIn />} />
          
          {/* Registration routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/register/visitor" element={<RegisterVisitor />} />
          <Route path="/register/provider" element={<RegisterProvider />} />
          <Route path="/register/visitor/questionnaire" element={<VisitorQuestionnaire />} />
          <Route path="/register/provider/onboarding" element={<ProviderOnboarding />} />
          
          {/* Dashboard routes */}
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
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
