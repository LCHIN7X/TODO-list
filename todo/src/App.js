import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todo list</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type="text" placeholder="What is your task?"/>
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type="text" placeholder="Task description."/>
          </div>
          <div className='todo-input-item'>
            <button type='button' className='primaryBtn'>Add</button>
          </div>
        </div>
        <div className='btn-area'>
          <button>ToDO</button>
          <button>Completed</button>
        </div>

      </div>
    </div>
  );
}

export default App;
