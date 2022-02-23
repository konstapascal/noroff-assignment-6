import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import StartPage from './pages/StartPage';
import TranslationPage from './pages/TranslationPage';

import './styles/tailwind.css';

function App() {
	return (
		<div className='bg-slate-800 text-slate-100 min-h-screen '>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<StartPage />} />
					<Route path='/translation' element={<TranslationPage />} />
					<Route path='/profile' element={<ProfilePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
