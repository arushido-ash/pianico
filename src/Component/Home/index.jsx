import React from 'react';
import "./style.css";
import C from "../../assets/mp3/C.mp3"
import D from "../../assets/mp3/D.mp3"
import E from "../../assets/mp3/E.mp3"
import F from "../../assets/mp3/F.mp3"
import G from "../../assets/mp3/G.mp3"
import A from "../../assets/mp3/A.mp3"
import B from "../../assets/mp3/B.mp3"
import C2 from "../../assets/mp3/C2.mp3"


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logs: [],
            isPressed: false,
            test: '',
        }
    }
    Flour(num) {
        // alert("収穫してへん")
        switch(num) {
            case 1:
                const FLOUR_FIRST = "小麦粉1です"
                const FLOUR_FIRST_WORD = Object.assign([], this.state.logs);
                FLOUR_FIRST_WORD.push(FLOUR_FIRST);
                this.setState({ logs: FLOUR_FIRST_WORD });
                break;
            case 2:
                const FLOUR_SECOND = "小麦粉2です"
                const FLOUR_SECOND_WORD = Object.assign([], this.state.logs);
                FLOUR_SECOND_WORD.push(FLOUR_SECOND);
                this.setState({ logs: FLOUR_SECOND_WORD });
                break;
            case 3:
                const FLOUR_sann = "小麦粉3ですか？"
                const FLOUR_sann_WORD = Object.assign([], this.state.logs);
                FLOUR_sann_WORD.push(FLOUR_sann);
                this.setState({ logs: FLOUR_sann_WORD });
                break;
            case 4:
                const FLOUR_yon = "違いますか？"
                const FLOUR_yon_WORD = Object.assign([], this.state.logs);
                FLOUR_yon_WORD.push(FLOUR_yon)
                this.setState({ logs: FLOUR_yon_WORD})
                break;
            case 5:
                // alert("ちがうよ？")
                this.setState({ logs: [] })
                break;
            default:
                break;
        }
    }
    playPianoBySound(scale) {
        switch(scale) {
            case 'c':
                const c = new Audio(C)
                c.volume = 0.10;
                c.play();
                break;
            case 'd':
                const d = new Audio(D)
                d.volume = 0.10;
                d.play();
                break;
            case 'e':
                const e = new Audio(E)
                e.volume = 0.10;
                e.play();
                break;
            case 'f':
                const f = new Audio(F)
                f.volume = 0.10;
                f.play();
                break;
            case 'g':
                const g = new Audio(G)
                g.volume = 0.10;
                g.play();
                break;
            case 'a':
                const a = new Audio(A)
                a.volume = 0.10;
                a.play();
                break;
            case 'b':
                const b = new Audio(B)
                b.volume = 0.10;
                b.play();
                break;
            case 'c2':
                const c2 = new Audio(C2)
                c2.volume = 0.10;
                c2.play();
                break;
            default:
                break;
        }
    }
    onKeyPress() {
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            switch(keyName) {
                case 'c':
                    this.playPianoBySound('c');
                    break;
                case 'v':
                    this.playPianoBySound('d');
                    break;
                case 'b':
                    this.playPianoBySound('e');
                    break;
                case 'n':
                    this.playPianoBySound('f');
                    break;
                case 'm':
                    this.playPianoBySound('g');
                    break;
                case ',':
                    this.playPianoBySound('a');
                    break;   
                case '.':
                    this.playPianoBySound('b');
                    break;
                case '/':
                    this.playPianoBySound('c2');
                    break;
                default:
                    break;
            }
        })
    }
    render() {
        this.onKeyPress();
        return (
            <div>
                <div className="pianoWrap">
                    <button className='pianoTile' onClick={() => this.playPianoBySound('c')}></button>
                    <button className="pianoTile sharp sharp_cs"></button>
                    <button className="pianoTile" onClick={() => this.playPianoBySound('d')}></button>
                    <button className="pianoTile sharp sharp_ds"></button>
                    <button className="pianoTile" onClick={() => this.playPianoBySound('e')}></button>
                    <button className="pianoTile" onClick={() => this.playPianoBySound('f')}></button>
                    <button className="pianoTile sharp sharp_fs"></button>
                    <button className="pianoTile" onClick={() => this.playPianoBySound('g')}></button>
                    <button className="pianoTile sharp sharp_gs"></button>
                    <button className="pianoTile" onClick={() => this.playPianoBySound('a')}></button>
                    <button className="pianoTile sharp sharp_as"></button>
                    <button className="pianoTile" onClick={() => this.playPianoBySound('b')}></button>
                    <button className="pianoTile" onClick={() => this.playPianoBySound('c2')}></button>
                </div>
                <button className="flour" onClick={() => this.Flour(1)}>小麦粉</button>
                <button className="flour" onClick={() => this.Flour(2)}>小麦粉</button>
                <button className="flour" onClick={() => this.Flour(3)}>小麦粉</button>
                <button className="flour" onClick={() => this.Flour(4)}>小麦粉</button>
                <button className="potato" onClick={() => this.Flour(5)}>片栗粉</button>

                {this.state.logs.map((log) => {
                    return (<div>{log}</div>)
                })}

                
            </div>
        )
    }
}
export default Home;