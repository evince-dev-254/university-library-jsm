"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import { signUp } from "@/lib/actions/auth";

const Page = () => {
  const handleSubmit = async (data: { 
    email: string; 
    password: string; 
    fullName: string; 
    universityId: string; 
    universityCard: File;
  }) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("fullName", data.fullName);
    formData.append("universityId", data.universityId);
    formData.append("universityCard", data.universityCard);
    return await signUp(formData);
  };

  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: "",
        universityCard: new File([], ""),
      }}
      onSubmit={handleSubmit}
    />
  );
};

export default Page;
