export const TodoItem = (props) => {

    return(
        <li key={props.key} className="list-group-item d-flex justify-content-between
         align-items-center mb-3 rounded-5 bg-secondary  p-1 ">
            <span className="px-3" >{props.value}</span>
            <span className="bg-light rounded-3 px-1" onClick={props.onClick}>
                <img src={props.iconeSup} alt='' className=''/>
            </span>
        </li>
    )
}