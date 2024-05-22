import { useDispatch, useSelector } from "react-redux";
import { updateGrid } from "../redux/slices/sudokuGridSlice";
import {reset} from '../redux/slices/sudokuGridSlice.jsx'
import { useEffect } from "react";
export default function Input({Reset, setReset}) {
    const { grid } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleInputChange = (i, j, newValue) => {
        dispatch(updateGrid([i, j, newValue]));
    };
    useEffect(()=>{
        const ips = document.getElementsByTagName('input');
        [...ips].forEach(ip => {
            ip.value = '';
        });
        dispatch(reset(''));
        setReset(false);
    }, [Reset]);
    console.log(grid);
    return (
        <div className="grid grid-cols-9 border-2 rounded-md border-slate-500 aspect-square custom-shadow">
            {grid.map((sudokuRow, i) => {
                return sudokuRow.map((sudokuBlock, j) => {
                    return (
                        <div key={`${i * 9} + ${j}`}>
                            <input
                                type='number'
                                min='1'
                                max='9'
                                onChange={(event) =>
                                    handleInputChange(i, j, event.target.value)
                                }
                                className="aspect-square border text-[1rem] border-slate-400 focus:outline-none caret-slate-500 text-slate-500 p-[0.25rem]"
                            ></input>
                        </div>
                    );
                });
            })}
        </div>
    );
}
