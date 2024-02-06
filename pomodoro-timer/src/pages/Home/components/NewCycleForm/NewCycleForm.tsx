import { useForm } from 'react-hook-form'
import { FormContainer, TaskInput, MinutesInput } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Type a task'),
  minutesAmount: zod
    .number()
    .min(5, 'The min value is 5 minutes')
    .max(60, 'The max value is 60 minutes'),
})

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  return (
    <FormContainer>
      <label htmlFor="">Focused on</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Add a name to your project..."
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Project 1" />
        <option value="Project 2" />
        <option value="Project 3" />
        <option value="Project 4" />
        <option value="Project 5" />
      </datalist>

      <label htmlFor="">for</label>
      <MinutesInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes</span>
    </FormContainer>
  )
}
