import axios from "axios";
import { useState } from "react";
import { React } from "react";
import { useHistory } from "react-router-dom";
import { DashboardLayout } from "../../layouts/dashboard";
import AsyncSelect from "react-select/async";

export const PhoneCreate = () => {
  const history = useHistory();
  const [number, setNumber] = useState();
  const [departmentId, setDepartmentId] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/phones", { number, departmentId });
      console.log(data);
      history.push(`/dashboard/departments/${data.department.id}`);
    } catch (error) {
      console.error(error);
      console.log(error.response);
    }
    setLoading(false);
  };

  const getDepartments = async (inputValue) => {
    try {
      const { data } = await axios.get(`/departments?name=${inputValue}`);
      return data.map((department) => {
        return {
          value: department.id,
          label: department.name,
        };
      });
    } catch (error) {}
  };

  const handleDepartment = ({ value }) => {
    setDepartmentId(value);
  };

  return (
    <DashboardLayout>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Número de telefono"
            onChange={(e) => setNumber(e.target.value)}
          />
          <AsyncSelect
            cacheOptions
            defaultOptions
            loadOptions={getDepartments}
            onChange={handleDepartment}
          />
          <button type="submit">{loading ? "loading" : "Agregar"}</button>
        </form>
      </div>
    </DashboardLayout>
  );
};
