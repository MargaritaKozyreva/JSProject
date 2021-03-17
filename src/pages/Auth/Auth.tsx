import React from "react";
import {FormContainer, FormGroup, Label, Input, Message, Button } from "./Auth.styles";

const Auth: React.FC = () => {
  return (
    <FormContainer>
      <FormGroup>
        <Label htmlFor="login">Login</Label>
        <Input id="label" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input id="password" />
      </FormGroup>
      <Button design="primary">Отправить</Button>
    </FormContainer>
  );
};

export default Auth;
