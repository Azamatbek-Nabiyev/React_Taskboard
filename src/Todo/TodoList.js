import React,{useState} from 'react';

function TodoList() {
    const [datas, setDatas] = useState([]);
    const [data, setData] = useState({name:'', task:''})

    const addData = (e) => {
       if (data.name && data.task){
        e.preventDefault()
        setDatas([...datas, {...data,id:Date.now()}]);
        setData({name:'', task:''})
       } else {
           window.alert("Inputs are empty !")
       }
    }
    
    const remove = (item) => {
        setDatas(datas.filter(e => e.id !== item.id))
        console.log(datas);
    }

    return (
        <div className='main-section'>
            <input 
            type='text'
            value={data.name} 
            placeholder='Name...'
            onChange={(e) => setData({...data, name:e.target.value})}
            />
            <input 
            value={data.task}
            type='text' 
            placeholder='Task...'
            onChange={(e) => setData({...data, task:e.target.value})}
            />
            <button type='submit' onClick={addData} className='btn btn-primary' >Add</button>
            <div className='data'>
            <table id="customers">
                <tr>
                    <th>Name</th>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
                {datas.map((item) => {
                    return(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.task}</td>
                    <td>
                    <button className='btn btn-danger' onClick={() => {remove(item)}}>x</button>
                    </td>
                </tr>
                    )
                })}
            </table>
            </div>
        </div>
    )
}

export default TodoList
