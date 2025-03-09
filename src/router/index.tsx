import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Team from "../pages/Team";
import Contacts from "../pages/Contacts";
import Invoices from "../pages/Invoices";
import ProfileForm from "../pages/ProfileForm";
import Calendar from "../pages/Calendar";
import FAQ from "../pages/FAQ";
import BarChart from "../pages/BarChart";
import PieChart from "../pages/PieChart";
import LineChart from "../pages/LineChart";
import GeographyChart from "../pages/GeographyChart";
import DashboardHome from "../pages/DashboardHome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="team" element={<Team />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="form" element={<ProfileForm />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="/bar" element={<BarChart />} />
        <Route path="/pie" element={<PieChart />} />
        <Route path="/line" element={<LineChart />} />
        <Route path="/geography" element={<GeographyChart />} />
      </Route>
    </>
  )
);
export default router;
