import './App.css';
import Greeting from './Greeting.js'
import Notifications from './Notifications';

function App() {
 const notifications = ["You received a package", "The weather is sunny"];
  return (
    <>
      <Greeting language="es"/>
      <Greeting language="fr"/>
      <Greeting />
      <Notifications notifications={notifications} />;
    </>
  );
};

export default App;
