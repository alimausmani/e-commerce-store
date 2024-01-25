import './form.css';
import Footer from '../footer';
function Form() {
    return (
        <div>
            <div className="container form">
                <div className='detail'>ADD DELIVERY DETAILS</div>
                <div className='detail add_detail'>Add the details below</div>
            </div>
            <div className='content'>
                <label>
                    <div className='head'>Your Email Address</div>
                    <div className='font_style'>All details of purchase, also tracking details will be send here.</div>
                    <input id="input_div" type="input"></input>
                </label>
                <label>
                    <div className='head'>Name of the Receiver</div>
                    <div className='font_style'>The delivery will be in this Name.</div>
                    <input id="input_div" type="input"></input>
                </label>
                <label>
                    <div className='head'>Contact Number of the Receiver</div>
                    <div className='font_style'>Our Delivery Guy may need this, to contact.</div>
                    <input id="input_div" type="input"></input>
                </label>
                <label>
                    <div className='head'>Delivery Address</div>
                    <div className='font_style'>The products will be delivered here in 15- 20 days..</div>
                    <div className='pin'>Pin Code</div>
                    <input id="input" type="input"></input>
                    <div className='pin'>Address(House no, Flat no, Street, Area)</div>
                    <input id="input" type="input"></input>
                    <div className='town'>Town / City</div>
                    <input id="input" type="input"></input>
                    <a href="/placeOrder"><button>Complete Purchase </button></a>
                </label>
            </div>            
        </div>
    )
}
export default Form;