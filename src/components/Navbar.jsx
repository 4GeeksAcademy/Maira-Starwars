import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const {store, dispatch} = useGlobalReducer();

	return (
		<nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<img className="navbar-brand" src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/57A0EA5BFA41EA7991E8629C6563BC178462B0399E733A6249F8150F93ACFED8/compose?aspectRatio=1.78&format=webp&width=600" style={{width: '7rem'}}/>
				</Link>
				
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						FAVORITE 
						<span id="favoriteCount" style={{background: 'black'}}> 0 </span>
					</button>
					<ul className="dropdown-menu">
						{store.favorite.map((value, uid) => {
							return <li key={uid}><a className="dropdown-item" href="#">{value.name}</a></li>
						})}
						
						
					</ul>
				</div>
			</div>
		</nav>
	);
};