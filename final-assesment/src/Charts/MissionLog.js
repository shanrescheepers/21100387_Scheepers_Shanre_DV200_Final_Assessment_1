import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { getThrust, getLaunches, missionLog } from "../services/ApiService";

export function missionLog() {
    data.forEach(function (data) {
        {
            $(".missions").append(`
                `
                `<Card style={{ width: '18rem' }}>
        <Card.Body>
            < Card.Title > + { mission_name[i].data } +</ >
           ` < Card.Subtitle className = "mb-2 text-muted" > `+ { mission_name[i].data } +</>
            `< Card.Text >
            `  Some quick example text to build on the card title and make up the bulk of
               ` the card's content.
                `</>
            < Card.Link href = "#" > `+ { mission_name[i].data } +</>
            < Card.Link href="#" > Another Link</ >\
                `</Card.Body >
    </Card > `
}
        export default missionLog;