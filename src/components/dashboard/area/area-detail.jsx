import axios from "axios";
import { useState } from "react";
import { React, useEffect } from "react";
import { Loading } from "../../loading";
import { DashboardLayout } from "../../../layouts/dashboard";
import { Link, useParams } from "react-router-dom";

export const AreaDetail = () => {
  const { id } = useParams();
  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/areas/${id}`);
        setArea(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout selected="areas">
        <Loading />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout selected="areas">
      {area && (
        <div>
          <h1 className="text-center text-2xl mt-5 mb-4">Area: {area.name}</h1>

          <h2 className="text-center text-xl">Departamentos</h2>
          <ul>
            {area.departments.map((department) => (
              <li key={department.id}>
                <Link to={`/dashboard/departments/${department.id}`}>
                  {department.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </DashboardLayout>
  );
};
