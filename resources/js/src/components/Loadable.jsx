import { Suspense, useEffect } from 'react';
import Loader from './Loader';

const Loadable = (Component) =>
    (props) => {
        const hide = () => {
            let element = document.getElementById("loader");
            element.classList.add("transparent");
            document.getElementsByTagName("body")[0].style.overflow = 'auto'
            setTimeout(disableLoad, 500);
        }
        const disableLoad = () => {
            let element = document.getElementById("loader");
            element.classList.add("hidden");
        }
        useEffect(() => {
            setTimeout(hide, 3000)
        }, [])
        return (
            <Suspense fallback={<Loader />}>
                <Component {...props} />
            </Suspense>
        );
    }

export default Loadable;
