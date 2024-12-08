import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
export default function DashboardLayout({ children }) {
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}
