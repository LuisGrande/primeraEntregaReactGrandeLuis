const ItemListContainer = (props) => {
    return(
        <ul>
            <li><a>{props.opcion1}</a></li>
            <li><a>{props.opcion2}</a></li>
            <li><a>{props.opcion3}</a></li>
            <li><a>{props.opcion4}</a></li>
            
        </ul>
    )
}


export default ItemListContainer;