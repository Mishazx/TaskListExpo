import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { ThemedButton } from './ThemedButton';
import { TaskType } from '@/types/Task';

export const TaskItem = ({ task, onDelete }: { task: TaskType; onDelete: (id: number) => void }) => (
  <ThemedView style={styles.container}>
    <View style={styles.statusIndicatorContainer}>
      <View style={[styles.statusIndicator, { backgroundColor: task.completed ? 'green' : 'red' }]} />
    </View>
    <View style={styles.textContainer}>
      <ThemedText style={[styles.title, task.completed && styles.completedTask]}>{task.name}</ThemedText>
      <ThemedText>{task.description}</ThemedText>
    </View>
    <ThemedButton style={styles.deleteButton} onPress={() => onDelete(task.id)} text={'X'} />
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  statusIndicatorContainer: {
    position: 'absolute',
    bottom: 40,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    margin: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 30,
  },
  title: {
    fontSize: 24,
  },
  completedTask: {
    fontSize: 24,
  },
  deleteButton: {
    width: 50,
    right: 10, 
    backgroundColor: 'red'
  },
});



