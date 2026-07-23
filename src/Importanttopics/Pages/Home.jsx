import React from 'react'
import Cart from './Cart'

export default function Home() {

    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = ["a", "b", "c"];
    console.log(arr1);
    console.log(arr1.push(3234))
    console.log(arr2);
    console.log(arr2 + arr1);
    console.log(arr2.concat(arr1));

    const arr3 = [...arr1, ...arr2];
    console.log(arr3)

    const [a, b, c, ...d] = [10, 20, 30, 40, 50, 60, 70, 80];
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);


    return (
        <div>Home
            <form action=""></form>
            <form action="" method="get"></form>
            <form action="" method="post"></form>
            <Cart />
        </div>
    )
}
