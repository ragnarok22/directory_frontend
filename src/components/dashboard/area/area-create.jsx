import axios from "axios";
import { useState } from "react";
import { React } from "react";
import { useHistory } from "react-router-dom";
import { DashboardLayout } from "../../../layouts/dashboard";

export const AreaCreate = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/areas", { name });
      history.push("/dashboard/areas");
    } catch (error) {
      console.error(error);
      console.log(error.response);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <DashboardLayout selected="areas">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del Area"
          onChange={handleChange}
        />
        <button type="submit">{loading ? "loading" : "Agregar"}</button>
      </form>
    </DashboardLayout>
  );
};
