import axios from "axios";
import { useState } from "react";
import { React, useEffect } from "react";
import { Loading } from "../../loading";
import { DashboardLayout } from "../../../layouts/dashboard";
import { useParams } from "react-router-dom";

export const AreaDetail = () => {
  const { id } = useParams();
  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/areas/${id}`);
        setArea(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout>
        <Loading />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {area && (
        <div>
          <h1 className="text-center text-2xl mt-5 mb-4">Area: {area.name}</h1>

          <h2 className="text-center text-xl">Departamentos</h2>
          <ul></ul>
        </div>
      )}
    </DashboardLayout>
  );
};
