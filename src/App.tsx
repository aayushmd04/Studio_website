import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import MusicPage from "./pages/MusicPage";
import MusicDetailPage from "./pages/MusicDetailPage";
import MerchPage from "./pages/MerchPage";
import MerchDetailPage from "./pages/MerchDetailPage";
import VideosPage from "./pages/VideosPage";
import VideoDetailPage from "./pages/VideoDetailPage";
import TourPage from "./pages/TourPage";
import InfoPage from "./pages/InfoPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/music/:slug" element={<MusicDetailPage />} />
            <Route path="/merch" element={<MerchPage />} />
            <Route path="/merch/:slug" element={<MerchDetailPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/videos/:slug" element={<VideoDetailPage />} />
            <Route path="/tour" element={<TourPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
