"use client"
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1> This Is My Home page</h1>
      <Link href="/order">orders</Link>
      <br /><br />
      <Link href="/cart">cart</Link>
      <br /><br />
      <Link href="/about">About</Link>

    </>
  );
};

export default Home;