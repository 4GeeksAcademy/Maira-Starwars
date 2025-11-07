import useGlobalReducer, { StoreProvider } from "../hooks/useGlobalReducer.jsx";
import Card from "./Card.jsx";
import SmallCard from "../components/SmallCard.jsx";
import { useEffect, useState } from "react";


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
			console.log("async fetch", data);
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
			console.log("Get Planets", data)
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
			console.log("Get Starships", data)
			dispatch({ type: 'get_starships', payload: data.results })
			console.log("log after starships", data.results)
		} catch (err) {
			console.log(err);
		}
	}

	const changeImg = () => {
        const charactersUrl = asyncGetPeople()
        const planetsUrl = asyncGetPlanets()
        const starshipsUrl = asyncGetStarships()
        const charactersImg = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${uid}.jpg`
        const planetsImg = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${uid}.jpg`
        const starshipsImg = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${uid}.jpg`
        const imgPlaceholder = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg"
		if (store.people) {
			charactersImg
		} else if (store.planets) {
			planetsImg
		} else if (store.starships) {
			starshipsImg
		} else {
			imgPlaceholder
		}
    }

	return (
		<div className="mt-5 h-75">
			<div className="row overflow-x-scroll mw-100 h-25 smallCard">
				{store.people?.length > 0
					?
					(store.people?.map((value) => {
						return (
							<div className="col-3">
								<SmallCard key={value.uid} name={value.name} uid={value.uid} img={changeImg}/>
							</div>
						)
					}))
					:
					(<div className="d-flex align-items-center">
						<strong role="status">Loading...</strong>
						<div className="spinner-border ms-auto" aria-hidden="true"></div>
					</div>
					)
				}
			</div>

			<div className="row overflow-x-scroll mw-100 h-25 smallCard">
			{store.planets?.length > 0
				?
				(
					store.planets?.map((value) => {
						return <SmallCard key={value.uid} name={value.name} uid={value.uid} />
					}))
				:
				(<div className="d-flex align-items-center">
					<strong role="status">Loading...</strong>
					<div className="spinner-border ms-auto" aria-hidden="true"></div>
				</div>
				)
			}
			</div>

			<div className="row overflow-x-scroll mw-100 h-25 smallCard">
			{store.starships?.length > 0
				?
				(
					store.starships?.map((value) => {
						return <SmallCard key={value.uid} name={value.name} uid={value.uid} />
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