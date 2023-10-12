import { Button, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const BlogList = ({ blogs, isLoading, error }) => {
  const [datasource, setDatasource] = useState(blogs);

  const categoryColors = {
    Art: "magenta",
    Science: "blue",
    Technology: "purple",
    Health: "cyan",
    Travel: "gold",
    Nature: "green",
    Literature: "volcano"
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "1",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "2",
    },
    {
      title: "Is Published",
      dataIndex: "isPublished",
      key: "3",
      render: (isPublished) =>
        isPublished ? <CheckOutlined /> : <CloseOutlined />,
    },
    {
      title: "Created on",
      dataIndex: "publishDate",
      key: "4",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "5",
      render: (category) => (
        <Tag color={categoryColors[category] || "geekblue"}>{category}</Tag>
      ),
    },
  ];

  useEffect(() => {
    setDatasource(blogs);
  }, [blogs]);

  return (
    <div className="blog">
      {isLoading && <p>Loading ...</p>}
      {error && JSON.stringify(error)}
      <Table
        dataSource={datasource}
        columns={columns}
        rowKey="id"
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
        }}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
};

export default BlogList;
