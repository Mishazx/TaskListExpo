import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TaskItem } from './TaskItem';
import { ThemedView } from './ThemedView';
import { TaskType } from '@/types/Task';


export default function TaskList({
  tasks,
  onDelete,
}: {
  tasks: TaskType[];
  onDelete: (id: number) => void;
}) {
  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} onDelete={onDelete} />}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
