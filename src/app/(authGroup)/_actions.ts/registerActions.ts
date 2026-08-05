"use server";

type RegisterState = {
  sucess:true,
  statusCode:number,
  message:string,
  data:{
    accessToken:string,
    refreshToken:string,
    
  }
}

export const registerActions = async (prevState:RegisterState,formData: FormData) => {
  console.log(formData);

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("number");
  const password = formData.get("password");

  const payload = {
    name,
    email,
    phone,
    password,
  };
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`,{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(payload)
  })

  const result = await res.json();
  console.log(result);
  
return result
}