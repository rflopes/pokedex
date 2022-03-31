import type { GetStaticPropsContext, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildPokemonImageUrl } from "../utils/buildPokemonImageUrl";
import { PokemonBaseData, PokemonData } from "../utils/types";

interface HomeProps {
    pokemons: PokemonData[];
}

const Home: NextPage<HomeProps> = ({ pokemons }) => {
    return (
        <div>
            <h1 className="mb-8 text-center text-4xl font-bold">
                NextJS Pokedex
            </h1>
            <ul className="space-y-4">
                {pokemons.map((pokemon: PokemonData, index: number) => (
                    <li key={pokemon.name}>
                        <Link href={`/pokemon?id=${index + 1}`}>
                            <a className="border-gray group my-2 block flex w-full items-center space-x-8 rounded-md border bg-gray-200 p-2 shadow-sm hover:bg-gray-100">
                                <Image
                                    className="grayscale transition-all group-hover:grayscale-0"
                                    src={pokemon.image}
                                    width={80}
                                    height={80}
                                    layout="intrinsic"
                                />
                                <span>
                                    {index + 1}. {pokemon.name}
                                </span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
    try {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=150"
        );
        const { results } = await response.json();
        const pokemons: PokemonData[] = results.map(
            (result: PokemonBaseData, index: number) => {
                return {
                    ...result,
                    image: buildPokemonImageUrl(index + 1),
                };
            }
        );
        return {
            props: {
                pokemons,
            },
        };
    } catch (err) {
        console.log(err);
    }
};

export default Home;
