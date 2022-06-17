export type shows = {
	show: {
		id: number, 
		name: string,	url: string,
		genres: string[],
		summary: string,
		image: {
			medium: string
			original: string
		}
	}
}