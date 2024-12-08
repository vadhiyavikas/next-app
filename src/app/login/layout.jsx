import UnauthenticatedLayout from "../layouts/UnauthenticatedLayout";

export default function LoginLayout({ children }) {
  return <UnauthenticatedLayout>{children}</UnauthenticatedLayout>;
}
