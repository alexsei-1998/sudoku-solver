import './App.css';
import Output from './components/Output.jsx';
import Input from './components/Input.jsx';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSolve from './hooks/useSolve';
import { toast } from 'react-toastify';
import { init } from './redux/slices/indexSlice';
import 'react-toastify/dist/ReactToastify.css';
function App() {
	const [Reset, setReset] = useState(false);
	const {grid} = useSelector((state) => state);
	const dispatch = useDispatch();
	const index = useSelector(state => state.index.value);
	const {sudokuSolutions, setSudokuSolutions, isValid, solveSudoku} = useSolve(grid);
	function fetchSolutions()
	{
		console.log(grid);
		if(isValid()){
			solveSudoku();
		}
		else
		{
			toast.info('INVALID SUDOKU', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				});
		}
	}
    return (
    	<div className='min-h-screen flex flex-col justify-center items-center gap-2 select-none'>
	        <div className='text-slate-600 font-bold'>SUDOKU SOLVER</div>
			{
				!sudokuSolutions.length ? <Input Reset={Reset} setReset={setReset}/> : <Output sudokuSolutions={sudokuSolutions}/>
			}
			<div className='w-[250px] flex justify-between'>
				<button onClick={fetchSolutions} className='bg-sky-600 py-1 px-2 font-bold rounded-sm text-white cursor-pointer hover:bg-white hover:text-sky-600 transition duration-500'>SOLVE</button>
				{
					sudokuSolutions.length > 0  && 
					<div className='text-slate-600 font-bold'>{index + 1} of {sudokuSolutions.length}</div>
				}
				<button className='bg-red-600 py-1 px-2 font-bold rounded-sm text-white cursor-pointer hover:bg-white hover:text-red-600 transition duration-500' onClick={()=>{
					setSudokuSolutions([]);
					dispatch(init());
					setReset(true);
				}}>RESET</button>
			</div>
  		</div>
    );
}
export default App;
