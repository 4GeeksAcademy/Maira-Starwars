import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	const { uid } = useParams()

	const eliminarFav = (uid, category) => {dispatch({ type: 'eliminar_favs', payload: { uid, category } }) }

	return (
		<nav className="navbar sticky-top navbar-expand-lg">
			<div className="container-fluid">
				<Link to="/">
					<img className="navbar-brand" src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/57A0EA5BFA41EA7991E8629C6563BC178462B0399E733A6249F8150F93ACFED8/compose?aspectRatio=1.78&format=webp&width=600" style={{ width: '7rem' }} />
				</Link>

				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						FAVORITE:
						<span id="favoriteCount" style={{ background: 'black' }}> {store.favorite.length}</span>
					</button>
					<ul className="dropdown-menu">
						{store.favorite.map((value, index) => {
							console.log("favoritos", store.favorite);
							return <li key={index}><a className="dropdown-item" href="#">{value.name}
							<i className="fa-solid fa-trash" 
							onClick={() => eliminarFav(value.uid, value.category)}></i></a></li>
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};