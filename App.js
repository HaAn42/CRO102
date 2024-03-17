import { View } from "react-native";
import { SafeAreaView } from 'react-native'
import Students from "./src/compoments/students";
import Header from "./src/compoments/header";
import Bai2 from "./src/screnn/lab1/bai2";
import Bai3Lab1 from "./src/screnn/lab1/bai3";
import DemoLab3 from "./src/screnn/lab3/Demo";
import Main from "./src/screnn/lab3/Main";
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Main></Main>
    </SafeAreaView>
  );
}

export default App; 