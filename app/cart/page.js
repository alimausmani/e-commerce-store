import Link from "next/link";
const Cart=()=>{
    return(
        <div>
            <h2>This Is My cart Page</h2>
            <Link href="/">Home Page</Link>
            <br /><br />
            <Link href="/order">Orders</Link>
            <br /><br />
            <Link href="/about">About</Link>

        </div>
    )
}

export default Cart;