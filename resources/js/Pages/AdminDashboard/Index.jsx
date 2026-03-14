import { useForm, router } from "@inertiajs/react"

export default function Index({ items }) {

    // --- Create Form State ---
    const { post, data: createData, setData: setCreateData, reset: resetCreateForm } = useForm({
        product_name: '',
        quantity: ''
    });

    // --- Edit Form State ---
    const { put, data: editData, setData: setEditData, reset: resetEditForm } = useForm({
        id: null,
        product_name: '',
        quantity: ''
    });

    // --- Create Item ---
    function handleCreate(e) {
        e.preventDefault();
        post(route('create_item'), {
            onSuccess: () => resetCreateForm() // Clear form after creation
        });
    }

    // --- Update Item ---
    function handleUpdate(e) {
        e.preventDefault();
        put(route('update_item', editData.id), {
            onSuccess: () => resetEditForm() // Clear edit form after update
        });
    }

    // --- Delete Item ---
    function handleDelete(item) {
        router.delete(route('delete_item', item.id));
    }

    // --- Fill Edit Form ---
    function editItem(item) {
        setEditData({
            id: item.id,
            product_name: item.product_name,
            quantity: item.quantity
        });
    }

    return (
        <div className="bg-black min-h-screen flex flex-col items-center p-4">

            {/* ===== CREATE FORM ===== */}
            <div className="bg-white rounded-3xl w-80 p-4 mb-6">
                <p className="text-center text-lg mb-4 font-semibold">Create Item</p>
                <form onSubmit={handleCreate} className="flex flex-col">
                    <input
                        type="text"
                        value={createData.product_name}
                        onChange={e => setCreateData('product_name', e.target.value)}
                        placeholder="Enter Product Name"
                        className="rounded-full bg-slate-400 m-2 p-2"
                    />
                    <input
                        type="text"
                        value={createData.quantity}
                        onChange={e => setCreateData('quantity', e.target.value)}
                        placeholder="Enter Quantity"
                        className="rounded-full bg-slate-400 m-2 p-2"
                    />
                    <button
                        type="submit"
                        className="m-2 h-10 rounded-full bg-red-500 hover:bg-red-700 text-white"
                    >
                        Create
                    </button>
                </form>
            </div>

            {/* ===== EDIT FORM ===== */}
            {editData.id && (
                <div className="bg-yellow-100 rounded-3xl w-80 p-4 mb-6">
                    <p className="text-center text-lg mb-4 font-semibold">Edit Item</p>
                    <form onSubmit={handleUpdate} className="flex flex-col">
                        <input
                            type="text"
                            value={editData.product_name}
                            onChange={e => setEditData('product_name', e.target.value)}
                            placeholder="Edit Product Name"
                            className="rounded-full bg-yellow-300 m-2 p-2"
                        />
                        <input
                            type="text"
                            value={editData.quantity}
                            onChange={e => setEditData('quantity', e.target.value)}
                            placeholder="Edit Quantity"
                            className="rounded-full bg-yellow-300 m-2 p-2"
                        />
                        <button
                            type="submit"
                            className="m-2 h-10 rounded-full bg-green-500 hover:bg-green-700 text-white"
                        >
                            Update
                        </button>
                    </form>
                </div>
            )}

            {/* ===== ITEMS LIST ===== */}
            <div className="text-white w-full max-w-md">
                {items.map(item => (
                    <div key={item.id} className="flex items-center justify-between bg-gray-800 p-2 rounded mb-2">
                        <div className="flex space-x-2">
                            <span className="bg-blue-500 rounded-full w-24 text-center">{item.product_name}</span>
                            <span className="bg-green-500 rounded-full w-24 text-center">{item.quantity}</span>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => editItem(item)}
                                className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-700"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(item)}
                                className="bg-red-500 px-3 py-1 rounded hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}