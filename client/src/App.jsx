import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
