#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 278,
    POUND: 0.76,
    INR: 74.57
};
let answer = await inquirer.prompt([
    { name: "from",
        message: "Enter from curreny",
        type: "list",
        choices: ["USD", "PKR", "POUND"]
    },
    { name: "to",
        message: "Enter to curreny",
        type: "list",
        choices: ["USD", "PKR", "POUND"]
    },
    { name: "amount",
        type: "number",
        message: "enter the amount"
    }
]);
let fromAmount = currency[answer.from];
let toamount = currency[answer.to];
let amount = answer.amount;
let baseamount = amount / fromAmount; // we convert this in usd as rates are based on US as 1$ tkn above
let convertamount = baseamount * toamount;
console.log(`the base amount is ${baseamount}`);
console.log(`the converted amount from ${answer.from} to ${answer.to} is ${convertamount}`);
