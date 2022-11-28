import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // getting data from the server

    fetchingData();
  }, []);

  // fetching data
  const fetchingData = async () => {
    try {
      const res = await fetch(
        "https://aluminum-delicate-snowshoe.glitch.me/tasks"
      );
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10">
      <Header />
      <AddTask />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
};

export default App;
