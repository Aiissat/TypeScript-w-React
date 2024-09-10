import React, { FC } from "react";

// Définir le type pour les props       
interface GreetingsProps {
  name: string;
}

// Composant Greetings avec un type pour les props
const Greetings: FC<GreetingsProps> = ({ name }) => {
  return <h1> Bonjour, {name}!</h1>;
};

export default Greetings;
