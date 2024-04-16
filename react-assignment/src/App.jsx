import Customer from './components/Customer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <h1 className='text-2xl font-bold text-center'>This here the heading</h1>
    <div className="flex">
      <div className=" w-1/3">
        <Customer />
      </div>
      <div className="w-2/3">
        <Outlet />
      </div>
    </div>
    </>
  );
}

export default App;
