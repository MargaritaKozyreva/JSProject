import React, { useState } from "react";
import { FormContainer, FormGroup, Label, Input, Button } from "./Auth.styles";

export interface AuthProps {
  login: string;
  password: string;
}

const Auth: React.FC<any> = (props: any) => {
  const { setUserData, success } = props;
  const [formValue, setFormValue] = useState<AuthProps>({
    login: "",
    password: "",
  });

  return (
    <FormContainer>
      <FormGroup>
        { !success ? 'Вы не зарегестрированы': 'Выполняется вход...'}
        <Label htmlFor="login">Логин</Label>
        <Input
          type="text"
          name="login"
          id="login"
          value={formValue.login}
          onChange={e =>
            setFormValue((prev: any) => {
              return {
                ...prev,
                [e.target.name]: e.target.value,
              };
            })
          }
        />
        <Label htmlFor="password">Пароль</Label>
        <Input
          type="text"
          name="password"
          id="password"
          value={formValue.password}
          onChange={e =>
            setFormValue((prev: any) => {
              return {
                ...prev,
                [e.target.name]: e.target.value,
              };
            })
          }
        />
        <Button
          design="primary"
          onClick={(event: Event) => {
            event.preventDefault();
            setUserData(formValue);
          }}
        >
          Войти
        </Button>
      </FormGroup>
    </FormContainer>
  );
};

export default Auth;
