import { ClipboardText } from "phosphor-react";
import styles from "./List.module.css";
import { Item } from "../Item/Item";
import { CreateItem } from "../CreateItem/CreateItem";
import { ChangeEvent, FormEvent, useState } from "react";


export function List() {
    const [itens, setItens] = useState<string[]>([]);

    const [newItem, setNewItem] = useState('');

    const [isDone, setIsDone] = useState(0);


    function handleChangeItem(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewItem(event.target.value);
    }

    function handleOnCreateItem(event: FormEvent) {
        event?.preventDefault();
        setItens([...itens, newItem]);
        setNewItem('');
    }

    function deleteItem(contentToDelete: string) {
      const newContentWithoutDeletedOne = itens.filter(content => {
          return content !== contentToDelete;
      });

      setItens(newContentWithoutDeletedOne);
    }

    function doneItem(done: boolean) {
      if(done === true) {
        setIsDone(isDone + 1)
      }

      if(done === false) {
        setIsDone(isDone - 1)
      }
    } 

  return (
    <>
      <CreateItem onChangeItem={handleChangeItem} onCreateItem={handleOnCreateItem} content={newItem}/>
      <div className={styles.container}>
        <header className={styles.headerContainer}>
          <div>
            <span id={styles.task} className={styles.headerItemTitle}>
              Tarefas Criadas
            </span>
            <span>{itens.length}</span>
          </div>
          <div>
            <span id={styles.done} className={styles.headerItemTitle}>
              Concluídas
            </span>
            {itens.length > 0 ? 
              ( <span>{isDone} de {itens.length > 0 ? itens.length : 0}</span>)
            :
              ( <span>0</span>)
            }
          </div>
        </header>
        <main className={styles.mainContainer}>
          {itens.length > 0 ? (
            itens.map(item => {
                return <Item key={item} content={item} onDeleteItem={deleteItem} itemIsDone={doneItem}/>
            })
          ) : (
            <>
              <ClipboardText size={60} />
              <span className={styles.emptyMain}>Você ainda não tem tarefas cadastradas</span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </>
          )}
        </main>
      </div>
    </>
  );
}
