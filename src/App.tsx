import { useDebounce } from 'hooks/useDebounce';
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('123');
  const debouncedVal = useDebounce(value, 2000);
  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {debouncedVal}
    </div>
  );
}

export default App;
