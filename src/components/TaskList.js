import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-900 container mx-auto p-10">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
