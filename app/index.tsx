import { useDispatch, useSelector } from "react-redux";
import AddTaskForm from "@/components/AddTaskForm";
import TaskList from "@/components/TaskList";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { Alert } from "react-native";
import { addTask, removeTask } from "@/store/taskSlice";
import { RootState } from "@/store/store";

export default function Index() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!name || !description) {
      Alert.alert("Ошибка", "Имя и описание не могут быть пустыми.");
      return;
    }

    dispatch(
      addTask({
        name,
        description,
        id: Date.now(),
        completed: true,
      })
    );
    setName("");
    setDescription("");
  };

  const handleDelete = (id: number) => {
    dispatch(removeTask(id));
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <AddTaskForm
        name={name}
        description={description}
        onChangeName={setName}
        onChangeDescription={setDescription}
        onSubmit={handleSubmit}
      />
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </ThemedView>
  );
}

