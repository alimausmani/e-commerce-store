import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
const About = () => {
  return (
    <>
      <h2>This Is My about Page</h2>
      <Link href="/">Home Page</Link>
      <br />
      <br />
      <Link href="/cart">Cart</Link>
      <br />
      <br />
      <Link href="/order">Orders</Link>
    </>
  );
};

export default About;
