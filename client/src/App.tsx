import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { apolloClient } from "./lib/apollo-client";
import ExpensesPage from "./pages/ExpensesPage";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <header>
            <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Expense Tracker for Watchtower Test
              </h1>
              <h3 className="text-lg font-thin text-muted-foreground">
                Created by Grant Johnson
              </h3>
            </div>
          </header>
          <main>
            <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<ExpensesPage />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
