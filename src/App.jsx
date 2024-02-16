import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [showfinished, setshowfinished] = useState(true);
  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if (todostring) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      settodos(todos);
    }
  }, []);

  const savetolocal = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const togglefinished = (e) => {
    setshowfinished(!showfinished);
  };

  const handleedit = (e, id) => {
    let a = todos.filter((i) => i.id === id);
    settodo(a[0].todo);
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodos);
    savetolocal();
  };
  const handledel = (e, id) => {
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newtodos);
    savetolocal();
  };

  const handleadd = () => {
    settodos([...todos, { id: uuidv4(), todo, iscomp: false }]);
    settodo("");
    savetolocal();
  };

  const handlechange = (e) => {
    settodo(e.target.value);
  };
  const handlecheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newtodos = [...todos];
    newtodos[index].iscomp = !newtodos[index].iscomp;
    settodos(newtodos);
    savetolocal();
  };

  return (
    <>
      <Navbar />
      <div className=" mx-auto sm:max-md:w-[95%] md:max-xl:w-[85%] xl:w-[80%] bg-blue-200 rounded-xl my-5 p-5 h-fit">
        <h1 className="font-bold text-center text-2xl ">
          Task Tracker-Track Your Todo Tasks At One Place
        </h1>
        <div className="addtodo ">
          <h2 className="text-lg mt-3 mb-1 font-semibold">Add a Todo</h2>
          <div className="addflex gap-2 flex">
            <input
              onChange={handlechange}
              placeholder="Enter Your Task"
              value={todo}
              type="text"
              className="w-11/12 px-2 py-1 rounded-xl outline-blue-700 outline-4"
            />
            <button
              onClick={handleadd}
              disabled={todo.length < 1}
              className="btn rounded-xl disabled:bg-blue-500"
            >
              Add
            </button>
          </div>
        </div>
        <div className="show font-medium text-lg my-3 space-x-2">
          <input
            id="show"
            onChange={togglefinished}
            type="checkbox"
            className="w-4 h-4"
            checked={showfinished}
          />
          <label htmlFor="show">Show Finished</label>
        </div>
        <div className="h-[1px] bg-black opacity-30 w-11/12 my-3 mx-auto"></div>
        <h2 className="text-xl font-semibold my-4">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="flex justify-center">No Todos to display</div>
          )}
          {todos.map((item) => {
            return (
              (showfinished || !item.iscomp) && (
                <div
                  key={item.id}
                  className="todo flex w-full justify-between my-3 gap-3"
                >
                  <input
                    name={item.id}
                    onChange={handlecheck}
                    type="checkbox"
                    checked={item.iscomp}
                  />
                  <div
                    className={
                      item.iscomp ? "line-through" : "font-serif w-10/12"
                    }
                  >
                    {item.todo}
                  </div>
                  <div className="buttons flex justify-center items-center h-full gap-3">
                    <button
                      onClick={(e) => handleedit(e, item.id)}
                      className="btn "
                    >
                      <FaEdit size={15} />
                    </button>
                    <button
                      onClick={(e) => {
                        handledel(e, item.id);
                      }}
                      className="btn"
                    >
                      <MdDelete size={15} />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
