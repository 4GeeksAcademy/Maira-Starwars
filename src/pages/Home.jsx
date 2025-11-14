import useGlobalReducer, { StoreProvider } from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import SmallCardPeople from "../components/SmallCardPeople.jsx";
import SmallCardPlanets from "../components/SmallCardPlanets.jsx";
import SmallCardStarships from "../components/SmallCardStarships.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		asyncGetPeople()
		asyncGetPlanets()
		asyncGetStarships()
	}, [])

	async function asyncGetPeople() {
		try {
			const response = await fetch("https://www.swapi.tech/api/people")
			if (!response.ok) {
				throw new Error("Todo salió mal")
			}
			const data = await response.json()
			dispatch({ type: 'get_people', payload: data.results || [] })
			console.log("Log after dispatch", data.results);
		} catch (err) {
			console.log(err);
		}
	}

	async function asyncGetPlanets() {
		try {
			const response = await fetch("https://www.swapi.tech/api/planets")
			if (!response.ok) {
				throw new Error("No hay planetas")
			}
			const data = await response.json()
			dispatch({ type: 'get_planets', payload: data.results })
			console.log("log after planets", data.results)
		} catch (err) {
			console.log(err);
		}
	}

	async function asyncGetStarships() {
		try {
			const response = await fetch("https://www.swapi.tech/api/starships")
			if (!response.ok) {
				throw new Error("No hay naves")
			}
			const data = await response.json()
			dispatch({ type: 'get_starships', payload: data.results })
			console.log("log after starships", data.results)
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="mt-5 h-75">
			<h2 style={{ color: 'gray' }}>Characters</h2>
			<br />
			<div className="row overflow-x-scroll mw-100 h-25 smallCard">
				{store.people?.length > 0
					?
					(store.people?.map((value, index) => {
						return <SmallCardPeople key={value.uid} index={index} name={value.name} uid={value.uid} image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${value.uid}.jpg`} />

					}))
					:
					(<div className="d-flex align-items-center">
						<strong role="status">Loading...</strong>
						<div className="spinner-border ms-auto" aria-hidden="true"></div>
					</div>
					)
				}
			</div>
			<br />
			<h2 style={{ color: 'gray' }}>Planets</h2>
			<br />
			<div className="row overflow-x-scroll mw-100 h-25 smallCard">
				{store.planets?.length > 0
					?
					(
						store.planets?.map((value, index) => {
							return <SmallCardPlanets key={value.uid} index={index} name={value.name} uid={value.uid} image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${value.uid}.jpg`} />
						}))
					:
					(<div className="d-flex align-items-center">
						<strong role="status">Loading...</strong>
						<div className="spinner-border ms-auto" aria-hidden="true"></div>
					</div>
					)
				}
			</div>
			<br />
			<h2 style={{ color: 'gray' }}>Starships</h2>
			<br />
			<div className="row overflow-x-scroll mw-100 h-25 smallCard">
				{store.starships?.length > 0
					?
					(
						store.starships?.map((value, index) => {
							return <SmallCardStarships key={value.uid} index={index} name={value.name} uid={value.uid} image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${value.uid}.jpg`} />
						}))
					:
					(<div className="d-flex align-items-center">
						<strong role="status">Loading...</strong>
						<div className="spinner-border ms-auto" aria-hidden="true"></div>
					</div>
					)
				}
			</div>

		</div>
	)
}