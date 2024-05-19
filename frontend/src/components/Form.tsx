"use client";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormHelperText,
} from "@chakra-ui/react";

interface IFormProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  institution: string;
  setInstitution: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form({
  setName,
  setInstitution,
  email,
  setEmail,
  setCountry,
  country,
  institution,
  name,
}: IFormProps) {
  return (
    <>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>¿Cuál es tu profesión?</FormLabel>
        <Input
          autoComplete="off"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>
          ¿En qué escuelas estudiaste?
        </FormLabel>
        <Input
          autoComplete="off"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>
          ¿Cuántos años de experiencia tienes trabajando?
        </FormLabel>
        <Input
          autoComplete="off"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>
          ¿Tienes alguna experiencia liderando equipos?
        </FormLabel>
        <Input
          autoComplete="off"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>¿Qué cargos has tenido?</FormLabel>
        <Input
          autoComplete="off"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>
          ¿Prefieres trabajar en linea o presencial?
        </FormLabel>
        <Input
          autoComplete="off"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>
          ¿En que pais o ciudad te gustaría trabajar?
        </FormLabel>
        <Input
          autoComplete="off"
          value={institution}
          onChange={(e) => {
            setInstitution(e.target.value);
          }}
        />
      </FormControl>
    </>
  );
}
