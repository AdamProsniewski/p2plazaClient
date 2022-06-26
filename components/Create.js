export default function Create(props) {
    return (
        <div className="popup-box">
        <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10 box">

        
        <span className="close-icon" onClick={props.handleClose}>x</span>

            <div className="text-3xl mb-6 text-center ">
                Add message
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">

                <div className="col-span-2">
                    <input onChange={props.onChange} type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Title" name="message" value={props.state.message} />
                </div>


                <div className="col-span-2 text-right">
                    <button onClick={() => {props.saveMessage(); props.handleClose()}} className="bg-pink-800 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-pink-100 rounded-full hover:shadow-2xl hover:bg-pink-900">
                        Submit
                    </button>
                </div>

            </div>
        </div>
        </div>
    )
}

