import CustomInput from "@/components/Input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"

  
const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {handleSubmit,register,formState:{errors,isSubmitting}} = useForm({
    mode:'onChange'
  });
  const onSubmit = async (values) =>{
    try{

    }catch(error){

    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput register={register} errors={errors} name="email" id="email" label={"Email"}/>
      <CustomInput register={register} errors={errors} name="password" id="password" label={"Password"}/>
      <Button type="submit">submit</Button>
    </Form>
  )
}

export default Login