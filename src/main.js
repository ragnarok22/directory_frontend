import axios from "axios";
import { useState } from "react";
import { FilterBar } from "./components/filter/filter-bar";
import { ResultFilter } from "./components/filter/results";
import { FilterLayout } from "./layouts/filter";

const Main = () => {
  const [results, setResults] = useState([]);

  const handleChange = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length >= 3) {
      try {
        const { data } = await axios.get("/areas");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <FilterLayout>
      <FilterBar onChange={handleChange} />
      <ResultFilter />
    </FilterLayout>
  );
};

export default Main;
