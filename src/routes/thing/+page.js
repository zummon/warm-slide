import thing from "../../lib/thing.json";
export async function load() {
	return {
		things: thing.things,
	};
}
