import { ChangeEvent, FormEvent } from 'react';
import styles from './CreateItem.module.css';
import { PlusCircle } from 'phosphor-react';

interface ItemProps {
    content: string;
    onChangeItem: (event: ChangeEvent<HTMLInputElement>) => void;
    onCreateItem: (event: FormEvent) => void;
}

export const CreateItem = ({onChangeItem, onCreateItem, content}: ItemProps) => {
   

    return(
        <form onSubmit={onCreateItem} className={styles.container}>
            <input className={styles.inputContainer} type="text" required value={content} onChange={onChangeItem} />
            <div className={styles.buttonContainer}>
                <button type='submit' >Criar</button>
                <PlusCircle size={20}/>
            </div>
          
        </form>
    )
}