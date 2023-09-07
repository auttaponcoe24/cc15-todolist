// import './List.scss';
import ListItem from './ListItem';

/*
props = {
    data : Array<{
        id: number,
        text: string,
        icon: <Components />,
        active: true,
    }>
}
*/
function Lists(props) {
  return (
    <>
        <ul className='list'>
            {props.data.map((item, index) => (
                <ListItem key={index} text={item.text} icon={item.icon} active={item.active} />
            ))}
        </ul>
    </>
  )
}

export default Lists;
