import { ChevronLeftIcon } from "@heroicons/react/outline";
import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buildPokemonImageUrl } from "../utils/buildPokemonImageUrl";
import { PokemonFullData, PokemonType } from "../utils/types";

interface PokemonProps {
    pokemon: PokemonFullData;
}

const Pokemon: NextPage<PokemonProps> = ({ pokemon }) => {
    return (
        <>
            <Head>
                <title>{pokemon.name}</title>
            </Head>
            <div className="pt-4 pb-10">
                <Link href="/">
                    <a className="group mb-8 flex items-center space-x-2 hover:text-indigo-500">
                        <ChevronLeftIcon className="group:hover:text-indigo-500 h-6 w-6" />
                        <span>Home</span>
                    </a>
                </Link>
                <h1 className="mb-2 text-center text-4xl capitalize">
                    {pokemon.name}
                </h1>
                <div className="text-center">
                    <Image
                        src={pokemon.image}
                        width={200}
                        height={200}
                        layout="intrinsic"
                    />
                </div>
                <div className="flex w-full justify-center space-x-8">
                    <p>
                        <span className="mr-2 font-bold">Weight: </span>
                        {pokemon.weight}
                    </p>
                    <p>
                        <span className="mr-2 font-bold">Height: </span>
                        {pokemon.height}
                    </p>
                </div>
                <h2 className="mt-6 mb-2 text-center text-2xl">Types</h2>
                <ul className="flex flex-wrap text-center">
                    {pokemon.types.map((type: PokemonType) => (
                        <li
                            className="min-w-[25%] flex-1 decoration-1"
                            key={type.type.name}
                        >
                            {type.type.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export const getServerSideProps = async ({
    query,
}: GetServerSidePropsContext) => {
    const { id } = query;

    if (!id) {
        return {
            redirect: "/",
            permanent: false,
        };
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon: PokemonFullData = await response.json();

        return {
            props: {
                pokemon: {
                    ...pokemon,
                    image: buildPokemonImageUrl(+id),
                },
            },
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default Pokemon;
