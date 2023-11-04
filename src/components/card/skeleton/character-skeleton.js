//to be used in grid view
const CharacterSkeleton = () => {
  return (
    <div className=" border border-gray-200 rounded-xl shadow animate-pulse duration-200  dark:border-gray-500">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-200 rounded dark:bg-gray-700"></div>
      <div className="p-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-full mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600"></div>
        <div className="flex items-center mt-4 space-x-3">
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSkeleton;
