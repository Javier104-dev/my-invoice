import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  return (
    <>
      <div className="flex flex-col flex-1">
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
};

export default Root;
