import { Select , Form, Input  , Button} from 'antd';
import {DeleteOutlined , CloseOutlined , PlusOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {addCategory , editCategory , deleteCategory} from '../store/actions/categoriesAction'
function ItemCard({
    addCategoryAction,
    categories , 
    rooms , 
    errors,
    key, 
    categTitle ,
    categAttrs , 
    categTitleField,
    editCategoryAction,
    index,
    deleteCategoryAction
}) {
    const { Option } = Select;
    const [form] = Form.useForm();
    const [title , setTitle] = useState('')
    const [fileds , setFields] = useState([])
    const [attrs , setAttrs] = useState([])
    const [isShow , setIsShow] = useState(false)
    const [titleField , setTitleField] = useState('')
    const addField = (type) => {
        let filedsList = [...fileds]
        setFields([...filedsList , { type : `${type}`} ])
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const changeAttrTitle =  (event, index , type) => {
        console.log(attrs);
        let attrList = [...attrs]
        let check = false
        if(event.target.value.length > 0){
            for(let i = 0; i < attrList.length; i++){
                if (attrList[i].attrIndex == index) {
                    attrList[i].title = event.target.value;
                    check = true
                }
            }
            if(check){
                setAttrs([...attrList])
            }else{
                setAttrs([...attrList , {title : event.target.value , attrIndex: index , type: type}])
            }
        }else{
            for(let i = 0; i < attrList.length; i++){
                if (attrList[i].attrIndex == index) {
                    attrList.splice(i , 1)
                    setAttrs([...attrList])
                }
            }
        }
        
    }
    const showTypes = () => {
        setIsShow(!isShow)
    }
    const removeAttr = (i) => {
        let filedsList = [...fileds]
        filedsList.splice(i , 1)
        setFields(filedsList)
    }
    const changeTitleField = (event) => {
        console.log(event);
        setTitleField(event)
    }
    const addCategory = () => {
        if(title.length > 0 && titleField.length > 0 && attrs.length > 0){
            addCategoryAction({title , titleField , attrs})
        }
    }
    const editCategory = () => {
        editCategoryAction({title , titleField , attrs , index})
    }
    const deleteCategory = () => {
        deleteCategoryAction({index})
    }
    useEffect(() => {
        setTitle(categTitle)
        setAttrs(categAttrs)
        setTitleField(categTitleField)
        setFields(categAttrs)
    } , [categTitle])

    return(
        <div className="item-card">
            <div className='card-title'>
                <h2>{title}</h2>
                <DeleteOutlined onClick={deleteCategory}/>
            </div>
            <div className='card-info'>
                <Form
                    form={form}
                    layout="vertical"
                >
                    <Form.Item label="Name">
                        <Input placeholder="New category" value={title} onChange={onChangeTitle}/>
                    </Form.Item>
                    <Form.Item
                        label="Title field"
                    >
                        <Select value={titleField} onChange={(event) => changeTitleField(event)}>
                            {attrs ? attrs.map((attr , i) => <Option key={`attr-${i}`} value={attr.title.toLowerCase()}>{attr.title}</Option>) : ''}
                        </Select>
                    </Form.Item>
                    <div className='categ-attr'>
                        {fileds && fileds.length > 0 ? fileds.map((attr , i) => (
                            <Form.Item key={i}
                                rules={[{ required: true}]}
                            >
                                <Input value={attr.title} onBlur={(event) => changeAttrTitle(event , i , attr.type)}
                                    addonAfter={
                                        <Form.Item noStyle>
                                            {attr.type}
                                        </Form.Item>
                                    }
                                    style={{ width: '100%' }} 
                                />
                                <CloseOutlined onClick={() => removeAttr(i)}/>
                            </Form.Item>
                        )): ""}
                        <Form.Item noStyle>
                            <div className='add-attr-btn'>
                                <Button
                                    onClick={showTypes}
                                    style={{ width: '60%' }}
                                    icon={<PlusOutlined />}
                                >
                                    Add field
                                </Button>
                                <div className={`attr-list ${isShow ? 'active' : ''}`}>
                                        <div className='attr-item' onClick={() => addField('date')}>Date</div>
                                        <div className='attr-item' onClick={() => addField('text')}>Text</div>
                                        <div className='attr-item' onClick={() => addField('checkbox')}>Checkbox</div>
                                        <div className='attr-item' onClick={() => addField('number')}>Number</div>
                                </div>
                            </div>
                        </Form.Item>
                    </div>
                    <Form.Item>
                        {categTitle && categTitle.length > 0 ? <Button onClick={editCategory} type="primary">Edit category</Button> : <Button onClick={addCategory} type="primary">Add category</Button>}
                        
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addCategoryAction: bindActionCreators(addCategory , dispatch),
    editCategoryAction: bindActionCreators(editCategory , dispatch),
    deleteCategoryAction: bindActionCreators(deleteCategory , dispatch),
})
const mapStateToProps = state => ({
    categories: state.categoriesReducers.categories,
})
export default connect(mapStateToProps , mapDispatchToProps)(ItemCard)