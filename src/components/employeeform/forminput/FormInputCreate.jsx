const FormInputCreate = ({ inputBox, inputHandle, inputValid }) => {
    return (
        <>
            {Object.keys(inputBox).map((key) => (
                <div key={key} className="mb-4">
                    <label className="text-sm font-medium text-white">{key}</label>{inputValid[key]}
                    <input type="text" name={key} value={inputBox[key]} onChange={inputHandle} placeholder={`Enter ${key}`} className={`mt-1 block w-full text-white px-3 bg-[#928b8b] py-2 border-2 ${inputValid[key] ? 'border-yellow-300' : 'border-red-600'} rounded-md shadow-sm outline-none placeholder:text-[#dfd5d5]`}/>
                </div>
            ))}
        </>
    );
};
export default FormInputCreate