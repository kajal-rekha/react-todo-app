import { createContext, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
//import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";

export const DeleteHandlerContext = createContext();
export const EditHandlerContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // getting data from the server
    fetchingData();
  }, []);

  // fetching data
  const fetchingData = async () => {
    try {
      const res = await fetch("https://leaf-hulking-circle.glitch.me/tasks");
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  // delete event
  const deleteData = async (id) => {
    await fetch("https://leaf-hulking-circle.glitch.me/tasks", {
      method: "Delete",
      headers: {
        "Content-type": "application/json",
      },
    });
  };
  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
};

export default App;
