import { useForm } from "@inertiajs/react"

export default function({test, items}){
    const { post , setData, data} = useForm({
        product_name: '',
        quantity: ''
    })

    function submit(e){
        post(route('create_item'))
    }
    return(
        <div className="min-h-screen bg-black flex justify-center items-center flex-col">
            <div className="bg-white rounded-3xl w-80 m-5">
                <p className="text-center m-5">Create an Item</p>
                <form onSubmit={submit} className="flex flex-col p-3">
                    <input type="text" value={data.product_name} onChange={(e)=> setData('product_name', e.target.value)} placeholder="Product Name" className="bg-slate-300 rounded-full m-4" />
                    <input type="text" value={data.quantity} onChange={(e)=> setData('quantity', e.target.value)} placeholder="Quantity" className="bg-slate-300 rounded-full m-4" />
                    <button type="submit" className="bg-red-400 rounded-full h-8 cursor-pointer hover:bg-red-700 m-4">Create</button>
                </form>
            </div>
            <div className="flex flex-row">
            <div className="bg-white rounded-3xl m-3">
                <div>{items.map((item)=>(
                   <p> {item.product_name}</p>
                ))}
                </div>
            </div>

            <div className="bg-white rounded-3xl m-3">
                <div>{items.map((item)=>(
                   <p> {item.quantity}</p>
                ))}
                </div>
            </div>
            </div>

            <div>
                {test.map((test) => (
                    <div>{test.product_name}
                    {test.quantity}</div>
                ))}
            </div>
        </div>
    )
}