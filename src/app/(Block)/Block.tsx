"use client"

export default function Block({
    data1,
    data2
}: {
    data1: number,
    data2: string
}) {
    return <div>
        <p> {data1} </p>
        <p> {data2} </p>
    </div>
}