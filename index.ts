#!/usr/bin/env node
import inquirer from "inquirer"
const answers:{
    sentence:string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the word:"

}

])
const words = answers.sentence.trim().split(" ")
//Print the array of words to the console
console.log(words)
//Print word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`)
