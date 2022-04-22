class EveryDate {
	readonly oneDay = 24 * 60 * 60 * 1000
	// hours * minutes * seconds * milliseconds
	firstDate: Date
	secondDate: Date = new Date(Date.now())

	constructor(startDate: Date) {
		this.firstDate = startDate
	}

	getTimeDifference(): string {
		return Math.round(
			Math.abs((this.firstDate.valueOf() - this.secondDate.valueOf()) / this.oneDay)
		).toString()
	}
}

export const timeDifference = new EveryDate(new Date('03/24/2021')).getTimeDifference()
