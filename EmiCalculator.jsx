
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
export function EmiCalculator(){

    const[amount,setAmount]=useState(1000);
    const[years,setYears]=useState(1);
    const[rate,setRate]=useState(6.75);
    const[EMI,setEMI]=useState(0);

    function handleAmountChange(e){
        setAmount(e.target.value);
    }

    function handleYearChange(e){
        setYears(e.target.value);
    }

    function handleRateChange(e){
        setRate(e.target.value);
    }

    function handleCalculateClick(){
        var P =amount;
        var r=rate/12/100;
        var n =years*12;
        var EMI = P*r*Math.pow(1+r,n)/Math.pow(1+r,n)-1;
        setEMI(EMI);
    }

    return(
        <div className="container-fluid bg-dark text-danger">
            <div className="mt-4 p-4">
                <h4 className="text-center">Personal Loan Emi Calculator</h4>
                <div className='p-2 bg-light text-dark'>
                    <div className='row'>
                        <div className='col'>
                            Amount you need <input type='text' value={amount} size="10"></input>
                        </div>
                        <div className='col'>
                            for <input type='text' value={years} size="4"></input> years
                        </div>
                        <div className='col'>
                            Interest Rate <input type='text' value={rate} size="4"></input>  %
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col'>
                            1000 <input type='range' onChange={handleAmountChange} min="1000" max="100000000" value={amount}></input> 10,00,00,000
                        </div>
                        <div className='col'>
                        1 <input type='range' onChange={handleYearChange} min="1" max="10" value={years}></input> 100
                        </div>
                        <div className='col'>
                        6.75 <input type='range' onChange={handleRateChange} min="6.75" max="18.45" value={rate} step="0.01"></input> 18.45
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-text-end'>
                        <button onClick={handleCalculateClick} className='btn btn-primary'>Calculate</button>
                        </div>
                    </div>
                    <div className='row mt-4'>
                    <div className='col'>
                        Your monthly installment is <b>{Math.round(EMI).toLocaleString('em-in', {style:'currency',currency:'INR'})}</b> for {years} years.
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}