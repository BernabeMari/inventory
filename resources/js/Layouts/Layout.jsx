import { Link } from "@inertiajs/react"
export default function({children}){
    return(
        <div className="bg-orange-300 h-8">
            <header>
                <div className="flex justify-end">
                    <Link href={route('edit.page')} className="bg-slate-600 text-white">Go to edit Page</Link>
                </div>
            </header>
            {children}
        </div>
    )
}