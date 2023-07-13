import { Layout } from "antd";
import MenuSideBar from "./SideBar";

export type NavLinkItem = {
  label: string;
  key: string;
  icon?: React.ReactNode;
  children?: NavLinkItem[];
  position?: number;
  rule: string | -1;
};
const { Sider, Content, Header } = Layout;

const siderStyle: React.CSSProperties = {
  color: "red",
  backgroundColor: "#ffffff",
};

const contentStyle: React.CSSProperties = {
  color: "#333",
  backgroundColor: "#e9effb",
  margin: 30,
};

export default function MainLayout() {
  return (
    <Layout style={{ display: "flex" }}>
      <Sider style={siderStyle}>
        <MenuSideBar />
      </Sider>
      <Layout>
        <Header style={siderStyle}></Header>
        <Content style={contentStyle}>gfdg </Content>
      </Layout>
    </Layout>
  );
}
