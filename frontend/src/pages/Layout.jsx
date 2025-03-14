import { Layout } from "antd";
import { Outlet } from "react-router-dom";


import Navbar from "../components/Navbar";

const { Content } = Layout;

function MainLayout(){
    return (
        <Layout>
          <Navbar />
          <Content style={{ padding: "20px", minHeight: "100vh" }}>
            <Outlet />
          </Content>
        </Layout>
      );
}

export default MainLayout