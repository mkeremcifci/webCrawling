import { useState } from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, AppstoreOutlined, UserOutlined, LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();

  const handleClick = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[current]}
        onClick={handleClick}
        style={{ display: "flex" }}
      >
        <Menu.Item key="" icon={<HomeOutlined />}>Ana Sayfa</Menu.Item>
        <Menu.Item key="about" icon={<AppstoreOutlined />}>Hakkında</Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>Profil</Menu.Item>
        <Menu.Item key="login" icon={<LoginOutlined />}>Giriş Yap</Menu.Item>
        <Menu.Item key="register" icon={<UserAddOutlined />}>Kayıt Ol</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
