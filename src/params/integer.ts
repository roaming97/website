import type { ParamMatcher } from '@sveltejs/kit'

export const match: ParamMatcher = (param: string): boolean => {
	return !isNaN(parseInt(param))
}
