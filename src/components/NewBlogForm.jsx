import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Row,
  Col,
} from "antd";
import useFetch from "../hooks/useFetch";
import axios from "axios";

const NewBlog = () => {
  const { TextArea } = Input;
  const { data, isLoading, postData } = useFetch();

  const categories = [
    { value: "art", label: "Art" },
    { value: "science", label: "Science" },
    { value: "technology", label: "Technology" },
    { value: "health", label: "Health" },
    { value: "travel", label: "Travel" },
    { value: "nature", label: "Nature" },
    { value: "literature", label: "Literature" },
  ];

  // const handleSubmit = (values) => {
  //   console.log("Values from form",values);
  //   postData('http://localhost:3000/blogs',{...values})
  // }

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:3000/blogs", values);
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleError = (error) => {
    console.log("Errors from form", error);
  };

  return (
    <Form
      name="new_blog"
      // labelCol={{ span: 4 }} // for the labels
      // wrapperCol={{ span: 20, offset: 1, }} // for the inputs
      onFinish={handleSubmit}
      onFinishFailed={handleError}
      autoComplete="off"
      layout="vertical"
    >
      <Row gutter={[8,10]}>
        <Col lg={{span:12,order:1}} sm={{span:24,order:2}} xs={{span: 24, order: 2}}>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter the blog title",
              },
            ]}
          >
            <Input placeholder="Enter the title" />
          </Form.Item>
        </Col>
        <Col lg={{span:12,order:2}} sm={{span:24,order:1}} xs={{span: 24, order: 1}}>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter the blog description",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: "Please enter the blog content",
          },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Row gutter={[8,15]}>
        <Col lg={{span:12,order:1}}>
          <Form.Item
            label="Author"
            name="author"
            rules={[
              {
                required: true,
                message: "Please enter the blog author",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col lg={{span:12,order:2}}>
          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please enter the blog category",
              },
            ]}
          >
            <Select placeholder="Category" options={categories} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Publish Date"
        name="publish_date"
        rules={[
          {
            required: true,
            message: "Please enter the blog publish date",
          },
        ]}
      >
        <DatePicker className="date" />
      </Form.Item>

      <Form.Item
          label="Published"
          name="isPublished"
          rules={[
            {
              required: true,
              message: "Please pick one",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="true"> Yes </Radio>
            <Radio value="false"> No </Radio>
          </Radio.Group>
        </Form.Item>

      <Form.Item>
        <Button block htmlType="submit">Add Blog</Button>
      </Form.Item>
    </Form>
  );
};

export default NewBlog;
