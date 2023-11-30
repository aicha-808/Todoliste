import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Form } from './Form';
import { TodoItem } from './TodoItem';
import iconeSup from "../image/trash3.svg";

export const Todo = () => {
  
  const [todo, setTodo] = useState("");
  const [Tasks, setAddTasks] = useState([]);
  const [lastId, setLastId] = useState(0);

  //Gestions des actions
  const modification = (e) => {
      setTodo(e.target.value);
  }

  useEffect(() => {
    const items = (localStorage.getItem('item'))

    if (items) {
        setAddTasks(JSON.parse(items))
    }
    }, [])

  const validation = (event) => {

    event.preventDefault();

    if (todo.trim() === '') {
        return;
      }

    const newTask = {
        id: lastId + 1,
        value: todo
    }

    setAddTasks(prev => [...prev, newTask])
    setTodo("");
    setLastId(lastId + 1);

    // Sauvegarder dans le stockage local
     const updatedTasks = [...Tasks, newTask];
  
    localStorage.setItem('item', JSON.stringify(updatedTasks))
 }

    //Gestion de l'action supprimer
    const supprimer = (uid) => {
        // Filtrer les éléments pour exclure celui avec l'ID spécifié
        const supTask = Tasks.filter(tache => tache.id !== uid);

        // Mettre à jour l'état avec la nouvelle liste d'éléments
        setAddTasks(supTask); 
        // Sauvegarder dans le stockage local
  
    localStorage.setItem('item', JSON.stringify(supTask))
    }

  return (
    <div className="container-fluid p-5 text-light ">
        <div className='row'>
            <h1 className='text-center'>TO-DO NOW</h1>
            <div className='col-sm-6 mx-auto mt-3'>

                <form onSubmit={validation}>

                    <Form value={todo} onChange={modification} name="Add task"  nom='Add task'/>

                </form>
            </div>
            <hr className="border-2 w-75 mx-auto mt-4" />
        </div>    
        <div className='row'>
            <div className='col-sm-6 mx-auto mt-3'>

            <ul className="list-group">

                {Tasks &&
                        Tasks.map((task) => {
                            return (

                                <TodoItem key={task.id}  iconeSup={iconeSup} onClick={() => supprimer(task.id)}>
                                {task.value} 
                                </TodoItem>
                            )
                        } )
                    }
            </ul>
            </div>
        </div>
    </div>
  );
}
