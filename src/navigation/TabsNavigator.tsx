import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './StackNavigator';
import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

const Tab = createBottomTabNavigator<TabsParamList>();

function getIcon(name: string, color: string, size: number) {
  if (name === 'Inicio') return <Ionicons name='home' size={size} color={color} />;
  if (name === 'IMC') return <Ionicons name='fitness' size={size} color={color} />;
  return <Ionicons name='person' size={size} color={color} />;
}

export default function TabsNavigator({ route }: Props) {
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route: r }) => ({
        tabBarIcon: ({ color, size }) => getIcon(r.name, color, size),
        tabBarActiveTintColor: '#5f0650',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
      })}
    >
      <Tab.Screen name='Inicio' component={HomeTab} initialParams={{ email }} />
      <Tab.Screen name='IMC' component={IMCTab} />
      <Tab.Screen name='Perfil' component={ProfileTab} initialParams={{ email }} />
    </Tab.Navigator>
  );
}