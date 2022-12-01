import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  error,
  loading,
  handleEditSubmitter,
  editedText,
  setEditedText,
}) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-900 container mx-auto p-10">
      {loading ? (
        <p className="text-center">{error ? error : "Loading..."}</p>
      ) : (
        tasks.length === 0 && <p className="text-center">No task to show</p>
      )}

      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          handleEditSubmitter={handleEditSubmitter}
          editedText={editedText}
          setEditedText={setEditedText}
        />
      ))}
    </div>
  );
};

export default TaskList;
