import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect} from 'react';

export const Form = ({addNewTask, isedting, editNameTask, updatedTask, nom}) => {

    //State
    const [todo, setTodo] = useState("");
    const [lastId, setLastId] = useState(0);

    useEffect(() => {
        if (editNameTask) {
            setTodo(editNameTask.value);
        }
    }, [editNameTask]);
    
    //comportements
    const modification = (e) => {
        setTodo(e.target.value);
    }

    const validation = (event) => {

        event.preventDefault();

        if (todo.trim() === '') {
            return;
        }
        if (isedting) {
            updatedTask({...editNameTask, value: todo})
        }else{
            const newTask = {
                id: lastId + 1,
                value: todo
            }
            addNewTask(newTask)
        }
        setTodo("");
       
        setLastId(lastId + 1);

     }
 
    return(
        <form onSubmit={validation}>
            <div className="input-group mb-3 bg-light rounded-5">
                <input type="text" className="form-control"
                 value={todo} onChange={modification} placeholder="add task" />
                <button type="submit" className="input-group-text rounded-5 bg-secondary px-4 btn text-light">
                   {nom}
                </button>
            </div>
        </form>
    )
}

