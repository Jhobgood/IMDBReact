import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';



export default function Test() {

    function testAPI() {
        console.log("Here")
        $.ajax({
            url: "https:/localhost:5001/test55",
            type: 'GET',
            success: function (html) {
                console.log("Good")
            },
            error: function (html) {
                console.log("Error")
            }
        });


        
    }
    return (
        <React.Fragment>
            <label>Test</label>
            <Button onClick={testAPI}>ClickHere</Button>

        </React.Fragment>
    )
}