import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

const Search = ({ setIsSearchModalOpen, isSearchModalOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    if (isSearchModalOpen) {
      inputRef.current.focus();
    }
  }, [isSearchModalOpen]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/products/search/${searchQuery}`);
      setIsSearchModalOpen(false);
    }
  };

  return (
    <div
      className={`
          flex items-center w-full rounded-2xl shadow-2xl dark:shadow-none`}
    >
      <form className={`flex w-full`} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={`Найти в pCost`}
          ref={inputRef}
          className={`md:flex w-full h-10 rounded-tl-2xl rounded-bl-2xl pl-8 dark:bg-gray-800 focus:outline-none transition`}
          onChange={handleSearch}
        />
        <button
          type="submit"
          className={`inline-flex h-10 items-center text-white bg-blue-500 rounded-tr-2xl rounded-br-2xl px-4 hover:brightness-110 transition`}
          onClick={handleSubmit}
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  setIsSearchModalOpen: PropTypes.func,
  isSearchModalOpen: PropTypes.bool,
};

Search.defaultProps = {
  setIsSearchModalOpen: () => {},
};

export default Search;
