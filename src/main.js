import { FilterBar } from "./components/filter/filter-bar";
import { ResultFilter } from "./components/filter/results";
import { FilterLayout } from "./layouts/filter";

const Main = () => {
  return (
    <FilterLayout>
      <FilterBar />
      <ResultFilter />
    </FilterLayout>
  );
};

export default Main;
