export const TodoItem = (props) => {

    return(
        <li className="list-group-item d-flex justify-content-between
         align-items-center mb-3 rounded-5 bg-secondary  p-1 ">
            <span className="px-3 text-light" > {props.children}</span>
            <span className="bg-light rounded-3 px-1">
                <img src={props.iconeSup} alt='' className='' onClick={props.onClick}/>
            </span>
        </li>
    )
}