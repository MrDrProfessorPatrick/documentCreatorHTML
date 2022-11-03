import React from 'react'
import classes from './Vidriadzhennia.module.scss';
import gerb from '../../assets/gerb.png'

export  function Vidriadzhennia({fullName, fullNameChanged, zvannia, vidriadzhennoDo}) {
  return (
    <div className={classes.mainDiv}>
        <div className={classes.left_column}>
            <div className={classes.title}>
                <div className={classes.title_left}>
                    <img className={classes.gerb} src={gerb} alt="gerb" />
                    <div className={classes.ministerstvo_oboroni}>МІНІСТЕРСТВО ОБОРОНИ </div>
                    <div className={classes.title_ukraini}>УКРАЇНИ </div>
                    <div className={classes.viyskova_chastina}>ВІЙСКОВА ЧАСТИНА</div>
                    <div className={classes.fours_row}>****</div>
                    <div className={classes.fifth_row}>*********</div>
                    <div className={classes.number_city}>№49000 м.Дніпро</div>
                </div>
                <div className={classes.title_right}>
                    <div>Посвідчення</div>
                    <div>про відрядження №__</div>
                    <div>від __.__.2022</div>
                </div>
            </div>
        <div className={classes.vidano_section}>
            <div className={classes.vidano}>Видано</div>
            <div className={classes.vidano_by_container}>
            <div className={classes.vidano_by}>{zvannia} {fullName}</div>
            <div className={classes.vidano_bottom}>(військове звання, прізвище, ім'я по батькові)</div>
            </div>
        </div>
        

        <div className={classes.vidriadzheno_do_section}>
            <div className={classes.vidriadzheno_do}>Відрядженому до</div>
            <div className={classes.vidriadzheno_do_right_container}>
            <div className={classes.upper}>{vidriadzhennoDo}</div>
            <div className={classes.bottom}> (пункти призначеннь найменування війскової частини, організації )</div>
            </div>

        </div>

        <p className={classes.termin_vidriadshennia}>Термін відрядження "42" доби з 30 жовтня 2022р. по 10 грудня 2022р.</p>
        <p className={classes.after_termin_vidriadshennia}>***** ***** ****** ***** ****</p>
        <div className = {classes.description_after_termin_vidriadshennia}>(*******)</div>
        <p className={classes.pidstava_vidriadzennia}>Підстава відрядження: наказ командира в\ч ****** від **.**.2022 року ***</p>
        <p className={classes.diysno_vrazi}>Дійсно в разі пред'явлення документа, що засвідчує особу.</p>
        <p className ={classes.textBeforeSign}>******** ******** ******** ***** ********** ********** ********** *********</p>
        <div className = {classes.posada_zvannya}>(посада, війскове звання, підпис, ініціали та призвище)</div>
        <p className={classes.M_P}>М.П</p>
        </div>


        <div className={classes.right_column}>
        <div className={classes.title}>
                <div className={classes.title_left}>
                    <img className={classes.gerb} src={gerb} alt="gerb" />
                    <div className={classes.ministerstvo_oboroni}>МІНІСТЕРСТВО ОБОРОНИ </div>
                    <div className={classes.title_ukraini}>УКРАЇНИ </div>
                    <div className={classes.viyskova_chastina}>ВІЙСКОВА ЧАСТИНА</div>
                    <div className={classes.fours_row}>****</div>
                    <div className={classes.fifth_row}>*********</div>
                    <div className={classes.number_city}>№49000 м.Дніпро</div>
                </div>
                <div className={classes.title_right}>
                    <div>Посвідчення</div>
                    <div>про відрядження №__</div>
                    <div>від __.__.2022</div>
                </div>
            </div>
        <div className={classes.vidano_section}>
            <div className={classes.vidano}>Видано</div>
            <div className={classes.vidano_by_container}>
            <div className={classes.vidano_by}>{zvannia} {fullName}</div>
            <div className={classes.vidano_bottom}>(військове звання, прізвище, ім'я по батькові)</div>
            </div>
        </div>
        

        <div className={classes.vidriadzheno_do_section}>
            <div className={classes.vidriadzheno_do}>Відрядженому до</div>
            <div className={classes.vidriadzheno_do_right_container}>
            <div className={classes.upper}>{vidriadzhennoDo}</div>
            <div className={classes.bottom}> (пункти призначеннь найменування війскової частини, організації )</div>
            </div>

        </div>

        <p className={classes.termin_vidriadshennia}>Термін відрядження "42" доби з 30 жовтня 2022р. по 10 грудня 2022р.</p>
        <p className={classes.after_termin_vidriadshennia}>***** ***** ****** ***** ****</p>
        <div className = {classes.description_after_termin_vidriadshennia}>(*******)</div>
        <p className={classes.pidstava_vidriadzennia}>Підстава відрядження: наказ командира в\ч ****** від **.**.2022 року ***</p>
        <p className={classes.diysno_vrazi}>Дійсно в разі пред'явлення документа, що засвідчує особу.</p>
        <p className ={classes.textBeforeSign}>******** ******** ******** ***** ********** ********** ********** *********</p>
        <div className = {classes.posada_zvannya}>(посада, війскове звання, підпис, ініціали та призвище)</div>
        <p className={classes.M_P}>М.П</p>

        </div>
 
        
        
        </div>
  )
}
