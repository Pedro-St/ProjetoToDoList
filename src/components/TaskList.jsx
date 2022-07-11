import styles from './TaskList.module.css'
import {Trash} from 'phosphor-react'
import {useState} from 'react';

export function TaskList( { content, onDeleteTask, CompletedTask } ) {

function handleDeleteTask() {
    console.log('deletar')
    onDeleteTask(content);
  }

  function handleCountCompleted() {
    console.log('Completa')
    CompletedTask()
  }


  return ( 
    <>  
    <header className={styles.buttonDelete}> 
       <button onClick={handleDeleteTask}  title="Deletar Comentário">
            <Trash size={22} />
        </button>
    </header>

        <div className={styles.borderTask}>
        <input className={styles.input} onClick={handleCountCompleted} type="checkbox" id='checkBox' /> 
        <label for='checkBox'>{content}</label>

       </div>
     
      </>
    );
}

