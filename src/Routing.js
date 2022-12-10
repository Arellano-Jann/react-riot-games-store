import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import StorePage from './StorePage';

function PageRouting(){
    return(
        <BrowserRouter>
			<h1 style={{
				textAlign:"center"
			}}>Riot Games Store</h1>
			<hr/>
            <Routes>
                <Route path="/" element={<App />} />
				<Route path="/products" element={<StorePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouting