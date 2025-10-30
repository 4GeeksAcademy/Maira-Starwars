import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "./Card.jsx";
import SmallCard from "../components/SmallCard.jsx";
import { useEffect } from "react";

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
			dispatch({ type: 'get_people', payload: data.results })
			console.log("Log after dispatch");
			console.log(data.results);			

		} catch (err) {
			console.log(err);
		}
	}


	return (
		<div className="mt-5">
			{/* {store.people?.map((value) => {
				return 
			})} */}
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