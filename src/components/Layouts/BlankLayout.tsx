import { PropsWithChildren } from 'react';
import App from '../../App';
import HeaderFront from '../Frontends/HeaderFront';
import { Outlet } from 'react-router-dom';
import '../../assets/css/frontend/index.css'

const BlankLayout = ({ children }: PropsWithChildren) => {
    return (
        // <App>
        //     <div className="text-black dark:text-white-dark min-h-screen">{children} </div>
        // </App>
        <>

            {children}
        </>
    );
};

export default BlankLayout;
