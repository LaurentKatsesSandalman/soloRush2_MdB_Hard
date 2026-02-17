import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SoloRush MdB",
    description: "A NextJS mini-game by Laurent Sandalman Durup",
    alternates: {
     // canonical: 'https://jeannedarc33.fr/', TODO
    },
  };
}

export default function Page(){

	return <GameComponent/>
}