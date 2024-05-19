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
  profesion: string;
  setProfesion: any;
  estudios: string;
  setEstudios: any;
  experiencia: string;
  setExperiencia: any;
  liderazgo: string;
  setLiderazgo: any;
  posiciones: string;
  setPosiciones: any;
  modalidad: string;
  setModalidad: any;
  ubicacion: string;
  setUbicacion: any;
}

export default function Form({
  setProfesion,
  setEstudios,
  setExperiencia,
  setLiderazgo,
  setPosiciones,
  setModalidad,
  setUbicacion,
  profesion,
  estudios,
  experiencia,
  liderazgo,
  posiciones,
  modalidad,
  ubicacion,
}: IFormProps) {
  return (
    <>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>¿Cuál es tu profesión?</FormLabel>
        <Input
          autoComplete="off"
          value={profesion}
          onChange={(e) => {
            setProfesion(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>
          ¿En qué escuelas estudiaste?
        </FormLabel>
        <Input
          autoComplete="off"
          value={estudios}
          onChange={(e) => {
            setEstudios(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>
          ¿Cuántos años de experiencia tienes trabajando?
        </FormLabel>
        <Input
          autoComplete="off"
          value={experiencia}
          onChange={(e) => {
            setExperiencia(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>
          ¿Tienes alguna experiencia liderando equipos?
        </FormLabel>
        <Input
          autoComplete="off"
          value={liderazgo}
          onChange={(e) => {
            setLiderazgo(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>¿Qué cargos has tenido?</FormLabel>
        <Input
          autoComplete="off"
          value={posiciones}
          onChange={(e) => {
            setPosiciones(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>
          ¿Prefieres trabajar en linea o presencial?
        </FormLabel>
        <Input
          autoComplete="off"
          value={modalidad}
          onChange={(e) => {
            setModalidad(e.target.value);
          }}
        />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel fontWeight={"normal"}>
          ¿En que pais o ciudad te gustaría trabajar?
        </FormLabel>
        <Input
          autoComplete="off"
          value={ubicacion}
          onChange={(e) => {
            setUbicacion(e.target.value);
          }}
        />
      </FormControl>
    </>
  );
}
