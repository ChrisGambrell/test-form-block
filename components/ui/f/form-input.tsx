import { cn } from '@/lib/utils'
import { Label } from '../label'
import { Input } from './c-input'
import { FormError } from './form-error'

type ActionState = {
	values: Record<string, string>
	fieldErrors: Record<string, string[]>
	globalError: string | null
	success: boolean
}

export function FormField({
	className,
	clearOnError = false,
	id: _id,
	label,
	name,
	state,
	...props
}: React.ComponentProps<'input'> & { clearOnError?: boolean; label: React.ReactNode | string; state?: ActionState }) {
	const id = String(name ?? _id)
	const value = clearOnError ? '' : state?.values?.[id] ?? ''
	const error = state?.fieldErrors?.[id]?.[0]

	return (
		<div className={cn('grid gap-2', className)}>
			{label && (typeof label === 'string' ? <Label htmlFor={id}>{label}</Label> : label)}
			<Input id={id} name={id} defaultValue={value} {...props} />
			<FormError value={error ? [error] : []} />
		</div>
	)
}
