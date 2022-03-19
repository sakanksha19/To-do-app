import {useState} from 'react'
const AddTask = ({onAdd}) => {
    const[text,setText]=useState('')
    const[date,setDate]=useState('')
    const[time,setTime]=useState('')
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('Please add a task')
            return
        }
        onAdd({text,date,time})
        setText('')
        setDate('')
        setTime('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <lable>Task</lable>
                <input type='text' placeholder='AddTask' 
                 value={text} 
                 onChange={(e)=>setText(e.target.value)}
                 />
            </div>
            <div className='form-control
                form-control-check'>
                <lable>Date</lable>
                <input type="date" placeholder='Date' 
                   value={date} 
                   onChange={(e)=>setDate(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type="time" placeholder='Time'
                value={time}
                onChange={(e)=>setTime(e.target.value)}
                />
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
