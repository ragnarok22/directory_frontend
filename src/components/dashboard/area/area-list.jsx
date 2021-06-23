import axios from "axios";
import { React, useState, useEffect } from "react";
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

  if (loading) {
    return (
      <DashboardLayout selected='areas'>
        <div>
          <FilterBar className="mt-5 mb-5" onChange={handleChange} />
        </div>
        {loading && <Loading />}
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout selected='areas'>
        <div>
          <FilterBar className="mt-5 mb-5" onChange={handleChange} />
        </div>
        {error && <ErrorComponent />}
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout selected='areas'>
      <div>
        <FilterBar className="mt-5 mb-5" onChange={handleChange} />
      </div>
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
