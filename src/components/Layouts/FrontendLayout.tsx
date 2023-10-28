import { PropsWithChildren } from 'react';
// import App from '../../App';
import HeaderFront from '../Frontends/HeaderFront';
import '../../assets/css/frontend/index.css'

const FrontendLayout = ({ children }: PropsWithChildren) => {
    return (
        // <App>
        //     <div className="text-black dark:text-white-dark min-h-screen">{children} </div>
        // </App>
        <>
            <HeaderFront />
            {children}
        </>
    );
}

export default FrontendLayout
