import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Header from "../Header";
import TypeCard from '../TypeCard'
import { getCategories } from '../../store/actions/categoriesAction';
function ManageTypes({
    getCategoriesAction , 
    categories
}) {
    const [addCateg , setAdd] = useState([])
    const onFinish = () =>{
        console.log('ok');
    }
    const addCategory = () => {
        setAdd([...addCateg , {title: '' , attrs: [] , titleField: ''}])
    }
    useEffect(() => {
        getCategoriesAction()
    } , [])
    useEffect(() => {
        setAdd([...categories])
        console.log(categories);

    } , [categories])
    console.log(addCateg);
    return(
        <div>
            <Header/>
            <div className="section main-inner">
                <Form  onFinish={onFinish} autoComplete="off">
                    { addCateg.map(({ title , attrs , titleField} , i) => (
                        <TypeCard key={`typecard-${i}`} categTitle={title} categAttrs={attrs} categTitleField={titleField} index={i}/>
                    ))} 
                    <Form.Item>
                        <Button type="dashed" onClick={addCategory} block icon={<PlusOutlined />}>
                            Add field
                        </Button>
                    </Form.Item> 
                </Form>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    getCategoriesAction: bindActionCreators(getCategories , dispatch),
})
const mapStateToProps = state => ({
    categories: state.categoriesReducers.categories,
})
export default connect(mapStateToProps , mapDispatchToProps)(ManageTypes)