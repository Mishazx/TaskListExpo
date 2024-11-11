import { createRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedTextInput } from "./ThemedTextInput";
import { ThemedView } from "./ThemedView";
import { ThemedButton } from "./ThemedButton";

type AddTaskFormProps = {
  name: string;
  description: string;
  onChangeName: (text: string) => void;
  onChangeDescription: (text: string) => void;
  onSubmit: () => void;
};

const AddTaskForm = ({ name, description, onChangeName, onChangeDescription, onSubmit }: AddTaskFormProps) => {
  const descriptionInputRef = createRef<TextInput>();

  const handleNameSubmit = () => {
    console.log("handleNameSubmit called");
    if (descriptionInputRef.current) {
      console.log("descriptionInputRef is not null");
      descriptionInputRef.current.focus();
    } else {
      console.log("descriptionInputRef is null");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.column}>
        <View style={styles.row}>
          <ThemedText style={styles.text}>Name:</ThemedText>
          <ThemedTextInput
            style={styles.input}
            value={name}
            onChangeText={onChangeName}
            returnKeyType="next"
            onSubmitEditing={handleNameSubmit}
          />
        </View>
        <View style={styles.row}>
          <ThemedText style={styles.text}>Descr:</ThemedText>
          <ThemedTextInput
            ref={descriptionInputRef}
            style={styles.input}
            value={description}
            onChangeText={onChangeDescription}
          />
        </View>
      </View>
      <ThemedButton text="Add" onPress={onSubmit} style={styles.button} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  column: {
    width: "60%",
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  input: {
    width: "100%",
  },
  button: {
    backgroundColor: "blue",
  },
});

export default AddTaskForm;

