import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  StartButton,
  TaskInput,
} from './styles'

const newFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Type a task'),
  minutesAmount: zod
    .number()
    .min(5, 'The min value is 5 minutes')
    .max(60, 'The max value is 60 minutes'),
})

interface NewFormData {
  task: string
  minutesAmount: number
}

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewFormData>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewFormData) {
    console.log(data)

    reset()
  }

  const task = watch('task')
  const minutesAmount = watch('minutesAmount')
  const isSubmitDisabled = !task || minutesAmount === 0

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="">Focused on</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Type your goal..."
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Start
        </StartButton>
      </form>
    </HomeContainer>
  )
}
