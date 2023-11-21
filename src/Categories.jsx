function Categories({categories, filter}){
    
    return(
        <>
        <div className="btn-container">
            {categories.map((category) =>{
                return(
                    <button className="btn" type="button" onClick={() => filter(category)} key={category}>{category}</button>
                )
            })}
        </div>
        </>
    )
}

export default Categories;