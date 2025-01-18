import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <ClipLoader color="#6366F1" size={50} />
      <p className="ml-4 text-indigo-600 dark:text-indigo-400 font-medium">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
