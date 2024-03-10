import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/products/search/${searchQuery}`);
    }
  };

  return (
    <div
      className={`
          dark:dark:border-white
          flex items-center w-full border-black border-solid border-[1px] rounded-2xl`}
    >
      <input
        type="text"
        placeholder={`Найти в pCost`}
        className={`md:flex w-full h-10 rounded-tl-2xl rounded-bl-2xl pl-8 dark:bg-gray-900`}
        onChange={handleSearch}
      />
      <button
        type="submit"
        className={`inline-flex h-10 items-center text-white bg-blue-500 rounded-tr-2xl rounded-br-2xl px-4 hover:brightness-110 transition`}
        onClick={handleSubmit}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
