import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ThemedView } from './ThemedView';

type Props = {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  style?: any;
};

export function ThemedButton({ onPress, text, disabled, style }: Props) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <ThemedView
        style={[
          styles.button,
          disabled && styles.disabledButton,
          style,
        ]}
      >
        <Text style={{fontSize: 20, color: '#fff'}}>{text}</Text>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
});