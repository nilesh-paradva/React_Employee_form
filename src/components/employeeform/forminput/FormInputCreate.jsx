const FormInputCreate = ({ inputBox, inputHandle, inputValid, BorderValid}) => {

    console.log("border valid",BorderValid);

    return (
        <>
            {Object.keys(inputBox).map((key) => (
                <div key={key} className="mb-4">
                    <label className="font-medium text-white tracking-wider">{key}</label>{inputValid[key]}
                    <input type="text" name={key} value={inputBox[key]} onChange={inputHandle} placeholder={`Enter ${key}`} className={`mt-1 block w-full text-white px-3 bg-[#524e4e] bg-opacity-15 py-2 border-[3px] rounded-md shadow-sm outline-none placeholder:text-[#a9a0a0] ${BorderValid[key] || "border-gray-300"}`}/>
                </div>
            ))}
        </>
    );
};
export default FormInputCreate