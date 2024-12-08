"use client";
import Form from "next/form";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useState } from "react";
import { redirect } from "next/navigation";
export default () => {
  const [form, setForm] = useState({});
  const handleLogin = () => {
    if (!form.email || !form.password) {
      alert('Please fill email and password correctly!');
    }
    const email = 'vadhiyavikash@gmail.com';
    const password = 'Vikas@123';

    if(form.email === email && form.password === password) {
      redirect('/home');
    }
  };
  return (
    <div className="flex justify-content-center mt-8">
      <div className="flex justify-content-center">
        <Card title="Login" className="w-1/4 text-center">
          <Form action={handleLogin}>
            <div className="flex flex-column gap-5">
              <div className="flex flex-column gap-2">
                <label htmlFor="email" className="text-left">
                  Email
                </label>
                <InputText
                  name="email"
                  id="email"
                  placeholder="Please Enter email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="flex flex-column gap-2">
                <label htmlFor="password" className="text-left">
                  Password
                </label>
                <Password
                  name="password"
                  id="password"
                  placeholder="Please Enter Password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
              <div>
                <Button label="Login" type="submit" raised />
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};
