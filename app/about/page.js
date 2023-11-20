import Link from "next/link";
const About=()=>{
    return(
        <div>
            <h2>This Is My about Page</h2>
            <Link href="/">Home Page</Link>
            <br /><br />
            <Link href="/cart">Cart</Link>
            <br /><br />
            <Link href="/order">Orders</Link>

        </div>
    )
}

export default About;
