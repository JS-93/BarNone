import MenuItem from "./MenuItem"


const Menu = ({cocktails}) => {
    const cocktailList = cocktails.map((cocktail, index) => (
        <li><MenuItem key={index} cocktail={cocktail}/></li>
    ))
    return <div>
        <ul className="list">
            {cocktailList}
        </ul>
    </div>
}


export default Menu
