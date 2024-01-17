
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { auth } from './state/user/actions';
import Routes from './routes';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.post('/pre', {})
            .then(
                response => {
                    let data = response.data;
                    if (data) {
                        dispatch(auth({ ...data, isAuth: true }));
                    }
                }
            )
            .catch(error => {
                console.log("ERROR:: ", error.response.data);
            })
    }, []);
    return (
        <BrowserRouter basename="">
            <Routes />
        </BrowserRouter>
    );
}

export default App;
