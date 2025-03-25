"use client";

import { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

export default function CustomRequest() {
    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("POST");
    const [requestBody, setRequestBody] = useState("{}");
    const [response, setResponse] = useState("");

    const sendRequest = async () => {
        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: requestBody,
            });

            const data = await res.json();
            setResponse(JSON.stringify(data, null, 2));
        } catch (error) {
            setResponse(`Error: ${error.message}`);
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Custom Request Tester</h2>

            {/* <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter request URL"
                className="mb-2"
            />

            <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
            >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select> */}

            <Textarea
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                placeholder="Enter JSON request body"
                rows={6}
                className="mb-4"
            />

            <Button onClick={sendRequest} className="w-full">Send Request</Button>

            {response && (
                <div className="mt-4 p-2 bg-gray-100 rounded-md">
                    <pre className="overflow-x-auto">{response}</pre>
                </div>
            )}
        </div>
    );
}
