import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';
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
					<Route exact path='' element={<StartPage />} />
					<Route exact path='translation' element={<TranslationPage />} />
					<Route exact path='profile' element={<ProfilePage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
