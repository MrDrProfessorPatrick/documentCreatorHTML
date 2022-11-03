import { Routes, Route, useParams, useLocation  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Vidriadzhennia } from '../documents/vidriadzhennia/Vidriadzhennia';
import { MainPage } from '../MainPage/MainPage';
import classes from './MainContent.module.scss';


export function MainContent() {
const [fullName, setFullName] = useState('');
const [fullNameChanged, setFullNameChanged] = useState('');
const [zvannia, setZvannia] = useState('');
const [vidriadzhennoDo, setVidriadzhennoDo] = useState('')
  return (
    <div className={classes.MainContent}>
      MAIN CONTENNNNNNNNNNNNTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
        {/* <Routes>
            <Route path='/' 
            element={<MainPage setFullName={setFullName} 
            setFullNameChanged={setFullNameChanged} 
            fullName={fullName}
            fullNameChanged={fullNameChanged}
            setZvannia={setZvannia}
            zvannia={zvannia}
            setVidriadzhennoDo={setVidriadzhennoDo}
            vidriadzhennoDo={vidriadzhennoDo}
            />
           
            } 
            />
            <Route path='vidriadzhennia' element={<Vidriadzhennia fullName={fullName} 
            fullNameChanged={fullNameChanged} 
            zvannia={zvannia} 
            setVidriadzhennoDo={setVidriadzhennoDo} 
            vidriadzhennoDo={vidriadzhennoDo} />}>
                
            </Route>
        </Routes> */}

    </div>
  )
}
