"use client"
import React from 'react';
import { useParams } from 'react-router-dom';

const Page = ({params}) => {
  return (
    <div>My Post: {params.slug}</div>
  );
};

export default Page;

