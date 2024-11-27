import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'

const CustomInput = ({register,errors,label,id,name}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input {...register(name)} id={id}/>
      {errors?.name && <span>{errors?.name?.message}</span>}
    </div>
  )
}

export default CustomInput