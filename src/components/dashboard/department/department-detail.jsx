import axios from "axios";
import { useState } from "react";
import { React, useEffect } from "react";
import { Loading } from "../../loading";
import { DashboardLayout } from "../../../layouts/dashboard";
import { Link, useParams } from "react-router-dom";

export const DepartmentDetail = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/departments/${id}`);
        setDepartment(data);
        console.log(data);
      } catch (error) {
        if (error.response.status) {
          // not found
        } else {
          console.error(error);
        }
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout selected="departments">
        <Loading />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout selected="departments">
      {department && (
        <div>
          <h1 className="text-center text-2xl mt-5 mb-4">
            Departamento: {department.name}
          </h1>

          <h2 className="text-center text-xl">Teléfonos</h2>
          <Link to="/dashboard/phones/create">Agregar telefono</Link>
          <ul>
            {department.phones.map((phone) => (
              <li key={phone.id}>
                <a href={`tel:${phone.number}`}>{phone.number}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </DashboardLayout>
  );
};
