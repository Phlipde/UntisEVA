import { WebUntis } from "webuntis";

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express'

const untis = new WebUntis(process.env.SCHOOL_NAME, process.env.USER_NAME, process.env.PASSWORD, process.env.URL);

await untis.login();
 
const Timegrid = await untis.getTimegrid();
console.log(Timegrid[0].timeUnits);

console.log("----------------------------------------------------------------")
const date = new Date();
const date3 = new Date();
const date2 = new Date();
date2.setDate(date.getDate() + 1);
date3.setDate(date.getDate() - 1);

console.log(date, date2);
const timetable = await untis.getOwnTimetableForRange(date3, date2);

timetable.forEach(lesson => {
    if(lesson?.substText === "EVA") {
        console.log("🚀 ~ file: app.mjs:23 ~ lesson", lesson)
        
        console.log("🚀 ~ file: app.mjs:24 ~ WebUntis.convertUntisTime(lesson.startTime)", WebUntis.convertUntisTime(lesson.startTime))
    }
});
