import { Form, Input } from "antd";

const SchoolForm = () => {
    return ( 
        <Form>
            <Form.Item name="school_name" label="School Name">
                <Input placeholder="School Name"/> 
            </Form.Item>

            <Form.Item name="location" label="Location">
                <Input placeholder="Location"/> 
            </Form.Item>

            <Form.Item name="address" label="Address">
                <Input placeholder="Address"/> 
            </Form.Item>

            <Form.List>
                {(fields, Operations) => (
                    <>
                        {fields.map((field,index) => {
                            return <Form.Item name={[field.name,"full_name"]} label={`Student ${index + 1}`}>
                            <Input placeholder="School Name"/> 
                        </Form.Item>
                        })}
                    </>
                )}
            </Form.List>
        </Form>
     );
}
 
export default SchoolForm;