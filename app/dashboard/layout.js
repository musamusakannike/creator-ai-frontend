import Sidebar from "@/components/UI/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
