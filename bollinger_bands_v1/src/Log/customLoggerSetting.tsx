//using mod(value) and color custom

const logger_setting = ()=>{
    const logger_mod_select ={
        log : 10,
        debuge : 56,
        warring : 70,
        check : 50,
        error : 100,
        sdo : 100,
        target_mode: 999
    }
    const logger_mod_color = {
        log : 'whit',
        debuge : 'brightgreen',
        warring : 'yellow',
        check : 'green',
        error : 'red',
        sdo : 'brigthgreen'
    }

    return {selecter:logger_mod_color, color:logger_mod_color}
}
export default logger_setting();