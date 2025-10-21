"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import { signIn } from "@/lib/actions/auth";

const Page = () => {
  const handleSubmit = async (data: { email: string; password: string }) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    return await signIn(formData);
  };

  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    />
  );
};

export default Page;
