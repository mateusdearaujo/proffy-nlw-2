import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
	return(
		<article className="teacher-item">
		<header>
			<img src="https://avatars1.githubusercontent.com/u/31554234?s=460&u=f1f0602891f7e401dfb36fd37a6d67a8b58d64b7&v=4" alt="Mateus Araujo"/>
			<div>
				<strong>Mateus Araujo</strong>
				<span>Química</span>
			</div>
		</header>
		<p>
		It is a long established fact that a reader will be.
		<br/><br/>
		There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
		</p>
		<footer>
			<p>
				Preço/hora
				<strong>R$ 80,00</strong>
			</p>
			<button type="button">
				<img src={whatsappIcon} alt="Whatsapp"/>
				Entrar em Contato
			</button>
		</footer>
	</article>
	)
}

export default TeacherItem;