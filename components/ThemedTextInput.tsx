import { useThemeColor } from "@/hooks/useThemeColor";
import { TextInput, TextInputProps, StyleSheet, useColorScheme } from "react-native";
import React, { forwardRef } from "react";

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

export const ThemedTextInput = forwardRef<TextInput, ThemedTextInputProps>(
  ({ style, lightColor, darkColor, onChangeText, value, placeholder, ...rest }, ref) => {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const theme = useColorScheme() ?? 'light';

    const inputStyles = StyleSheet.create({
      default: {
        fontSize: 16,
        lineHeight: 24,
        padding: 10,
        margin: 12,
        borderWidth: 1,
        borderColor: theme === 'dark' ? '#555' : '#ccc',
        borderRadius: 5,
        color: theme === 'dark' ? '#fff' : color,
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
      },
    });

    return (
      <TextInput
        style={[inputStyles.default, style]}
        placeholderTextColor={theme === 'dark' ? '#ccc' : '#666'}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        ref={ref}
        {...rest}
      />
    );
  }
);

