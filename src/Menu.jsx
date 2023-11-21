import MenuItem from "./MenuItem";

function Menu({items}){
    
    return(
        <>
        {items.map((item) =>{
            return <MenuItem key={item.id} item={item}/>
        })}
        </>
    )
}

export default Menu;