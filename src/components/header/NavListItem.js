import { ListItem } from "../../styles/NavListItemStyle"

function NavListItem(props){
    return(
        <ListItem> {props.texto} </ListItem>
    )
}

export default NavListItem