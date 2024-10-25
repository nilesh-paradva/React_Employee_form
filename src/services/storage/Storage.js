export const StorageGet = () => {
    const getStorage = JSON.parse(localStorage.getItem("employeStorage"))
    if(!getStorage){
        return []
    }else{
        return getStorage;
    }
}