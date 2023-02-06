"use strict";

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './Components/Header';
import { TopNavbar } from './Components/Navbar';
import { MangaTab } from './Components/MangaTab';
import { Footer } from './Components/Footer';

import './styles/normalize.css'

const RootID = document.getElementById('root');
const root = ReactDOM.createRoot(RootID);

root.render(<>
	<Header Title="Manga Store" />
	<main className="main">
		<TopNavbar />
		<MangaTab />
	</main>
	<Footer />
</>
);