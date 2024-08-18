import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <NavigationMenu/>
        <div className="content">
          {/*Your main content will go here */}
          <h2>Welcome to Illuminant!</h2>
          <p>This is where your main content will appear.</p>
        </div>
        <Footer />
    </div>
  );
}

export default App;
