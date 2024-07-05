import Box from '@/components/box'
import Task from '@/components/task'
import React from 'react'

const NewTaskPage = () => {
  return (
    <section className='py-6'>
      <Box>
        <div className='w-full flex flex-col'>
          <h1 className='text-xl font-medium text-gray-800'>New Tasks</h1>
          <p className='font-light text-gray-400 text-md'>Add new task below</p>
          <task />
        </div>
      </Box>
    </section>
  )
}

export default NewTaskPage
