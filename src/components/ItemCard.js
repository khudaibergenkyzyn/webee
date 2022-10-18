import { Card } from 'antd';
import { DatePicker, Space } from 'antd';
import {DeleteOutlined} from '@ant-design/icons'
import moment from 'moment';
import { Button, Form, Input } from 'antd';
function ItemCard(){
    const { RangePicker } = DatePicker;
    const [form] = Form.useForm();
    const dateFormat = 'DD/MM/YYYY';
    return(
        <div className="item-card">
            <div className='card-title'>
                <h2>Model 3</h2>
                <DeleteOutlined />
            </div>
            <div className='card-info'>
                <Form
                    form={form}
                    layout="vertical"
                >
                    <Form.Item label="Model">
                        <Input placeholder="input placeholder" value="Model 3"/>
                    </Form.Item>
                    <Form.Item
                        label="Make"
                    >
                        <Input placeholder="input placeholder" value="Tesls"/>
                    </Form.Item>
                    <Form.Item
                        label="Battery Capacity (kWh)"
                    >
                        <Input placeholder="input placeholder" value="502"/>
                    </Form.Item>
                    <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={moment('15/01/2019', dateFormat)} format={dateFormat} />
                    </Space>
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default ItemCard