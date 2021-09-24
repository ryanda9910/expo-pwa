import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CameraLayout from '../pages/cameralayout';
import exampleapp from '../pages/examplelayout';
import FlexboxLayout from '../pages/flexboxlayout';
import gradientapp from '../pages/gradientlayout';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={exampleapp} />
      <Stack.Screen name="GradientLayout" component={gradientapp} />
      <Stack.Screen name="CameraLayout" component={CameraLayout} />
      <Stack.Screen name="FlexboxLayout" component={FlexboxLayout} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}