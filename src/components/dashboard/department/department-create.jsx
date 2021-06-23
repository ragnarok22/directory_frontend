import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { React } from "react";
import { useHistory } from "react-router-dom";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { DashboardLayout } from "../../../layouts/dashboard";

export const DepartmentCreate = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [areaId, setAreaId] = useState(null);
  const [campus, setCampus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/departments", {
        areaId,
        name,
        campus,
      });
      history.push(`/dashboard/departments/${data.id}`);
    } catch (error) {
      console.error(error);
      console.log(error.response);
    }
    setLoading(false);
  };

  const getAreas = async (inputValue) => {
    try {
      const { data } = await axios.get(`/areas?name=${inputValue}`);
      if (data) {
        return data.map((area) => {
          return { value: area.id, label: area.name };
        });
      }
      return null;
    } catch (error) {
      console.error(error);
    }
  };

  const handleArea = ({ value }) => {
    setAreaId(value);
  };

  const handleCampus = ({ value }) => {
    setCampus(value);
  };

  const campusOptions = [
    {
      value: "CSM",
      label: "Celia Sánchez",
    },
    {
      value: "OLM",
      label: "Oscar Lucero",
    },
    {
      value: "JLC",
      label: "José de la Luz",
    },
    {
      value: "MF",
      label: "Manuel Fajardo",
    },
  ];

  return (
    <DashboardLayout selected="departments">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del Departamento"
          onChange={(e) => setName(e.target.value)}
        />
        <Select options={campusOptions} onChange={handleCampus} />
        <AsyncSelect
          cacheOptions
          defaultOptions
          loadOptions={getAreas}
          onChange={handleArea}
        />
        <button type="submit">{loading ? "loading" : "Agregar"}</button>
      </form>
    </DashboardLayout>
  );
};
