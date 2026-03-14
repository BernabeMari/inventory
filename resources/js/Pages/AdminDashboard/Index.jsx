import { useForm, router } from "@inertiajs/react"

export default function({items}){

    const {post, put, setData, data} = useForm({
        id: null,
        product_name: '',
        quantity: ''
    })

    function submit(e){
        e.preventDefault()

        if(data.id){
            put(route('update_item', data.id))
        }else{
            post(route('create_item'))
        }
    }

    function update(item){
        setData({
            id: item.id,
            product_name: item.product_name,
            quantity: item.quantity
        })
    }

    function del(item){
        router.delete(route('delete_item', item.id));
    }

    return(
        <div className="bg-black min-h-screen flex justify-center items-center flex-col">

            <div className="bg-white rounded-3xl w-80 m-4">
                <p className="text-center m-4">
                    {data.id ? "Update Item" : "Create Item"}
                </p>

                <form onSubmit={submit} className="flex flex-col">

                    <input
                        type="text"
                        value={data.product_name}
                        onChange={(e)=>setData('product_name', e.target.value)}
                        placeholder="Enter Product Name"
                        className="rounded-full bg-slate-400 m-2"
                    />

                    <input
                        type="text"
                        value={data.quantity}
                        onChange={(e)=>setData('quantity', e.target.value)}
                        placeholder="Enter Quantity"
                        className="rounded-full bg-slate-400 m-2"
                    />

                    <button
                        type="submit"
                        className="m-2 h-8 rounded-full bg-red-500 hover:bg-red-900 cursor-pointer"
                    >
                        {data.id ? "Update" : "Create"}
                    </button>

                </form>
            </div>

            <div className="text-white">

                {items.map((item)=> (
                    <div key={item.id}>

                        <button className="m-2 h-8 rounded-full bg-blue-500 w-20">
                            {item.product_name}
                        </button>

                        <button className="m-2 h-8 rounded-full bg-green-500 w-20">
                            {item.quantity}
                        </button>

                        <button
                            onClick={()=>update(item)}
                            className="bg-yellow-500 px-2 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={()=>del(item)}
                            className="bg-red-500 px-2 rounded"
                        >
                            Delete
                        </button>

                    </div>
                ))}

            </div>

        </div>
    )
}