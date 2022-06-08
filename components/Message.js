export default function Message(props){
    return(
        // <div key={props.createdAt}>
        //     <h2>{props.message}</h2>
        //     <h3>From: {props.name}</h3>
        //     <p>Date: {props.createdAt}</p>
        //   </div>

        <div key={props.createdAt}>
            <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">

                <img className="aspect-video w-96 rounded-t-2xl object-cover object-center" src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                <div className="p-4">
                    <small className="text-blue-400 text-xs">{props.name}</small>
                    <h1 className="text-2xl font-medium text-slate-600 pb-2">{props.message}</h1>
                    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">{props.createdAt}</p>
                    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">{props.category}</p>
                    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">{props.description}</p>
                </div>
            </div>

        </div>
    )
}