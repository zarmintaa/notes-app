import PropTypes from "prop-types";
import LocaleContext from "../../context/LocaleContext";
import { useContext } from "react";

const SearchInput = ({ onSearch }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <form className="w-full mt-5 mx-5 lg:mx-0">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        {`${locale === "id" ? "Cari" : "Search"}...`}
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm  text-gray-900  bg-gray-50 rounded-lg border border-slate-300 "
          placeholder={`${
            locale === "id" ? "Cari Catatan" : "Search Notes"
          } ...`}
          onChange={onSearch}
          required
        />
      </div>
    </form>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
