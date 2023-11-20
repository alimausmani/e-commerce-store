import Link from "next/link";
const Orders=()=>{
    return(
        <div>
            <h2>This Is My orders Page</h2>
            <Link href="/">Home page</Link>
            <br /> <br />
            <Link href="/cart">Cart</Link>
            <br /><br />
            <Link href="/about">About</Link>

        </div>
    )
}

export default Orders;
