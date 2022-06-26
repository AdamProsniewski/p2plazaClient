export default function Message(props){
    return (
        
        // <div key={props.createdAt}>
        //     <h2>{props.message}</h2>
        //     <h3>From: {props.name}</h3>
        //     <p>Date: {props.createdAt}</p>
        //   </div>

        // <div key={props.createdAt}>
        //     <div classNameName="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">

               

        //         <div classNameName="p-4">
        //             <small classNameName="text-blue-400 text-xs">{props.name}</small>
        //             <h1 classNameName="text-2xl font-medium text-slate-600 pb-2">{props.message}</h1>
        //             <p classNameName="text-sm tracking-tight font-light text-slate-400 leading-6">{props.createdAt}</p>
        //         </div>
        //     </div>

        // </div>


        <div className="pb-2">
        <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60" key={props.createdAt}>

              <div className="mt-2">
              </div>
              <small className="text-blue-400 text-xs">{props.name}</small>
              <div>

                <div className="p-1">
                  <p className="text-gray-900 border-l-2 px-1 border-blue-500 bg-gray-100 rounded">{props.message}</p>
                </div>
                <p className="text-sm tracking-tight font-light text-slate-400 leading-6">{props.createdAt}</p>
              </div>
            </div>
            </div>
    )
}