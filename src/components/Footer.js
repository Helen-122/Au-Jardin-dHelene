import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, ceci n'est pas une adresse valide")
		}
	}

	return (
		<footer className='ajh-footer'>
			<div className='ajh-footer-elem'>
				🌿 For plant lovers ... 🌿
			</div>
			<div className='ajh-footer-elem'>Pour plus de bons plans </div>
			<div className='ajh-footer-elem'>inscrivez vous à notre News Letter :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
