import './App.css';
import { Folder } from './components';
import { folderData } from './data';

function App() {
  return (
    <div className='App'>
      <h1>Simple Recursion with ReactJS</h1>
      <Folder data={folderData} />
    </div>
  );
}

export default App;
