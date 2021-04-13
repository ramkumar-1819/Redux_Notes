import './App.css';
import Form from './Components/Form';       //Form componet for displaying the Notes form
import Display from './Components/Display'; //Display Component for displaying the FormNotes in underneath of form.

function App() {
    return(
      <>
      <h1 className="heading">PROGRAD NOTES</h1>
      <Form/>
      <hr></hr>
      <Display/>
      </>
    )
}

export default App;
