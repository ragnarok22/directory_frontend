import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../../../layouts/dashboard";
import { FilterBar } from "../../filter/search";
import { Loading } from "../../loading";
import { ErrorComponent } from "../../error-page";

export const Department = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/departments`);
        setDepartments(data);
        console.log(data);
      } catch (error) {
        console.error(error);
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
      const { data } = await axios.get(`/departments?name=${value}`);
      setDepartments(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <DashboardLayout selected='departments'>
        <div>
          <FilterBar className="mt-5 mb-5" onChange={handleChange} />
        </div>
        {loading && <Loading />}
      </DashboardLayout>
    );
  } else if (error) {
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
    <DashboardLayout selected='departments'>
      <div>
        <FilterBar className="mt-5 mb-5" onChange={handleChange} />
      </div>
      <ul>
        {departments &&
          departments.map((department, i) => (
            <li key={i}>
              <Link to={`/dashboard/departments/${department.id}`}>{department.name}</Link>
            </li>
          ))}
      </ul>
    </DashboardLayout>
  );
};
