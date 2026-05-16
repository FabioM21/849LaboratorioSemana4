import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
};

export default function CustomButton({ title, onPress, variant = 'primary' }: Props) {
  const styles = getStyles(variant);
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const getStyles = (variant: 'primary' | 'secondary' | 'danger') =>
  StyleSheet.create({
    button: {
      borderRadius: 8,
      padding: 14,
      marginVertical: 8,
      alignItems: 'center',
     backgroundColor:
  variant === 'primary' ? '#1a1a1a' :
  variant === 'secondary' ? '#444444' : '#8b0000',
    },
    text: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  });
