import React, { useState, useEffect } from "react";
import 'flowbite';

function Three() {

    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal_open, setmodal_open] = useState(false);
    const [candidate, setCandidate] = useState([]);


    const fetchInfo = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        // console. log(data);
    };

    const handle_click_accept = async (event, item, flag, type) => {
        // event.preventDefault();

        setLoading(true);
        flag && setmodal_open(!modal_open);
        setCandidate(item);

        //if selected, candiate is set, everything according to candidate
        //if rejected, candidate not set, everything according to item

        let email_body = "", email_id = candidate.email;

        if (!candidate.email) email_id = item.email;

        email_body = flag ? "Selected for: " + type : "Rejected";

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: email_body, to: email_id }),
            });

            if (response.ok) {
                console.log('Email sent successfully!');

                flag && console.log("Interview type: ", type);
                flag && alert(`Accepted for: ${candidate.name} for: ${type}`);
                !flag && alert(`Rejected for: ${item.name}`);
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setLoading(false);

    };

    const handle_click_modal = (event, item) => {
        setmodal_open(!modal_open);
        setCandidate(item);

    }

    useEffect(() => {
        fetchInfo();

    }, []);

    return (

        <div className="bg-white py-10 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {loading && <img src='https://i.gifer.com/ZZ5H.gif' className='h-12 sticky top-0' />}

                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        RESUME HANDLER
                    </p>
                </div>

                {data.map((item) => {
                    return (
                        <div key={item.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                            <div className="md:flex">
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Candidate: {item.name}   </div>
                                    <p className="block mt-1 text-lg leading-tight font-medium text-black">Mail: {item.email} </p>
                                    <button className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" onClick={event => handle_click_modal(event, item)}>
                                        Accept
                                    </button>

                                    <button className="mt-5 m-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={event => handle_click_accept(event, item, false, '')}>
                                        Reject
                                    </button>

                                    <div
                                        id="popup-modal"
                                        tabIndex="-1"
                                        className={` ${modal_open ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50`}
                                    >
                                        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-700">
                                            <button
                                                type="button"
                                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                data-modal-hide="popup-modal"
                                                onClick={() => setmodal_open(!modal_open)}
                                            >
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                            <div className="p-4 md:p-5 text-center">
                                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{candidate.name}</h3>
                                                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={event => handle_click_accept(event, item, true, 'hr')}>
                                                    HR
                                                </button>
                                                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={event => handle_click_accept(event, item, true, 'oa')}>
                                                    OA
                                                </button>
                                                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={event => handle_click_accept(event, item, true, 'gd')}>
                                                    GD
                                                </button>
                                                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={event => handle_click_accept(event, item, true, 'technical')}>
                                                    Technical
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                    .
                                </div>
                            </div>
                        </div>
                    );
                })}



            </div>
        </div>
    )
}

export default Three
