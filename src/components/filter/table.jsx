import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { unique } from "../../utils";
import { Loading } from "../loading";
import { ListItem } from "./list-item";

export const ResultFilter = ({ results, isLoading }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const values = results.filter(unique);
    let temp = [];
    for (const value of values) {
      temp.push({
        area: value.areaId,
        departments: results.filter((item) => item.areaId === value.areaId),
      });
    }
    setData(temp);
  }, [results]);

  if (isLoading) {
    return <Loading />;
  }
  if (data?.length > 0) {
    return data.map((result, i) => (
      <div key={i}>
        <p>{result.area}</p>
        <ListItem items={result.departments} />
      </div>
    ));
  }

  return <></>;
};
