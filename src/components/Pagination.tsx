interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <div className="mt-20 flex justify-center gap-2">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="rounded border border-green-600 bg-green-600 px-4 py-2 text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-green-700 disabled:cursor-not-allowed disabled:border-gray-700 disabled:bg-white disabled:text-gray-700"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={`rounded border px-4 py-2 transition-all duration-300 ease-in-out hover:cursor-pointer ${currentPage === index + 1 ? "border-green-600 bg-green-600 text-white" : "hover:border-green-600 hover:bg-green-600 hover:text-white"}`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="disabled: rounded border border-green-600 bg-green-600 px-4 py-2 text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-green-700 disabled:cursor-not-allowed disabled:border-gray-700 disabled:bg-white disabled:text-gray-700"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
