import { Link } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";
import React, { useState, useEffect } from "react";

import axios from "axios";

function ListCategories() {
  const [categories, setCategories] = useState([]);

  async function fetchData() {
    const reponse = await axios
      .get("https://cors-anywhere.herokuapp.com/api.smarkets.com/v3/events")
      .catch(error => {
        console.log("Error returning reponse:", error);
      });

    setCategories(reponse.data.events);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout.Sider>
      <Menu mode="inline" theme="dark">
        {categories.map((category, i) => (
          <Menu.Item key={i}>
            <Link to={category.full_slug}>
              <Icon type="calendar" />
              <span>{category.name}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
}

export default ListCategories;
