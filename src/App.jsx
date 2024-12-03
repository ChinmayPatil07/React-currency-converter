import { useEffect, useState } from 'react'
import './App.css'
import CurrencyBox from './components/CurrencyBox'
import useCurrencyInfo from './hooks/CurrencyInfo'

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-11-30/v1/currencies/inr.json

function App() {

    const [amount, setAmount] = useState(0)
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")

    let currencyList = useCurrencyInfo(from)
    let options = Object.keys(currencyList)

    const onAmountChange = (e) => {
        setAmount(Number(e))
    }
    const onCurrencyChangedTo = (e) => {
        setTo(e)
    }
    const onCurrencyChangedFrom = (e) => {
        setFrom(e)
    }

    const convert = () => {
        setConvertedAmount(currencyList[to] * amount)
    }

    const swap = () => {
        setTo(from)
        setFrom(to)
        setAmount(convertedAmount)
        setConvertedAmount(amount)
    }


    return (
        <div className="currency-converter-app text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 w-2/5 bg-opacity-40 px-12 py-8 border border-gray-400 rounded-xl backdrop-blur-md z-10">
            <h1 className="text-black font-semibold text-2xl text-center ">Currency Converter</h1>

            <CurrencyBox label="From" amount={amount} amountDisable={false} onAmountChange={onAmountChange} currencyList={options} selecetedCurrency={from} currencyDisable={false} onCurrencyChange={onCurrencyChangedFrom} />

            <CurrencyBox label={"To"} amount={convertedAmount} amountDisable={false} onAmountChange={null} currencyList={options} selecetedCurrency={to} currencyDisable={false} onCurrencyChange={onCurrencyChangedTo} />

            <div onClick={swap} className='swap-bar bg-gray-800 w-20 flex items-center justify-center py-1 absolute top-48 left-72 cursor-pointer rounded-md'>
                <p className='text-lg text-gray-300 font-semibold'>swap</p>
            </div>

            <button onClick={convert} className='border-2 border-gray-800 rounded-lg w-full py-3 bg-gray-800 cursor-pointer text-white hover:bg-transparent transition-all mt-4 hover:text-gray-800 hover:font-bold'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            <p className='mt-4 text-gray-950 font-semibold text-lg'>1 {from.toUpperCase()} = {currencyList[to]} {to.toUpperCase()}</p>
        </div>
    )
}

export default App
