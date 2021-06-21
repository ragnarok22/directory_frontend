import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../layouts/dashboard";
import { FilterBar } from "../../filter/search";
import { Loading } from "../../loading";

export const Area = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/areas`);
        setAreas(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    try {
      setLoading(true);
      const { data } = await axios.get(`/areas?name=${value}`);
      setAreas(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div>
          <FilterBar className="mt-5 mb-5" onChange={handleChange} />
        </div>
        {loading && <Loading />}
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
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
