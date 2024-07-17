import {  useState } from "react";
import Dropdown from "src/components/common/Dropdown";
import TodoItem from "src/components/todo/todoItem";
import useTodo from "src/viewModel/useTodo";

export default function Todo() {
  const { todo, addTodo } = useTodo();
  const {todoList,recentTodoList,todoHistory}=todo

  const [text,setText] = useState("");

  const [dropdownOpen,setDropdownOpen] = useState(false);

  const handleSubmit = (value:string) => {
    setText("");
    addTodo(value);
  }

  return (
    <div className="bg-pink-400 w-full h-full flex flex-row justify-center items-center">
      <div className="w-[500px] h-[600px] border-gray-900 border-[1px] border-solid flex-col bg-red-800">

        <div className="w-full" >
          ◕ ‿‿ ◕
        </div>

        <div className="relative">
          <div className="w-full flex flex-row" >
            <input 
              onKeyPress={
                (e)=>{
                  if(e.code==='Enter'){
                    handleSubmit(text)
                  }
                }
              }
                
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              value={text} 
              onChange={({target:{value}}) => setText(value)} 
              placeholder="할일을 입력하세요"
            />
            <div onClick={()=>handleSubmit(text)}>
              등록
            </div>
          </div>

          <Dropdown isOpen={dropdownOpen}>
            {recentTodoList.map(({title},index) =>(<div key={index} >{title}</div>))}
          </Dropdown>

        </div>
      

        <div className="w-full flex flex-col gap-2 h-full overflow-hidden" >
          투두
          {
            todoList.map((todoItem,index) =><TodoItem key={`${index}${todoItem.registerDate}`} todoItemIndex={index} todoItem={todoItem}/> )
          }
        </div>

        <div className="border-4 border-black"  />

        <div className="w-full flex flex-col" >
          최근
          {
            recentTodoList.map(({title},index) => <div key={index} >
              {title}
            </div>)
          }
        </div>

        <div className="border-4 border-black"  />

        <div className="w-full flex flex-col" >
          히스토리
          {
            todoHistory.map(({title,status},index) => <div key={index} >
              {title}
              {status}
            </div>)
          }
        </div>
      </div>
      
    </div>
  );
}


