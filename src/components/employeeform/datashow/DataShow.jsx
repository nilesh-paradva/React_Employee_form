const DataShow = ({ EmployeeData, DeleteFun, EditFun, SelectData}) => {
    return (
        <>
            <div className="dataView w-[100%] text-center">
                <h2 className="h1 mb-3">Employee Data Show</h2>
                <table className="border-2 border-[#b7b3b3] w-full" cellPadding={10}>
                    <thead>
                        <tr className="border-2 border-[#b7b3b3]">
                            <th className="border-2 border-[#b7b3b3]">Id</th>
                            <th className="border-2 border-[#b7b3b3]">Name</th>
                            <th className="border-2 border-[#b7b3b3]">Phone Number</th>
                            <th className="border-2 border-[#b7b3b3]">Email</th>
                            <th className="border-2 border-[#b7b3b3]">Address</th>
                            <th className="border-2 border-[#b7b3b3]">Designation</th>
                            <th className="border-2 border-[#b7b3b3]">Department</th>
                            <th className="border-2 border-[#b7b3b3]">City</th>
                            <th className="border-2 border-[#b7b3b3]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {EmployeeData.map((rec) => {
                            return (
                                <tr className="border-2 border-[#b7b3b3]" key={rec.Id}>
                                    <td className="border-2 border-[#b7b3b3] w-[7rem]">{rec.Id}</td>
                                    <td className="border-2 border-[#b7b3b3] w-[13rem]">{rec.Name}</td>
                                    <td className="border-2 border-[#b7b3b3] w-[13rem]">{rec.Phone_number}</td>
                                    <td className="border-2 border-[#b7b3b3] w-[16rem]">{rec.Email}</td>
                                    <td className="border-2 border-[#b7b3b3] w-[20rem]">{rec.Address}</td>
                                    <td className="border-2 border-[#b7b3b3] w-[7rem]">{rec.Designation}</td>
                                    <td className="border-2 border-[#b7b3b3] w-[]">{rec.Department}</td>
                                    <td className="border-2 border-[#b7b3b3] w-[6rem]">{rec.City}</td>
                                    <td className="w-[23rem]"><a href="#" className="px-3 py-2 bg-blue-600 rounded-lg me-2 inline-block text-white" onClick={() => SelectData(rec.Id)}>Select</a><a href="#" className="px-3 py-2 bg-green-600 rounded-lg me-2 inline-block text-white" onClick={() => EditFun(rec)}>Edit</a><a href="#" className="px-3 py-2 bg-red-600 rounded-lg inline-block text-white" onClick={() => DeleteFun(rec.Id)}>Delete</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DataShow;