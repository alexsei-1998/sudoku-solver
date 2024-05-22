import { FcPrevious, FcNext } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/indexSlice';
export default function Output({sudokuSolutions}){
    const index  = useSelector(state => state.index.value);

    const dispatch = useDispatch();
    return (
    <div className='flex items-center gap-8'>
        <div className='text-4xl font-black text-slate-600 cursor-pointer' onClick={()=>{
            if(index != 0)
                dispatch(decrement())
        }}><FcPrevious/></div>
        <div className="grid grid-cols-9 border-2 rounded-md border-slate-500 aspect-square custom-shadow">
        {
            sudokuSolutions[index].map((sudokuRow, i) => {
                return sudokuRow.map((sudokuBlock, j)=>{
                    return <div key={`${i*9} + ${j}`}><div className="aspect-square border text-[1rem] w-[66px] h-[66px] border-slate-400 focus:outline-none caret-slate-500 text-slate-500 flex items-center">{sudokuBlock}</div></div>   
                })
            })
        }
        </div>
        <div className='text-4xl font-black text-slate-600 cursor-pointer' onClick={()=>{
            if(index != (sudokuSolutions.length - 1))
                dispatch(increment());
        }}><FcNext/></div>
    </div>)
}