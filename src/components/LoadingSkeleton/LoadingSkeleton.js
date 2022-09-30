import React from 'react'
import ContentLoader from 'react-content-loader'

function TaskListLoader (props) {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={200}
      viewBox="0 0 400 160"
      backgroundColor='rgb(25,25,25)'
      foregroundColor="rgb(255,255,255)"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
      <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
      <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
      <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
    </ContentLoader>
  )
}

TaskListLoader.metadata = {
  name: 'Abraham Calsin',
  github: 'abrahamcalsin',
  description: 'Loading a list of tasks.',
  filename: 'TaskList',
}

export { TaskListLoader };

