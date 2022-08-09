//https://jsonplaceholder.typicode.com/users

import "./styles.css";
import { useState, useEffect } from "react";
import Table from "./Table";
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  };

  return (
    <div className="App">
      <Table tableData={data} />
    </div>
  );
}
