import { useEffect, useState } from "react";
import { useLongPress } from "src/hooks/useLongPress";
import {TodoItem as TodoItemType } from "src/store/types/todoTypes";
import useTodo from "src/viewModel/useTodo";

interface TodoItemProps{
    todoItem:TodoItemType;
    todoItemIndex: number;
}

const TodoItem = ({todoItem, todoItemIndex}:TodoItemProps) => {
    console.log(todoItem);
    
    const {title,registerDate}=todoItem;
    const [text,setText] = useState(title);
    const [disabled,setDisabled] = useState<boolean>(true);
    const { removeTodo,updateTodo  } = useTodo();

    useEffect(()=>setText(todoItem.title),[todoItem])

    const longPressRef = useLongPress(() => {
        setDisabled(false);
    })

    const handleRemove = () => {
        removeTodo(todoItemIndex);
    }
    
    const handleUpdate = () => {
        updateTodo({index:todoItemIndex,title:text});
    }


    return (
        <div className="bg-green-200 flex" ref={longPressRef}>
              <input disabled={disabled} value={text} onChange={({target: {value}}) => {setText(value);}}/>
              {registerDate.toISOString()}
              {disabled 
                ? <div className="ml-2 bg-black text-white p-1.5" onClick={handleRemove}>삭제</div>
                : <div className="ml-2 bg-black text-white p-1.5" onClick={handleUpdate}>수정</div>}
            </div>
    )


}

export default TodoItem;