import "./App.css";

import Router from "./routes/sections";

import AuthProvider from "./auth/context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
