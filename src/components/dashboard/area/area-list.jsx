import axios from "axios";
import { React, useState, useEffect } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../layouts/dashboard";
import { ErrorComponent } from "../../error-page";
import { FilterBar } from "../../filter/search";
import { Loading } from "../../loading";

export const Area = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/areas`);
        setAreas(data);
        console.log(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    })();
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    try {
      setLoading(true);
      const { data } = await axios.get(`/areas?name=${value}`);
      setAreas(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <DashboardLayout selected="areas">
      <div className="flex mt-3 justify-between">
        <FilterBar className="mt-5 mb-5" onChange={handleChange} />
        <Link
          to="/dashboard/areas/create"
          className="rounded-full  w-1/5 bg-green-300 flex justify-center items-center text-white my-3"
        >
          <MdAddCircleOutline />
        </Link>
      </div>
      {error && <ErrorComponent />}
      {loading && <Loading />}
      <ul>
        {areas &&
          areas.map((area, i) => (
            <li key={i}>
              <Link to={`/dashboard/areas/${area.id}`}>{area.name}</Link>
            </li>
          ))}
      </ul>
    </DashboardLayout>
  );
};
