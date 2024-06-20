import MainPageFirstScreen from './components/MainPageFirstScreen/MainPageFirstScreen';
import MainPageSecondScreen from './components/MainPageSecondScreen/MainPageSecondScreen';
import MainPageThirdScreen from './components/MainPageThirdScreen/MainPageThirdScreen';
import './App.css';

export default function App() {
  return (
    <div id="app">

      <MainPageFirstScreen/>
      <MainPageSecondScreen/>
      <MainPageThirdScreen/>

    </div>
  );
}

