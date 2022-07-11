import {PlusCircle} from 'phosphor-react'
import styles from './NewTask.module.css';
import {useState} from 'react';
import {TaskList} from './TaskList';
import board from '../assets/Clipboard.svg'


export function NewTask() {
   const [task, setTask] = useState([])
   const [newTaskText, setNewTaskText] = useState('')
   const [taskTotal, setTaskTotal] = useState(0)
   const [tasksCompleted, setTasksCompleted] = useState(0);

    function handleCreateNewTask() {
        event.preventDefault();

        setTask([...task, newTaskText]);
        setNewTaskText('');
        
    }

    function handleNewTaskChange(){
        setNewTaskText(event.target.value);
    }

    function deleteTask(taskToDelete) {
        const TaskWithDeleteTask = task.filter(task =>{
            return task !== taskToDelete
        })
        setTask(TaskWithDeleteTask);
    }

    function CompletedTask() {
        setTasksCompleted(tasksCompleted + 1)
    }


    return (
        <>
            <form onSubmit={handleCreateNewTask} className={styles.newTask}>

            <textarea
                name='TaskBar'
                placeholder="Adicione uma nova tarefa"
                onChange={handleNewTaskChange}
                value={newTaskText}
                autofocus={true}
                required
                maxlength={70}
                
            />

            <button type="submit" onClick={() => setTaskTotal(taskTotal + 1)}>
                Criar
                <PlusCircle size={20} />
                
            </button>
        </form>

        <div className={styles.dashboard}>
        
        <div className={styles.info}>
            <p className={styles.TaskCreate}>
                Tarefas Criadas {taskTotal}
            </p>
           {/*  <p className={styles.TaskFinally}>
                Concluidas {CompletedTask}
            </p> */}
       </div> 



      <div className={styles.TaskList}>
          { task.length > 0 && 
           task.map(task => {
            return (
                <TaskList 
                content={task} 
                onDeleteTask={deleteTask} 
            />
            ) 
           })
        }
        {  task.length === 0 &&
        <div className={styles.TaskEmpty}>
            <img src={board} alt="clipBoard" />
            <h2>Você ainda não tem tarefas cadastrada</h2>
            <p>Crie Tarefas e Organize seus itens a fazer</p>
         </div>
        }
       
        </div>
    </div>

   
    </>
    );
}   