const arrr = [
    { rum: 13, grog: 5 },
    { ace: 7, grog: 9 },
    { rum: 8, grog: 11 },
    { rum: 20, ace: 2 },
    { rum: 4, grog: 8 },
];

let count_rum = 0;
let count_grog = 0;

for(let el of arrr) {
    if(el.rum !== undefined) {
        count_rum += el.rum;
    }

    if(el.grog !== undefined) {
        count_grog += el.grog;
    }
}


function Task1() {
    return (
        <div className="App">
            <h2> Task with array</h2>
           <h3>RUM: {count_rum}</h3>
           <h3>GROG: {count_grog}</h3>
            <hr/>
        </div>
    );
}

export default Task1;
