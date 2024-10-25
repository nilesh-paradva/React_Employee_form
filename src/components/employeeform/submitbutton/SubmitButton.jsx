const SubmitButton = ({FormSubmited}) => {
    return (
        <>
            <div className="button mt-1 text-center py-3">
                <a href="#" className="px-3 py-2 bg-green-700 rounded-lg text-white inline-block" onClick={FormSubmited}>Submit</a>
            </div>
        </>
    )
}

export default SubmitButton