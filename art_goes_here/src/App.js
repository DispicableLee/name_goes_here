import MainPageFirstScreen from './components/MainPageFirstScreen/MainPageFirstScreen';
import MainPageSecondScreen from './components/MainPageSecondScreen/MainPageSecondScreen';
import MainPageThirdScreen from './components/MainPageThirdScreen/MainPageThirdScreen';
import Contact from './components/Contact/Contact';
import './App.css';

export default function App() {
  return (
    <div id="app">

      <MainPageFirstScreen/>
      <MainPageSecondScreen/>
      <MainPageThirdScreen/>
      <Contact/>
      
    </div>
  );
}

