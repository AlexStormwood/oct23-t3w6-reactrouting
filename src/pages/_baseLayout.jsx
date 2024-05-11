import { Outlet } from "react-router-dom";


export default function BaseLayout(){

	return <>
	<h1>Shared layout content</h1>
	<Outlet />
	</>
}