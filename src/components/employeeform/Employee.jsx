import { useState, useEffect } from "react";
// import Img_1 from "../../assets/images/employee-1.jpeg"
import generateUniqueId from "generate-unique-id";
import FormInputCreate from "./forminput/FormInputCreate";
import SubmitButton from "./submitbutton/SubmitButton";
import DataShow from "./datashow/DataShow";
import { StorageGet } from "../../services/storage/Storage";

const Employee = () => {
    const [inputField, setInputField] = useState({
        Name: '',
        Phone_number: '',
        Address: '',
        Email: '',
        Designation: '',
        Department: '',
        City: ''
    })

    const [validField, setValidField] = useState({});
    const [employeeStorage, setEmployeeStorage] = useState(StorageGet());
    const [IdMatch, setIdMatch] = useState(null);

    const validError = (name, value) => {
        const isValid = {
            Name: /^[A-Za-z ]{2,}$/.test(value),
            Phone_number: /^[0-9]{10}$/.test(value),
            Address: /^[A-z -/]+\d+\s[A-z]+\s[A-z]+(.*)$/.test(value),
            Email: /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(value),
            Designation: /^[A-Za-z ]{2,}$/.test(value),
            Department: /^[A-Za-z ]{2,}$/.test(value),
            City: /^[A-Za-z ]{2,}$/.test(value),
        }

        let message;

        if (!value) {
            message = `Enter the correct ${name.toLowerCase()}`;
        } else if (isValid[name]) {
            message = `Valid ${name}`;
        } else {
            message = `Invalid ${name}`;
        }

        setValidField((prev) => ({ ...prev, [name]: <span className={isValid[name] ? "text-green-400 font-semibold ps-2" : "text-red-400 font-semibold ps-2"}>{message}</span>}))
        return isValid[name];
    }

    const handleField = (e) => {
        const { name, value } = e.target;
        setInputField({ ...inputField, [name]: value })
        validError(name, value)
    }

    const DataDelete = (id, e) => (setEmployeeStorage(employeeStorage.filter((data) => data.Id != id)))
    const DataEdit = (data) => (setInputField({ Name: data.Name, Phone_number: data.Phone_number, Address: data.Address, Email: data.Email, Designation: data.Designation, Department: data.Department, City: data.City }), setIdMatch(data.Id))
    const RecSelect = (id) => {
        console.log("selected id", id);
    }

    const FormSubmit = (e) => {
        e.preventDefault();

        const isValidForm = Object.keys(inputField).every(name => validError(name, inputField[name]));
        
        if (isValidForm) {
            const randomId = generateUniqueId({ // const randomId = Math.floor(Math.random() * 10000);
                length: 4,
                useLetters: false
            })

            const dataToSubmit = { ...inputField, Id: IdMatch || randomId };
            setEmployeeStorage(prev => IdMatch ? prev.map((data) => data.Id === IdMatch ? dataToSubmit : data) : [...prev, dataToSubmit]);
            setInputField({ Name: '', Phone_number: '', Address: '', Email: '', Designation: '', Department: '', City: '' });
            setValidField({})
        } else {
            alert("Form not submitted");
        }
    }

    useEffect(() => {
        localStorage.setItem("employeStorage", JSON.stringify(employeeStorage))
    }, [employeeStorage])

    return (
        <>
            <section className="py-4">
                <div className="container">
                    <div className="w-12/12 relative flex items-center justify-center flex-col bg-my-image bg-cover bg-top  py-5 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-black opacity-65"></div>
                        <div className="w-6/12 border-2 backdrop-blur-lg rounded-lg overflow-hidden">
                            <form action="" className="p-3">
                                <FormInputCreate inputBox={inputField} inputHandle={handleField} inputValid={validField}/>
                                <SubmitButton FormSubmited={FormSubmit} />
                            </form>
                        </div>
                    </div>
                    <div className="w-12/12 mt-5">
                        <DataShow EmployeeData={employeeStorage} DeleteFun={DataDelete} EditFun={DataEdit} SelectData={RecSelect} />
                    </div>
                </div >
            </section >
        </>
    )
}

export default Employee;