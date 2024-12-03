import React from 'react'
import './CurencyBox.css'

const CurrencyBox = ({
    label,

    amount,
    amountDisable,
    onAmountChange,

    currencyList,
    selecetedCurrency,
    currencyDisable,
    onCurrencyChange
}) => {
    

    return (
        <div className='currency-box flex justify-between bg-transparent border-2 border-gray-800 px-8 py-4 mt-4 rounded-lg'>
            <div className="amountBox flex flex-col justify-between gap-6 w-2/5">
                <p className='text-gray-800 font-semibold text-lg'>{label}</p>
                <input type="number" className='bg-gray-800 rounded-lg outline-none border-none px-3 py-1.5 font-semibold text-white' readOnly={(label === "To") ? true : false} disabled={amountDisable} onChange={(e) => onAmountChange(Number(e.target.value))} value={amount} />
            </div>
            <div className="country-box w-1/5 flex flex-col gap-6 justify-between">
                <p className='text-gray-800 font-semibold text-lg'>Currency</p>
                <select className='bg-gray-800 rounded-lg outline-none border-none px-3 py-1.5 font-semibold text-white' value={selecetedCurrency} onChange={e => onCurrencyChange(e.target.value)} disabled={currencyDisable}>
                    {
                        currencyList.map(currency => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default CurrencyBox