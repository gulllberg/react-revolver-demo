import {useRef} from 'react';
import './App.css';
import ReactRevolver, {arrowOverhangModes} from 'react-revolver';
import 'react-revolver/dist/index.css';

function RevolverItem(props) {
    return (
        <div className="revolverItem">
            <img alt={props.title} src={props.image} />
            <div className="body">
                <div className="title">
                    {props.title}
                </div>
                <div className="text">
                    {props.text}
                </div>
            </div>
            <div className="footer">
                Footer
            </div>
        </div>
    );
}

function App() {
    const revolverRef = useRef();
    return (
        <div className="App">
            <ReactRevolver
                ref={revolverRef}
                numberOfColumns={3}
                arrowOverhangMode={arrowOverhangModes.some}
                bullets={[
                    <RevolverItem
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis erat sit amet lorem malesuada feugiat. Nunc malesuada porta orci, a finibus urna sagittis in."}
                        title={"Title 1"}
                        image={"https://dummyimage.com/600x400/999/fff.jpg"}
                    />, <RevolverItem
                        text={"Fusce posuere convallis fringilla. Donec malesuada nibh ut odio venenatis, a fermentum mauris tempus. Nulla at ante justo."}
                        title={"Title 2"}
                        image={"https://dummyimage.com/300x200/999/fff.jpg"}
                    />, <RevolverItem
                        text={"Proin hendrerit mi felis, in vestibulum turpis eleifend in."}
                        title={"Title 3"}
                        image={"https://dummyimage.com/400x400/999/fff.jpg"}
                    />, <RevolverItem
                        text={"Suspendisse a dolor sed lectus aliquet pellentesque. Aliquam erat volutpat. Quisque in tempor dui."}
                        title={"Title 4"}
                        image={"https://dummyimage.com/600x400/999/fff.jpg"}
                    />, <RevolverItem
                        text={"Praesent laoreet eros lectus, ac laoreet ligula lacinia vel. Praesent tempor euismod enim non malesuada. Integer tincidunt consequat scelerisque. Fusce rhoncus turpis efficitur velit pharetra tempus. Fusce sit amet neque mauris."}
                        title={"Title 5"}
                        image={"https://dummyimage.com/600x400/999/fff.jpg"}
                    />
                ]}
            />
            <div style={{marginTop: '50px', marginBottom: '20px'}}>Control the Revolver from our App</div>
            <button style={{marginRight: '40px'}}
                    onClick={function () {
                        revolverRef.current.previous();
                    }}
            >
                Previous
            </button>
            <button
                style={{marginRight: '40px'}}
                onClick={function () {
                    revolverRef.current.next();
                }}
            >
                Next
            </button>
            <span style={{marginRight: '8px'}}>Go to index</span>
            <select
                value={"none"}
                onChange={function (e) {
                    revolverRef.current.goToIndex(parseInt(e.target.value, 10));
                }}>
                <option value={"none"}/>
                <option value={"0"}>0</option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
            </select>
        </div>
    );
}

export default App;
