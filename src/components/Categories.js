import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='ajh-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='ajh-categories-select'
			>
				<option value=''>-Filtrer-</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button className='reinitialiserButton' onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories
