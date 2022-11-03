import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import classes from './MainPage.module.scss';

export function MainPage({setFullNameChanged, setFullName,  setZvannia, zvannia, fullNameChanged, fullName, vidriadzhennoDo, setVidriadzhennoDo}) {

const FIORef = useRef();
const FIOChangedRef = useState();
const zvanniaRef = useState();
const vidriadzhennoDoRef = useState()
  return (
    <div>
    <div className={classes.common_variables}>

<div className={classes.enter_panel}>
Загальна Інформація для документа
    <div>

        <input id="FIO" type="text" name="text" ref={FIORef} ></input>
        <button onClick={()=>{
                setFullName(()=>{
                    return FIORef.current.value;
            }) }}>Встановити ФІО</button>
    </div>

    <div>
 
        <input id="FIOChanged" type="text" name="text" ref={FIOChangedRef} ></input>
        <button onClick={()=>{
            setFullNameChanged(()=>{
                return FIOChangedRef.current.value;
            }) }}>Встановити ФІО схилене</button>
    </div>

    <div>
        <input id="FIOChanged" type="text" name="text" ref={zvanniaRef} ></input>
        <button onClick={()=>{
            setZvannia(()=>{
                return zvanniaRef.current.value;
            }) }}>Встановити Звання</button>
    </div>
</div>

<div className={classes.results_panel}>
    <div>Ф.І.О: {fullName}</div> 
    <div>Ф.І.О схилене: {fullNameChanged}</div>
    <div>Звання: {zvannia}</div>
    </div>
</div>

    <div className={classes.vidriadzhennia_panel}>
        <p>Локальна Інформація для документа</p>  
    <input id="vidriadzhennoDo" type="text" name="text" ref={vidriadzhennoDoRef} ></input>
        <button onClick={()=>{
            setVidriadzhennoDo(()=>{
                return vidriadzhennoDoRef.current.value;
            }) }}>Відряджено до</button>
            
            <p>Відряджено до: {vidriadzhennoDo}</p>

        <Link to='/vidriadzhennia'>
        <button>Відкрити документ Відрядження</button>
        </Link>
        
    </div>
    </div>
  )
}

