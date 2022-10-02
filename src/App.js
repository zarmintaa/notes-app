import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import { useMemo } from "react";
import { LocaleProvider } from "./context/LocaleContext";
import { useDarkMode } from "./hooks/useDarkMode";
import { useLocale } from "./hooks/useLocale";
import Register from "./pages/Register";
import { useAuth } from "./hooks/useAuth";

function App() {
  const [authUser, onLoginSuccess, onLogout] = useAuth();
  const [locale, toggleLocale] = useLocale();
  const [theme, toggleTheme] = useDarkMode();

  const localeContextValue = useMemo(() => {
    return {
      authUser,
      locale,
      toggleLocale,
      theme,
      toggleTheme,
      onLogout,
    };
  }, [locale, theme, authUser, onLogout, toggleLocale, toggleTheme]);

  if (authUser !== null) {
    return (
      <LocaleProvider value={localeContextValue}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes/new" element={<Create />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/note/:id" element={<Detail />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </LocaleProvider>
    );
  }

  return (
    <LocaleProvider value={localeContextValue}>
      <Layout>
        <Routes>
          <Route
            path="/*"
            element={<Login onLoginSuccess={onLoginSuccess} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </LocaleProvider>
  );
}

export default App;
