import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Form } from './Form';
import { TodoListe } from './TodoListe';
import { TodoItem } from './TodoItem';
import iconeSup from "../image/trash3.svg";

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const [Tasks, setAddTasks] = useState([]);

  const modification = (e) => {
      setTodo(e.target.value);
  }

  const validation = (e) => {
      e.preventDefault()
      if (e.target.value !== "") {
        const newTask = {
            id: Math.floor(Math.random() * 10),
            value: todo
         }
        setAddTasks(prev => [...prev, newTask])
      }else{
        alert('veuillez saisir une tache')
      }
      setTodo('');
  }
  const supprimer = (id) => {

       // Filtrer les éléments pour exclure celui avec l'ID spécifié
      const supTask = Tasks.filter(tache => tache.id !== id);

      // Mettre à jour l'état avec la nouvelle liste d'éléments
          setAddTasks(supTask); 
  }
  return (
    <div className="container-fluid p-5 text-light ">
        <Form titre='TO-DO NOW' nom='Add task' onSubmit={validation} value={todo} onChange={modification} />
        <div className='row'>
            <div className='col-sm-6 mx-auto mt-3'>
                {Tasks &&
                    Tasks.map(task => {
                        return (<>
                                <TodoListe />
                                <TodoItem  key={task.id} value={task.value} onClick={supprimer} iconeSup={iconeSup} />
                            </>
                        )
                    } )
                }
            </div>
        </div>
    </div>
  );
}
