import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Form, Input, InputNumber, Row, Space } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SchoolForm = () => {
  const  navigate  = useNavigate()

  const handleSubmit = async (values) => {
    console.log(values);
    try{
      const response = await axios.post('http://localhost:3000/schools',values)
      console.log(response.data);
      navigate("/viewschools")
    }catch(error){
      console.log(error.response.statusText);
    }
  };

  //   const initialValues = {
  //     school_name: "Julie",
  //     address:"opop",
  //     students: [
  //         {},
  //         {
  //             full_name : "George Jungle",
  //             age:90,
  //             admission_no:"9090"
  //         }
  //     ]

  //   }

  return (
    <>
      <Card title="Fill in the form below" className="schoolCard">
        <Form onFinish={handleSubmit} layout="vertical">
          <Row gutter={10}>
            <Col
              lg={{ span: 8 }}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 8 }}
              xl={{ span: 8 }}
              xxl={{ span: 8 }}
            >
              <Form.Item
                name="school_name"
                label="School Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter the school name",
                  },
                ]}
              >
                <Input placeholder="School Name" />
              </Form.Item>
            </Col>
            <Col
              lg={{ span: 8 }}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 8 }}
              xl={{ span: 8 }}
              xxl={{ span: 8 }}
            >
              <Form.Item
                name="location"
                label="Location"
                rules={[
                  {
                    required: true,
                    message: "Please enter the location",
                  },
                ]}
              >
                <Input placeholder="Location" />
              </Form.Item>
            </Col>
            <Col
              lg={{ span: 8 }}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 8 }}
              xl={{ span: 8 }}
              xxl={{ span: 8 }}
            >
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: "Please enter the address",
                  },
                ]}
              >
                <Input placeholder="Address" />
              </Form.Item>
            </Col>
          </Row>

          <Card
            className="studentsCard"
            style={{ backgroundColor: "#f3f3f3", alignContent: "center" }}
          >
            <Form.List name={"students"}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => {
                    return (
                      <Row gutter={10} justify="center" key={field.key}>
                        <Col
                          xxl={{ span: 8 }}
                          xl={{ span: 8 }}
                          lg={{ span: 8 }}
                          md={{ span: 8 }}
                          sm={{ span: 24 }}
                          xs={{ span: 24 }}
                        >
                          <Form.Item
                            name={[field.name, "full_name"]}
                            label="Full Name"
                            rules={[
                              {
                                required: true,
                                message: "Please enter the student name",
                              },
                            ]}
                          >
                            <Input placeholder="Full Name" />
                          </Form.Item>
                        </Col>

                        <Col
                          xxl={{ span: 8 }}
                          xl={{ span: 8 }}
                          lg={{ span: 8 }}
                          md={{ span: 8 }}
                          sm={{ span: 24 }}
                          xs={{ span: 24 }}
                        >
                          <Form.Item
                            key={field.key}
                            name={[field.name, "admission_no"]}
                            label="Admission Number"
                            rules={[
                              {
                                required: true,
                                message: "Please enter the admission number",
                              },
                            ]}
                          >
                            <Input placeholder="Admission Number" />
                          </Form.Item>
                        </Col>

                        <Col
                          xxl={{ span: 5 }}
                          xl={{ span: 5 }}
                          lg={{ span: 5 }}
                          md={{ span: 5 }}
                          sm={{ span: 22 }}
                          xs={{ span: 22 }}
                        >
                          <Form.Item
                            key={field.key}
                            name={[field.name, "age"]}
                            label="Age"
                            rules={[
                              {
                                required: true,
                                message: "Please enter the student age",
                              },
                            ]}
                          >
                            <InputNumber placeholder="Age" min={3} max={100} 
                            style={{ width: "100% " }} />
                          </Form.Item>
                        </Col>
                        <Col
                          lg={{ span: 1 }}
                          xs={{ span: 1 }}
                          sm={{ span: 1 }}
                          md={{ span: 1 }}
                          xl={{ span: 1 }}
                          xxl={{ span: 1 }}
                        >
                          <MinusCircleOutlined
                            style={{ marginTop: 40 }}
                            onClick={() => remove(field.name)}
                          />
                        </Col>
                        <Divider></Divider>
                      </Row>
                    );
                  })}
                  <Form.Item>
                    <Button
                      icon={<PlusOutlined />}
                      type="dashed"
                      onClick={() => add()}
                    >
                      Add Student
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Card>
          <Button
            htmlType="submit"
            type="primary"
            style={{
              marginTop: 10,
              float: "right",
              backgroundColor: "#AEC3AE",
              width: 150,
            }}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default SchoolForm;
