
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BrandIdentity from "./pages/BrandIdentity";
import BusinessCreatives from "./pages/BusinessCreatives";
import PosterDesign from "./pages/PosterDesign";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="brand-identity" element={<BrandIdentity />} />
            <Route path="business-creatives" element={<BusinessCreatives />} />
            <Route path="poster-design" element={<PosterDesign />} />
            <Route path="services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
