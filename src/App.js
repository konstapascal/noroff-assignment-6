import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TranslationPage from './pages/TranslationPage';
import ProfilePage from './pages/ProfilePage';
import StartPage from './pages/StartPage';

import './styles/tailwind.css';

function App() {
	return (
		<div className='bg-slate-900 min-h-screen text-gray-100'>
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
