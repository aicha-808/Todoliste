import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Form } from './Form';
import { TodoItem } from './TodoItem';
import supIone from "../image/trash3.svg";
import editIcone from "../image/pencil.svg";

export const Todo = () => {
  
    const [Tasks, setAddTasks] = useState([]);
    const [editNameTask, setEditNameTask] = useState(null)
    const [isedting, setIsEditing] = useState(false)

  //Gestions des actions
  const addNewTask = (newTask) => {
    setAddTasks(prev => [...prev, newTask])
    
     //Sauvegarder dans le stockage local
    const updatedTasks = [...Tasks, newTask];
    
     localStorage.setItem('item', JSON.stringify(updatedTasks))
  }

  useEffect(() => {
    const items = (localStorage.getItem('item'))

    if (items) {
        setAddTasks(JSON.parse(items))
    }
    }, [])

    const supprimer = (uid) => {
         // Activer le mode édition pour la tâche sélectionnée
        // const taskToEdit = Tasks.find(tache => tache.id === uid);
        // setEditNameTask(taskToEdit);

        // Filtrer les éléments pour exclure celui avec l'ID spécifié
        const supTask = Tasks.filter(tache => tache.id !== uid);

        // Mettre à jour l'état avec la nouvelle liste d'éléments
        setAddTasks(supTask); 
        // Sauvegarder dans le stockage local
  
        localStorage.setItem('item', JSON.stringify(supTask))
    }
    
    const edit = (uid) => {
        const taskToEdit = Tasks.find(tache => tache.id === uid);
        setEditNameTask(taskToEdit);
        setIsEditing(true);
    }

    const updatedTask = (newTask) => {
        const updatedTasks = Tasks.map(tache => (tache.id === newTask.id ? newTask : tache));
        
        setAddTasks(updatedTasks);

        setIsEditing(false); 

        // Sauvegarder dans le stockage local
        localStorage.setItem('item', JSON.stringify(updatedTasks));
       
    }
    
  return (
    <div className="container-fluid p-5 text-light ">
        <div className='row'>
            <h1 className='text-center'>TO-DO NOW</h1>
            <div className='col-sm-6 mx-auto mt-3'>

                <Form addNewTask={addNewTask} editNameTask={editNameTask} isedting={isedting}
                 updatedTask={updatedTask} nom={editNameTask? "Edit Task": " Add Task" }/>
                  
            </div>
            <hr className="border-2 w-75 mx-auto mt-4" />
        </div>    
        <div className='row'>
            <div className='col-sm-6 mx-auto mt-3'>

            <ul className="list-group">

                {Tasks &&
                    Tasks.map((task) => {
                        return (

                            <TodoItem key={task.id} iconeSup={supIone} onClickSupBout={() => supprimer(task.id)} 
                               iconeEdit={editIcone} onClickEditBout={() => edit(task.id)}>
                            {task.value} 
                            </TodoItem>
                        )
                    } )
                }
            </ul>
            </div>
        </div>
    </div>
  )
}
