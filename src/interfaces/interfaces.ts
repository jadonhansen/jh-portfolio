export interface ComponentProps {
	current: string,
	previous: string,
	changePage?(page: string): void
}