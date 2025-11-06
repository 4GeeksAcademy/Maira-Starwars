import useGlobalReducer, { StoreProvider } from "../hooks/useGlobalReducer.jsx";
import Card from "./Card.jsx";
import SmallCard from "../components/SmallCard.jsx";
import { useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		asyncGetPeople()
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


	return (
		<div className="mt-5">
			{console.log("esto es el store.people", store.people)
			}
			{store.people?.lenght > 0
				?
				(
					store.people?.map((value) => {
						return <SmallCard key={value.uid} name={value.name} uid={value.uid} />
					}))
				:
				(<p>Cargando información...</p>
				)}

			<div className="d-flex overflow-x-scroll">
				<SmallCard />
			</div>

			<div className="d-flex overflow-x-scroll">
				<SmallCard />
			</div>
			<div className="d-flex overflow-x-scroll">
				<SmallCard />
			</div>

		</div>
	)
}