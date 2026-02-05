import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PickOfTheWeek from "./pages/PickOfTheWeek";
import ShopByRoom from "./pages/ShopByRoom";
import Certifications from "./pages/Certifications";
import LocalShops from "./pages/LocalShops";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pick-of-the-week" element={<><PickOfTheWeek /><BottomNav /></>} />
          <Route path="/shop-by-room" element={<><ShopByRoom /><BottomNav /></>} />
          <Route path="/certifications" element={<><Certifications /><BottomNav /></>} />
          <Route path="/local-shops" element={<><LocalShops /><BottomNav /></>} />
          <Route path="/favorites" element={<><Favorites /><BottomNav /></>} />
          <Route path="/settings" element={<><Settings /><BottomNav /></>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
