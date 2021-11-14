import React from 'react';
import '../calendar.css';

interface Icon {
    onClick: () => void
}

export const LeftIcon = (props: Icon) => {
    return <svg onClick={props.onClick} className="arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M682.666667 512l-256 256V256z"  />
        </svg>
}

export const RightIcon = (props: Icon) => {
    return <svg onClick={props.onClick} className="arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M341.333333 512l256-256v512z"  />
        </svg>
}

export const CalendarIcon = () => {
    return <svg className="icon" viewBox="0 0 1089 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1088 975.99488l0-608.01024c0-8.82688-7.168-15.99488-15.99488-15.99488s-15.99488 7.168-15.99488 15.99488l0 608.01024c0 8.82688-7.168 15.99488-15.99488 15.99488l-992.01024 0c-8.82688 0-15.99488-7.168-15.99488-15.99488l0-608.01024c0-8.82688-7.168-15.99488-15.99488-15.99488s-15.99488 7.168-15.99488 15.99488l0 608.01024c0 26.46016 21.54496 48.00512 48.00512 48.00512l992.01024 0c26.46016 0 48.00512-21.54496 48.00512-48.00512zM143.99488 736.01024c-8.82688 0-15.99488 7.168-15.99488 15.99488s7.168 15.99488 15.99488 15.99488l48.00512 0 0 112.00512c0 8.82688 7.168 15.99488 15.99488 15.99488s15.99488-7.168 15.99488-15.99488l0-112.00512 192 0 0 112.00512c0 8.82688 7.168 15.99488 15.99488 15.99488s15.99488-7.168 15.99488-15.99488l0-112.00512 192 0 0 112.00512c0 8.82688 7.168 15.99488 15.99488 15.99488s15.99488-7.168 15.99488-15.99488l0-112.00512 192 0 0 112.00512c0 8.82688 7.168 15.99488 15.99488 15.99488s15.99488-7.168 15.99488-15.99488l0-112.00512 48.00512 0c8.82688 0 15.99488-7.168 15.99488-15.99488s-7.168-15.99488-15.99488-15.99488l-48.00512 0 0-160.01024 48.00512 0c8.82688 0 15.99488-7.168 15.99488-15.99488s-7.168-15.99488-15.99488-15.99488l-48.00512 0 0-143.99488c0-8.82688-7.168-15.99488-15.99488-15.99488s-15.99488 7.168-15.99488 15.99488l0 143.99488-192 0 0-143.99488c0-8.82688-7.168-15.99488-15.99488-15.99488s-15.99488 7.168-15.99488 15.99488l0 143.99488-192 0 0-143.99488c0-8.82688-7.168-15.99488-15.99488-15.99488s-15.99488 7.168-15.99488 15.99488l0 143.99488-192 0 0-143.99488c0-8.82688-7.168-15.99488-15.99488-15.99488s-15.99488 7.168-15.99488 15.99488l0 143.99488-48.00512 0c-8.82688 0-15.99488 7.168-15.99488 15.99488s7.168 15.99488 15.99488 15.99488l48.00512 0 0 160.01024-48.00512 0zM864.01024 576l0 160.01024-192 0 0-160.01024 192 0zM640 576l0 160.01024-192 0 0-160.01024 192 0zM224.01024 576l192 0 0 160.01024-192 0 0-160.01024zM911.99488 96.01024l136.00768 0c2.78528 0 8.00768 0 8.00768 15.99488l0 143.99488-1024 0 0-143.99488c0-8.82688 7.168-15.99488 15.99488-15.99488l128 0c8.82688 0 15.99488-7.168 15.99488-15.99488s-7.168-15.99488-15.99488-15.99488l-128 0c-26.46016 0-48.00512 21.54496-48.00512 48.00512l0 160.01024c0 8.82688 7.168 15.99488 15.99488 15.99488l1056.01024 0c8.82688 0 15.99488-7.168 15.99488-15.99488l0-160.01024c0-35.38944-20.66432-48.00512-39.99744-48.00512l-136.00768 0c-8.82688 0-15.99488 7.168-15.99488 15.99488s7.168 15.99488 15.99488 15.99488zM719.99488 96.01024c8.82688 0 15.99488-7.168 15.99488-15.99488s-7.168-15.99488-15.99488-15.99488l-352.01024 0c-8.82688 0-15.99488 7.168-15.99488 15.99488s7.168 15.99488 15.99488 15.99488l352.01024 0zM288.01024 143.99488l0-128c0-8.82688-7.168-15.99488-15.99488-15.99488s-15.99488 7.168-15.99488 15.99488l0 128c0 8.82688 7.168 15.99488 15.99488 15.99488s15.99488-7.168 15.99488-15.99488zM816.00512 160.01024c8.82688 0 15.99488-7.168 15.99488-15.99488l0-128c0-8.82688-7.168-15.99488-15.99488-15.99488s-15.99488 7.168-15.99488 15.99488l0 128c0 8.82688 7.168 15.99488 15.99488 15.99488z"  />
 </svg>
}