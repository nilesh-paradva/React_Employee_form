const FormInputCreate = ({ inputBox, inputHandle}) => {
    const validData = (data) => {
        if (!inputBox[data]) {
            return null;
        }

        switch (data) {
            case 'Name':
                return /^[A-Za-z ]{2,}$/.test(inputBox[data]);
            case 'Phone_number':
                return /^[0-9]{10}$/.test(inputBox[data]);
            case 'Address':
                return /*/^[A-z -/]+\d+\s[A-z]+\s[A-z]+(.*)$/*/   /^[\d\sA-Za-z.,/-]{5,}$/.test(inputBox[data]);
            case 'Email':
                return /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(inputBox[data]);
            case 'Designation':
                return /^[A-Za-z ]{2,}$/.test(inputBox[data]);
            case 'Department':
                return /^[A-Za-z ]{2,}$/.test(inputBox[data]);
            case 'City':
                return /^[A-Za-z ]{2,}$/.test(inputBox[data]);
            default:
                return false;
        }
    }

    return (
        <>
            <form action="" className="p-3">
                {["Name", "Phone_number", "Address", "Email", "Designation", "Department", "City"].map((data) => {
                    const isValid = validData(data);
                    let Error;

                    if (isValid === null) {
                        Error = <span className="text-[#f97979] font-bold tracking-wider ps-2">Enter {data}</span>;
                    } else if (isValid) {
                        Error = <span className="text-green-600 font-bold tracking-wider ps-2">Valid {data}</span>;
                    } else {
                        Error = <span className="text-red-600 font-bold tracking-wider ps-2">Invalid {data}</span>;
                    }

                    return (
                        <div className={`eployee-field ${data}`} key={data}>
                            <label htmlFor="" className="font-semibold text-1xl mb-1 text-white">{data + " :-"}</label>{Error}
                            <input type="text" placeholder={"Enter your " + data} name={data} value={inputBox[data]} className={`w-full border-2 py-2 px-3 bg-[#3e3c3c] rounded-lg mb-3 outline-none placeholder:text-[#a19d9d] text-white ${(isValid == 1 || isValid) ? "border-green-700" : "border-red-600"}`} onChange={inputHandle} />
                        </div>
                    )
                })}

            </form>
        </>
    )
}
export default FormInputCreate