const FormInputCreate = ({ inputBox, inputHandle, inputValid }) => {
    return (
        <>
            <form action="" className="p-3">
                {["Name", "Phone_number", "Address", "Email", "Designation", "Department", "City"].map((data) => (
                    <div className={`eployee-field ${data}`} key={data}>
                        <label htmlFor="" className="font-semibold text-1xl mb-1 text-white">{data + " :-"}</label>{inputValid[data]}
                        <input type="text" placeholder={"Enter your " + data} name={data} value={inputBox[data]} className="w-full border-2 border-[#9f9797] py-2 px-3 bg-[#3e3c3c] rounded-lg mb-3 outline-none placeholder:text-[#a19d9d] text-white" onChange={inputHandle} />
                    </div>
                ))}
            </form>
        </>
    )
}
export default FormInputCreate