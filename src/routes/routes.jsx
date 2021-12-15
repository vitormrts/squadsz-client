import { Navigate, Route, Routes as Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Company, Employee, Sprint } from '@src/pages';
import { useAuth } from '@src/hooks';

const RedirectRoute = function ({ children }) {
  const { authenticated, loading, isAdmin } = useAuth();
  if (loading) {
    return <div />;
  }

  if (authenticated && isAdmin) {
    return <Navigate to="/empresa" />;
  }

  if (authenticated && !isAdmin) {
    return <Navigate to="/funcionario" />;
  }

  return children;
};

const CompanyRoute = function ({ children }) {
  const { authenticated, loading, isAdmin } = useAuth();
  if (loading) {
    return <div />;
  }

  return authenticated && isAdmin ? children : <Navigate to="/" />;
};

const EmployeeRoute = function ({ children }) {
  const { authenticated, loading, isAdmin } = useAuth();
  if (loading) {
    return <div />;
  }

  return authenticated && !isAdmin ? children : <Navigate to="/" />;
};

const AuthRoute = function ({ children }) {
  const { authenticated, loading } = useAuth();
  if (loading) {
    return <div />;
  }

  return authenticated ? children : <Navigate to="/" />;
};

const Routes = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          element={
            <RedirectRoute>
              <Company.Login />
            </RedirectRoute>
          }
        />
        <Route
          path="/empresa/entrar"
          element={
            <RedirectRoute>
              <Company.Login />
            </RedirectRoute>
          }
        />
        <Route
          path="/funcionario/entrar"
          element={
            <RedirectRoute>
              <Employee.Login />
            </RedirectRoute>
          }
        />
        <Route
          path="/empresa/registrar"
          element={
            <RedirectRoute>
              <Company.Register />
            </RedirectRoute>
          }
        />
        <Route
          path="/empresa"
          element={
            <CompanyRoute>
              <Company.Dashboard />
            </CompanyRoute>
          }
        />
        <Route
          path="/squads"
          element={
            <CompanyRoute>
              <Company.Squads />
            </CompanyRoute>
          }
        />
        <Route
          path="/funcionarios"
          element={
            <CompanyRoute>
              <Company.Employees />
            </CompanyRoute>
          }
        />
        <Route
          path="/projetos"
          element={
            <CompanyRoute>
              <Company.Projects />
            </CompanyRoute>
          }
        />
        <Route
          path="/squads/registrar"
          element={
            <CompanyRoute>
              <Company.SquadRegister />
            </CompanyRoute>
          }
        />
        <Route
          path="/funcionarios/registrar"
          element={
            <CompanyRoute>
              <Company.EmployeeRegister />
            </CompanyRoute>
          }
        />
        <Route
          path="/projetos/registrar"
          element={
            <CompanyRoute>
              <Company.ProjectRegister />
            </CompanyRoute>
          }
        />
        <Route
          path="/squads/:id"
          element={
            <CompanyRoute>
              <Company.SquadUpdate />
            </CompanyRoute>
          }
        />
        <Route
          path="/projetos/:id"
          element={
            <CompanyRoute>
              <Company.ProjectUpdate />
            </CompanyRoute>
          }
        />
        <Route
          path="/funcionarios/:id"
          element={
            <CompanyRoute>
              <Company.EmployeeUpdate />
            </CompanyRoute>
          }
        />
        <Route
          path="/sprints"
          element={
            <CompanyRoute>
              <Sprint.Sprints />
            </CompanyRoute>
          }
        />
        <Route
          path="/sprints/registrar"
          element={
            <CompanyRoute>
              <Sprint.Register />
            </CompanyRoute>
          }
        />
        <Route
          path="/sprints/:id"
          element={
            <AuthRoute>
              <Sprint.ActiveSprint />
            </AuthRoute>
          }
        />
        <Route
          path="/funcionario"
          element={
            <EmployeeRoute>
              <Employee.Dashboard />
            </EmployeeRoute>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
