import Head from "next/head";
import React, { FunctionComponent } from "react";

const Layout: FunctionComponent = ({ children }) => {
    return (
        <div className="bg-gray-300">
            <Head>
                <title>NextJS Pokedex</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto min-h-screen max-w-xl pt-8">
                {children}
            </main>
        </div>
    );
};

export default Layout;
