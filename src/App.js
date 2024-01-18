import logo from './logo.svg';
import './App.css';
import MyButton from "./components/Buttons/buttons";
import Carousel from "./components/carousel/carousel";
import Navigation_menu from "./components/Navigation/navigation_menu";


function App() {
  return (
      <div style={{
        backgroundColor: 'grey',
        color: 'white',
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <header style={{backgroundColor: 'black', padding: '10px'}}>
          <h1 style={{fontSize: '24px', fontWeight: 'bold'}}>
            How to train your tůdler to tůdl your car horn
          </h1>
        </header>
        <main style={{flex: 1, padding: '20px', color: 'black'}}>

          <MyButton>čoko</MyButton>
          <p>
            Tůdl, tůdl, tůdyly tůd
          </p>

          <p>
            Mě už to extrémě nebaví, každou sekundu trpím a chci si lehnout do postele a chrnět. Budu se učit věci co nikdy nevyužiji a jen mě budů plést. JINAK MILUJU ŽIVOT
          </p>
        </main>



   <Carousel/>
<Navigation_menu/>
          <section lox>sekce 2</section>
          <footer style={{backgroundColor: 'black', padding: '10px'}}>
              © 2023 Lavender Studios
          </footer>
      </div>

  );


}
export default App;
