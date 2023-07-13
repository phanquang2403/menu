import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

export type NavLinkItem = {
  label: string;
  key: string;
  icon?: React.ReactNode;
  children?: NavLinkItem[];
  position?: number;
  rule: string | -1;
};

// type MenuItem = Required<MenuProps>["items"][number];
// type MenuCus = { rule: string | -1 } & MenuItem;

// export function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   rule: string,
//   icon?: React.ReactNode,
//   children?: MenuCus[],
//   type?: "group"
// ): MenuCus {
//   return {
//     key,
//     icon,
//     rule,
//     children,
//     label,
//     type,
//   } as MenuCus;
// }

export default function MenuSideBar() {
  const listItem: NavLinkItem[] = [
    {
      label: "Navigation one",
      key: "menu1",
      icon: <MailOutlined />,
      rule: "RULE_1",
      children: [
        {
          label: "options 1",
          key: "options11",
          rule: "RULE_1_1",
        },
        {
          label: "options 2",
          key: "options12",
          rule: "RULE_1_2",
        },
      ],
    },
    {
      label: "Navigation two",
      key: "menu2",
      icon: <AppstoreOutlined />,
      rule: "RULE_2",
      children: [
        {
          label: "options optionsoptionsoptions 1",
          key: "options21",
          rule: "RULE_2_1",
        },
        {
          label: "options 2",
          key: "options22",
          rule: "RULE_2_2",
        },
      ],
    },
    {
      label: "Navigation three",
      key: "menu3",
      icon: <SettingOutlined />,
      rule: "RULE_3",
    },
  ];

  return (
    <div>
      <Menu mode="inline" style={{ height: "100vh" }} items={listItem} />
    </div>
  );
}
