import React, { useState } from "react";
import { Button, Form, Input, Table } from "antd";
import useFetch from "../hooks/useFetch";

const SchoolTable = () => {
  const {
    data: schools,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/schools");

  const [editedRow, setEditedRow] = useState(null);

  const expandedRowRender = (record) => {
    const columns = [
      {
        key: "1",
        dataIndex: "full_name",
        title: "Full Name",
      },
      {
        key: "2",
        dataIndex: "admission_no",
        title: "Admission Number",
      },
      {
        key: "3",
        dataIndex: "age",
        title: "Age",
      },
    ];

    return (
      <Table
        rowKey="admission_no"
        columns={columns}
        dataSource={record.students}
        pagination={false}
      />
    );
  };

  const columns = [
    {
      key: "1",
      dataIndex: "school_name",
      title: "School Name",
      render: (text, record) => {
        if (editedRow === record.id) {
          return (
            <Form.Item
              name="school_name"
              rules={[{ required: true, message: "Enter the school_name" }]}
            >
              <Input />
            </Form.Item>
          );
        } else{
            return (
                <p>{text}</p>
            )
        }
      },
    },
    {
      key: "2",
      dataIndex: "location",
      title: "School Location",
      render: (text, record) => {
        if (editedRow === record.id) {
          return (
            <Form.Item
              name="location"
              rules={[{ required: true, message: "Enter the location" }]}
            >
              <Input />
            </Form.Item>
          );
        }else{
            return (
                <p>{text}</p>
            )
        }
      },
    },
    {
      key: "3",
      dataIndex: "address",
      title: "School Address",
      render: (text, record) => {
        if (editedRow === record.id) {
          return (
            <Form.Item
              name="address"
              rules={[{ required: true, message: "Enter the address" }]}
            >
              <Input />
            </Form.Item>
          );
        } else{
            return (
                <p>{text}</p>
            )
        }
      },
    },
    // {
    //   title: "Actions",
    //   render: (_, record) => (
    //     <>
    //       <Button type="link" onClick={() => {setEditedRow(record.id)}}>
    //         Edit
    //       </Button>
    //       <Button type="link">Save</Button>
    //       {console.log(record)}
    //     </>
    //   ),
    // },
  ];

  return (
    <Form>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={schools}
        style={{ width: 1400 }}
        expandable={{
          expandedRowRender,
        }}
      />
    </Form>
  );
};

export default SchoolTable;
