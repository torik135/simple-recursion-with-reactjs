import './App.css';
import { Folder } from './components';
import { folderData } from './data';

function App() {
  return (
    <div className='App'>
      <Folder data={folderData} />
    </div>
  );
}

export default App;
