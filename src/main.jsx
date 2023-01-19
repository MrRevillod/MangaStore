import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './Components/Header/Header';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { TopNavbar } from './Components/Navbar/Navbar';
import { MangaTab } from './Components/MangaBox/MangaTab';
import { Footer } from './Components/Footer/Footer';

import './Components/normalize.css'

const RootID = document.getElementById('root');
const root = ReactDOM.createRoot(RootID);

root.render(<>
	<Sidebar />
	<Header Title="Manga Store" />
	<main className="main">
		<TopNavbar Subtitle="Catalogo" />
		<MangaTab />
	</main>
	<Footer />
</>
);