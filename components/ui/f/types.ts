export type ActionState = {
	values: Record<string, string>
	fieldErrors: Record<string, string[]>
	globalError: string | null
	success: boolean
}
