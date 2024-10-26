import paint from "../../lib/paint.json";
export async function load() {
	return {
		paints: paint.paints,
	};
}
