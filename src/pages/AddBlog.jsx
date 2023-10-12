import { Card } from "antd";
import NewBlog from "../components/NewBlogForm";

const AddBlog = () => {
  return (
    <div className="create">
      {/* <h2>New Blog</h2> */}
      <Card
        title="New Blog"
        bordered={false}
        className="card"
        // style={{
        //   width: 300,
        // }}
      >
        <NewBlog />
      </Card>
    </div>
  );
};

export default AddBlog;
