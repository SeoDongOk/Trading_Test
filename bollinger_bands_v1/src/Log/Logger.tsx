import chalk from 'chalk';

class Logger {
    mod = {
        log: (message: string)=>{chalk.white(`${message}`)},
        debuge: (message: string)=>{chalk.green(`${message}`)},
        warring: (message: string)=>{chalk.yellow(`${message}`)},
        check: (message: string)=>{chalk.white(`${message}`)},
        error: (message: string)=>{chalk.red(`${message}`)},
        sdo: (message: string)=>{chalk.white(`${message}`)},
    }
}


export default new Logger();