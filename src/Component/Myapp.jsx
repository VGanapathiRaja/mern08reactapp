import React from "react";
import Sample1 from "./Basics/Sample1";
import Sample2 from "./Basics/Sample2";
import Sample3 from "./Basics/Sample3";
import Sample4 from "./Basics/Sample4";
import Sample5 from "./Basics/Sample5";
import Sample6 from "./Basics/Sample6";
import Rulepage1 from "./Rules/Rulepage1";
import Rulepage2 from "./Rules/Rulepage2";
import Classmethodparent from "./Mainkeyswords/Classmethodparent";
import Functionparent from "./Mainkeyswords/Functionparent";
class Myapp extends React.Component {
    render() {
        return (
            <div>
                <h1>This is my React Page</h1>
                {/* <Sample1 />
                <hr />
                <Sample2 />
                <hr />
                <Sample3 />
                <hr />
                <Sample4 />
                <hr />
                <Sample5 />
                <hr />
                <Sample6 /> */}

                {/* <Rulepage1 />
                <hr />
                <Rulepage2 /> */}

                <Classmethodparent />
                <hr /><hr />
                <Functionparent />

            </div>
        )
    }
};
export default Myapp;