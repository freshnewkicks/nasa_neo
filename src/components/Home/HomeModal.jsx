import '../../App.css';
import React, { useState, useEffect, useRef } from "react";

export function HomeModal({testArg}) {
    return (
        <div className="m-auto p-auto">
            <h1>TEST</h1>
            <p>Tets modal for home</p>
            <p>{testArg}</p>
        </div>
    )
}