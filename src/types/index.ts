export type shows = {
	show: {
		id: number, 
		name: string,	url: string,
		genre: string[],
		summary: string,
		image: {
			medium: string
		}
	}
}