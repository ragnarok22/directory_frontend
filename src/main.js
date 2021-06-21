import axios from "axios";
import { useState } from "react";
import { FilterBar } from "./components/filter/search";
import { ResultFilter } from "./components/filter/table";
import { FilterLayout } from "./layouts/filter";

const Main = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length >= 3) {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`/departments?name=${value}`);
        console.log(data);
        setResults(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
  };
  return (
    <FilterLayout>
      <FilterBar onChange={handleChange} />
      <ResultFilter isLoading={isLoading} results={results} />
    </FilterLayout>
  );
};

export default Main;
