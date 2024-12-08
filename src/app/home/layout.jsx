import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

export default ({ children }) => {
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
};
