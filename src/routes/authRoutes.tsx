
import { RouteObject } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import Register from "@/pages/Register";
import RegisterVisitor from "@/pages/RegisterVisitor";
import RegisterProvider from "@/pages/RegisterProvider";
import VisitorQuestionnaire from "@/pages/VisitorQuestionnaire";
import ProviderOnboarding from "@/pages/ProviderOnboarding";

export const authRoutes: RouteObject[] = [
  { path: "/signin", element: <SignIn /> },
  { path: "/register", element: <Register /> },
  { path: "/register/visitor", element: <RegisterVisitor /> },
  { path: "/register/provider", element: <RegisterProvider /> },
  { path: "/register/visitor/questionnaire", element: <VisitorQuestionnaire /> },
  { path: "/register/provider/onboarding", element: <ProviderOnboarding /> }
];
