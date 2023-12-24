function I() {
    let I = [];

    for (let i = 0; i < 4; i++) {

        I.push(<div key={i} className="squareTetris" style={{ backgroundColor: 'blue' }}>


        </div>

        );




    }

    return I;
}


function O() {
    let O = [];

    for (let i = 0; i < 4; i++) {

        O.push(<div key={i} className="squareTetris" style={{ backgroundColor: 'yellow' }}>


        </div>

        );

    }

    return O;
}


function T() {
    const segments = [];

    for (let i = 0; i < 3; i++) {
        segments.push(
         
                <div className="squareTetris" style={{ backgroundColor: 'purple' }}></div>
           
        );
    }

    segments.push(
        <div className="vertical">
            <div className="squareTetris" style={{ backgroundColor: 'purple' }}></div>
        </div>
    );

    return segments;
}


function L() {
    const segments = [];

    for (let i = 0; i < 3; i++) {
        segments.push(
         
                <div className="squareTetris" style={{ backgroundColor: 'orange' }}></div>
           
        );
    }

    segments.push(
        <div className="vertical">
            <div className="squareTetris" style={{ backgroundColor: 'orange' }}></div>
        </div>
    );

    return segments;
}

function J() {
    const segments = [];

    for (let i = 0; i < 3; i++) {
        segments.push(
         
                <div className="squareTetris" style={{ backgroundColor: '#00008B' }}></div>
           
        );
    }

    segments.push(
        <div className="vertical">
            <div className="squareTetris" style={{ backgroundColor: '#00008B' }}></div>
        </div>
    );

    return segments;
}


function Z() {
    const segments = [];

    for (let i = 0; i < 3; i++) {
        segments.push(
         
                <div className="squareTetris" style={{ backgroundColor: 'red' }}></div>
           
        );
    }

    segments.push(
        <div className="vertical">
            <div className="squareTetris" style={{ backgroundColor: 'red' }}></div>
        </div>
    );

    return segments;
}


function S() {
    const segments = [];

    for (let i = 0; i < 3; i++) {
        segments.push(
         
                <div className="squareTetris" style={{ backgroundColor: 'green' }}></div>
           
        );
    }

    segments.push(
        <div className="vertical">
            <div className="squareTetris" style={{ backgroundColor: 'green' }}></div>
        </div>
    );

    return segments;
}





export default function Shape({ type }) {
    switch (type) {
        case 'I':
            return (<div ><I /><br /></div>)

        case 'O':
            return (<div className="O"><O /><br /></div>)

        case 'T':
            return (<div className="T"><T /><br /></div>)

        case 'L':
            return (<div className="L"><L /><br /></div>)
        case 'J':
            return (<div className="J"><J /><br /></div>)
        case 'Z':
            return (<div className="Z"><Z /><br /></div>)
        case 'S':
            return (<div className="S"><S /><br /></div>)
    }
}