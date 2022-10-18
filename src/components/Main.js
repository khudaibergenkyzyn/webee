import Header from "./Header";
import ItemCard from "./ItemCard";
function Main(){
    return(
        <div className="main">
            <Header/>
            <div className="section">
                <ItemCard/>
            </div>
        </div>
    )
}
export default Main;