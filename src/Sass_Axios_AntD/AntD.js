// npm i antd, and npm i @ant-design/icons --save => similar to bootstrap, ready to use components and icons

import "./antd.scss";
import { Button, FloatButton, Table, Tag, Tabs } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  SearchOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import FloatButtonGroup from "antd/es/float-button/FloatButtonGroup";
import Column from "antd/es/table/Column";

const data = [
  {
    key: "1",
    name: "umesh",
    email: "umesh@gmail.com",
    friends: ["vamsi", "dinesh", "manoj"],
  },
  {
    key: "2",
    name: "deepak",
    email: "deapak@gmail.com",
    friends: ["harsha", "umesh"],
  },
  {
    key: "3",
    name: "harsha",
    email: "harsha@gmail.com",
    friends: ["pallavai", "umesh", "raja"],
  },
  {
    key: "4",
    name: "deepak",
    email: "deapak@gmail.com",
    friends: ["harsha", "umesh"],
  },
  {
    key: "5",
    name: "harsha",
    email: "harsha@gmail.com",
    friends: ["pallavai", "umesh", "raja"],
  },
];

export function Antd() {
  return (
    <div className="antd-section">
      <h1>AntD components and Buttons</h1>
      <Button
        type="primary"
        onClick={() => alert("Searching...")}
        className="search-btn"
        icon={<SearchOutlined />}
        iconPosition="end" // position of search icon
        // loading // for loading icon in the btn
      >
        Search
      </Button>
      <FloatButtonGroup>
        <FloatButton type="primary" icon={<SearchOutlined />}></FloatButton>
        <FloatButton icon={<InstagramOutlined />}></FloatButton>
        <FloatButton
          icon={<NotificationOutlined />}
          badge={{ color: "red", count: 5 }}
        ></FloatButton>
        <FloatButton
          icon={<FacebookOutlined />}
          style={{ backgroundColor: "red", border: "1px solid red" }}
        ></FloatButton>
      </FloatButtonGroup>

      <Table dataSource={data} pagination={{ pageSize: 2 }}>
        <Column title="User Name" dataIndex="name" key="name"></Column>
        <Column title="Email Id" dataIndex="email" key="email"></Column>
        <Column
          title="Friends List"
          dataIndex="friends"
          key="friends  "
          render={(friends) => {
            return friends.map((friend) => (
              <Tag color="blue" key={friend}>
                {friend}
              </Tag>
            ));
          }}
        ></Column>
      </Table>

      <Tabs
        tabPosition="left"
        items={[
          {
            label: "Tab 1",
            key: "1",
            children: <b>First Tab</b>,
            icon: <SearchOutlined />,
          },
          {
            label: "Tab 2",
            key: "2",
            children: "Tab 2",
            icon: <InstagramOutlined />,
          },
          {
            label: "Tab 3",
            key: "3",
            children: <p>Hello 3 Tab</p>,
            disabled: true,
          },
        ]}
      />
    </div>
  );
}
