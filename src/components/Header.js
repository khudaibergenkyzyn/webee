import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { getCategories } from '../store/actions/categoriesAction';
import { useEffect } from "react";
function Header({categories , getCategoriesAction}){
    useEffect(() => {
        getCategoriesAction()
    } , [])
    console.log(categories);
    return(
        <div className="header">
            <div className="logo">
                <h2>InventorZilla</h2>
            </div>
            <div className="head-menu">
                <Link to="/">All</Link>
                {categories.map(categ => <Link to={"/"+categ.title.toLowerCase()}>{categ.title}</Link>)}
                <Link to="/manage-types">Manage Types</Link>
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
export default connect(mapStateToProps , mapDispatchToProps)(Header)
