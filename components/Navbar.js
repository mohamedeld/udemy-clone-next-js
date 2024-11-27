import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import CustomInput from './Input'
import { useForm } from 'react-hook-form'
import CustomDialog from './CustomDialog'
import Login from './Login'

const Navbar = () => {
  const { handleSubmit, control, register, formState: { errors, isSubmitting } } = useForm({
    mode: 'onChange'
  });
  return (
    <nav className="border-b px-4">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <div>
          <Button asChild variant="ghost">
            <Link href={"/"}>Home</Link>

          </Button>
        </div>
        <div className='flex items-center gap-2'>
          <CustomDialog name="Login" text={"Login"}>
            <Login />
          </CustomDialog>

          <Button asChild>
            <Link href={"/register"}>Register</Link>

          </Button>
        </div>
      </div></nav>
  )
}

export default Navbar