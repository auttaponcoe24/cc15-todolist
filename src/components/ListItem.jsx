import './ListItem.scss'

/*
props = {
    text : string
    icon : <Component />
    active: boolean
}
*/

function ListItem (props) {
    // console.log(props)
    const listClassName = `list__item ${props.active ? 'active' : ''}`
    return (
        <>
            <li className={listClassName}>
                {props.icon}
                {/* <p className={`list__item ${props.active ? 'active' : ''}`}>{props.text}</p> */}
                <p className='list__item__text'>{props.text}</p>
            </li>
        </>
    )
}

// CSS + JS Value == Dynamics ClassName
export default ListItem;