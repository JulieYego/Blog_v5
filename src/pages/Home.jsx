import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Steps, theme } from "antd";
import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";
import Login from "../components/LoginForm";
import AddBlog from "./AddBlog";
import NewBlog from "../components/NewBlogForm";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/blogs");
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const previous = () => {
    setCurrent(current - 1);
  };

  const buttonStyle = {
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-around",
  }

  const steps = [
    {
      title: "Page 1",
      description: (
        <>
          <Card style={{ width: 1400 }}>
            <BlogList blogs={blogs} isLoading={isLoading} error={error} />
              <Button onClick={() => setCurrent(1)}>Next</Button>
          </Card>
        </>
      ),
    },
    {
      title: "Page 2",
      description: (
        <>
        <div className="create">
          <Card style={{ width: 1000 }}>
              <NewBlog />
                <div style={buttonStyle}>
                  <Button style={buttonStyle} onClick={() => setCurrent(0)}>Previous</Button>
                  <Button style={buttonStyle} onClick={() => setCurrent(2)}>Next</Button>
                </div>  
          </Card>
        </div>
          
        </>
      ),
    },
    {
      title: "Page 3",
      description: (
        <>
          <p>Page 3</p>
          <div >
            <Button onClick={() => setCurrent(1)}>Previous</Button>
            <Button onClick={() => setCurrent(2)}>Done</Button>
          </div>
          
        </>
      ),
    },
  ];

  return (
    <>
      <Steps
        current={current}
        direction="vertical"
        items={steps.map((item, index) => ({
          key: item.title,
          title: item.title,
          description: current === index ? item.description : null,
        }))}
      />

      {/* {current > 0 && <Button onClick={() => previous()}>Previous</Button>}

      {current < steps.length - 1 && (
        <Button onClick={() => next()}>Next</Button>
      )}

      {current === steps.length - 1 && <Button>Done</Button>} */}
    </>
  );
};

export default Home;
