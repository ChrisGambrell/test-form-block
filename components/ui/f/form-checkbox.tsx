import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Checkbox } from '../checkbox'
import { Label } from '../label'
import { FormError } from './form-error'
import { ActionState } from './types'

export function FormCheckbox({
	clearOnError = false,
	id: _id,
	label,
	name,
	state,
	...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
	clearOnError?: boolean
	id: string
	label: React.ReactNode | string
	name: string
	state?: ActionState
}) {
	const id = String(name ?? _id)
	const value = clearOnError ? '' : state?.values?.[id] ?? ''
	const error = state?.fieldErrors?.[id]?.[0]

	return (
		<div className='grid gap-2'>
			<div className='flex items-center gap-2'>
				<Checkbox id={id} name={id} defaultValue={value} {...props} />
				<Label htmlFor={id}>{label}</Label>
			</div>
			<FormError value={error ? [error] : []} />
		</div>
	)
}
