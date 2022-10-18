import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import {useParams , useLocation} from 'react-router-dom'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Header from "./Header";
import TypeCard from './TypeCard'
import { getItems } from '../store/actions/itemsActions';
function Filter({
    getItemsAction , 
    items
}) {
    const {title} = useParams()
    const location = useLocation()
    const [addItem, setAddItem] = useState([])
    const onFinish = () =>{
        console.log('ok');
    }
    const addItemFunction = () => {
        setAddItem([...addItem , {title: '' , attrs: [] , titleField: ''}])
    }
    useEffect(() => {
        getItemsAction()
    } , [])
    useEffect(() => {
        setAddItem([...items])
    } , [items])
    console.log(addItem);
    return(
        <div>
            <Header/>
            <div className="section main-inner">
                <Form  onFinish={onFinish} autoComplete="off">
                    {addItem && addItem.length > 0 ?  addItem.map(({ title , attrs , titleField} , i) => (
                        <TypeCard key={`itemcard-${i}`} categTitle={title} categAttrs={attrs} categTitleField={titleField} index={i}/>
                    )) : ""} 
                    <Form.Item>
                        <Button type="dashed" onClick={addItemFunction} block icon={<PlusOutlined />}>
                            Add field
                        </Button>
                    </Form.Item> 
                </Form>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    getItemsAction: bindActionCreators(getItems , dispatch),
})
const mapStateToProps = state => ({
    items: state.itemsReducers.items,
})
export default connect(mapStateToProps , mapDispatchToProps)(Filter)