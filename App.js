import { ScrollView } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import styles from './style/style';


export default function App() {

  return (
      <ScrollView style={styles.container}>
        <Header />
        <Form />
      </ScrollView>
  );
}

