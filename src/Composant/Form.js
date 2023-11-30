import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export const Form = (props) => {

    return(
        <div className="input-group mb-3 bg-light rounded-5">
            <input type="text" className="form-control" value={props.value} onChange={props.onChange} placeholder={props.name} />
            <button type="submit" className="input-group-text rounded-5 bg-secondary px-4 btn text-light">{props.nom}</button>
        </div>
    )
}

