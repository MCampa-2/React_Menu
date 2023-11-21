function MenuItem({item}){
    
    return(
        <>
        <div style={{textAlign: "center"}}>
            <h2>{item.title}</h2>
            <h4>{item.category}</h4>
            <p>{item.price}</p>
            <img style={{width: "200px", height: "200px"}} src={item.img} alt={item.title} />
            <p>{item.desc}</p>
        </div>
        </>
    )
}

export default MenuItem;