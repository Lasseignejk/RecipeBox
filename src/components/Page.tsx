import React from 'react'
import { useAppSelector } from '../util/hooks'

interface PageProps {
	title: string;
}

const Page = ({title}:PageProps) => {
  const selected = useAppSelector((state) => state.selected.value)
  return (
    <div>{title}</div>
  )
}

export default Page