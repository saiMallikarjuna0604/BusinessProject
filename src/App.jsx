import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, CircularProgress, Box } from "@mui/material";
import ErrorBoundary from "./Containers/ErrorBoundary/ErrorBoundary";
import Navbar from "./Components/Navbar";

// Lazy-loaded components
const Home = lazy(() => import("./Components/Home/index"));
const Profile = lazy(() => import("./Components/Profile/index"));
const MarketPlace = lazy(() => import("./Components/Marketing/index"));
const ChatPage = lazy(() => import("./Components/ChatPage"));
const LeadGeneration = lazy(() =>
  import("./Components/Home/Components/LeadGeneration")
);

const App = () => {
  return (
    <ErrorBoundary>
      <CssBaseline />
      <Router>
        <Navbar />
        <Suspense
          fallback={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/marketing" element={<MarketPlace />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route
              path="/leads"
              element={<LeadGeneration fixedHeader={true} />}
            />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
