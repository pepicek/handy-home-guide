import { RouteObject } from "react-router-dom";
import Index from "@/pages/Index";
import IndexAlt1 from "@/pages/IndexAlt1";
import IndexAlt2 from "@/pages/IndexAlt2";
import IndexAlt3 from "@/pages/IndexAlt3";
import Search from "@/pages/Search";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import SpecialOffersPage from "@/pages/SpecialOffers";
import HowItWorksPage from "@/pages/HowItWorks";
import Providers from "@/pages/Providers";
import SpecialOfferDetails from "@/pages/SpecialOfferDetails";
import BookNow from "@/pages/BookNow";
import ViewProfile from "@/pages/ViewProfile";
import CheckSchedule from "@/pages/CheckSchedule";
import RequestQuote from "@/pages/RequestQuote";
import ServiceCategory from "@/pages/ServiceCategory";
import MapView from "@/pages/MapView";
import ServiceSearch from "@/pages/ServiceSearch";
import ProjectSearch from "@/pages/ProjectSearch";
import MarketResearch from "@/pages/MarketResearch";
import AllCategories from "@/pages/AllCategories";
import ProviderRating from "@/pages/ProviderRating";
import Credits from "@/pages/Credits";
import Careers from "@/pages/Careers";
import Press from "@/pages/Press";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Pricing from "@/pages/Pricing";
import Resources from "@/pages/Resources";
import SuccessStories from "@/pages/SuccessStories";
import HelpSupport from "@/pages/HelpSupport";
import SafetyTrust from "@/pages/SafetyTrust";
import Reviews from "@/pages/Reviews";
import ProviderBenefits from "@/pages/ProviderBenefits";
import NewsDetails from "@/pages/NewsDetails";
import ScheduleConsultation from "@/pages/ScheduleConsultation";
import GuidedSearch from "@/pages/GuidedSearch";
import ApplicationSuccess from "@/pages/ApplicationSuccess";

import TermsOfService from "@/pages/legal/TermsOfService";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import CookiePolicy from "@/pages/legal/CookiePolicy";

import HomepageVariation1 from "@/pages/HomepageVariation1";
import HomepageVariation2 from "@/pages/HomepageVariation2";
import HomepageVariation3 from "@/pages/HomepageVariation3";
import BlogPost from "@/pages/BlogPost";
import ConsultationAccepted from "@/pages/ConsultationAccepted";
import JobApplication from "@/pages/JobApplication";

export const publicRoutes: RouteObject[] = [
  { path: "/", element: <Index /> },
  { path: "/alt1", element: <IndexAlt1 /> },
  { path: "/alt2", element: <IndexAlt2 /> },
  { path: "/alt3", element: <IndexAlt3 /> },
  { path: "/home/v1", element: <HomepageVariation1 /> },
  { path: "/home/v2", element: <HomepageVariation2 /> },
  { path: "/home/v3", element: <HomepageVariation3 /> },
  { path: "/search", element: <Search /> },
  { path: "/search/map", element: <MapView /> },
  { path: "/special-offers", element: <SpecialOffersPage /> },
  { path: "/special-offers/:id", element: <SpecialOfferDetails /> },
  { path: "/how-it-works", element: <HowItWorksPage /> },
  { path: "/providers", element: <Providers /> },
  { path: "/about", element: <About /> },
  { path: "/careers", element: <Careers /> },
  { path: "/press", element: <Press /> },
  { path: "/press/news/:id", element: <NewsDetails /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/terms", element: <TermsOfService /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/cookies", element: <CookiePolicy /> },
  { path: "/book-now/:id", element: <BookNow /> },
  { path: "/profile/:id", element: <ViewProfile /> },
  { path: "/schedule/:id", element: <CheckSchedule /> },
  { path: "/request-quote/:id", element: <RequestQuote /> },
  { path: "/category/:category", element: <ServiceCategory /> },
  { path: "/provider/:id/ratings", element: <ProviderRating /> },
  { path: "/credits", element: <Credits /> },
  { path: "/search/services", element: <ServiceSearch /> },
  { path: "/search/projects", element: <ProjectSearch /> },
  { path: "/search/market", element: <MarketResearch /> },
  { path: "/categories", element: <AllCategories /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/resources", element: <Resources /> },
  { path: "/success-stories", element: <SuccessStories /> },
  { path: "/help-support", element: <HelpSupport /> },
  { path: "/safety", element: <SafetyTrust /> },
  { path: "/reviews", element: <Reviews /> },
  { path: "/providers/benefits", element: <ProviderBenefits /> },
  { path: "/providers/schedule-consultation", element: <ScheduleConsultation /> },
  { path: "*", element: <NotFound /> },
  { path: "/blog/:id", element: <BlogPost /> },
  { path: "/consultation/success", element: <ConsultationAccepted /> },
  { path: "/careers/apply/:id", element: <JobApplication /> },
  { path: "/guided-search", element: <GuidedSearch /> },
  { path: "/application-success", element: <ApplicationSuccess /> },
];
