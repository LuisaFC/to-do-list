import { Trash } from "phosphor-react";
import styles from './Item.module.css'
import { ChangeEvent } from "react";

interface ItemProps {
    content: string;
    onDeleteItem: (content: string) => void;
    itemIsDone: (done: boolean) => void;
}
export function Item({content, onDeleteItem, itemIsDone}: ItemProps) {

    function handleDeleteItem() {
        onDeleteItem(content);
    }

    function handleToggleDone(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            itemIsDone(true);
        } else {
            itemIsDone(false);
        }
    }


    return(
        <div className={styles.container}>
            <input type="checkbox" onChange={handleToggleDone} />
            <span>{content}</span>
            <button onClick={handleDeleteItem}>
                <Trash size={20} />
            </button>
        </div>
    )
}