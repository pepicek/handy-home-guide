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

import HomepageVariation1 from "./pages/HomepageVariation1";
import HomepageVariation2 from "./pages/HomepageVariation2";
import HomepageVariation3 from "./pages/HomepageVariation3";

import HeroVariation1 from "@/components/variations/HeroVariation1";
import HeroVariation2 from "@/components/variations/HeroVariation2";
import HeroVariation3 from "@/components/variations/HeroVariation3";

import ServiceSearch from "./pages/ServiceSearch";
import ProjectSearch from "./pages/ProjectSearch";
import MarketResearch from "./pages/MarketResearch";

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
          <Route path="*" element={<NotFound />} />
          
          <Route path="/search/services" element={<ServiceSearch />} />
          <Route path="/search/projects" element={<ProjectSearch />} />
          <Route path="/search/market" element={<MarketResearch />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
