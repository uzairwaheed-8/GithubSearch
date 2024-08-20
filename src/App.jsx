/* eslint-disable react-hooks/exhaustive-deps */

import './App.css'
import { FaGithub } from "react-icons/fa";
import { useEffect} from 'react';
import ProfileCard from './components/ProfileCard';
import IssueCard from './components/IssueCard';
import RepositoryCard from './components/RepositoryCard';
// import useDetectScroll from "@smakss/react-scroll-direction";
import {useSelector,useDispatch} from 'react-redux'
import { toggle } from './features/darkSlice';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { clearData, getdata } from './features/dataSlice';
import { setOption } from './features/optionSlice';
import { setSearch } from './features/inputSlice';
// import {setData} from './features/dataSlice';
function App() {
// const [isdark,setdark]=useState(true);
const isdark = useSelector((state)=> state.dark.value)
// const [store,setStore] = useState([])
const data = useSelector((state)=> state.data.value)
const option = useSelector((state)=>state.option.value)
const search  =useSelector((state)=> state.input.value)
const dispatch = useDispatch()
// const [data,setData]=useState([]);
// const [option,setoption]=useState('users');
// const [search,setSearch]=useState('');
// const {scrollDir,scrollPosition} = useDetectScroll();

const fetchdata=async(url)=>{
  const token='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'
  try {
    const res = await fetch(url,{
      headers :{
        Accept: "application/json",
        Authorization: `token ${token}`,
      }
    });
    const dat = await res.json();  
    // setData(prevData => [...prevData, ...dat.items]);
    dispatch(getdata(dat.items))
    // setStore(prevStore => {   
    //   const updatedStore = [...prevStore];
    //   updatedStore[search] = dat.items;
    //   return updatedStore;
    // });
    
    console.log(data)
  } catch (error) {
    console.log("Error : ",error);  
  }
}
useEffect(()=>{
const timeout = setTimeout(() => {
  if (search.length > 4) {
    // if(store[search]){
    //   dispatch(setData(store[search]))
    //   console.log('data fetched from store')
    //   console.log(data);
    // }else{
      const url = `https://api.github.com/search/${option}?q=${search}`;
      fetchdata(url);
      console.log(url);
    } 
    // }
},1500);
return ()=> clearTimeout(timeout)
},[search, option])
// setTimeout(useEffect(() => {
//   if (search.length > 4) {
//     const val = store.findIndex((value)=>{
//       return value == search
//     })
//     if(val !== null){
//       const url = `https://api.github.com/search/${option}?q=${search}`;
//       fetchdata(url);
//       console.log(url);
//     }
//     dispatch(setData(store[search]))
//     console.log('data fetched from store')
//       console.log(data);
//     }
// }, [search, option]),5000)


// useEffect(() => {
//   if (scrollPosition.bottom === 0) {
//     const url = `https://api.github.com/search/${option}?q=${search}`;
//     fetchdata(url);
//     console.log(url);
//     console.log(data);
//   }
// }, [scrollPosition.bottom]);

const handleOptionChange=(e)=>{
 const {value} = e.target;
dispatch(clearData())
dispatch(setOption(value))
//  setoption(value);
 
}
const handleInputChange=(e)=>{
const {value} = e.target;
dispatch(clearData())
// setSearch(value);
dispatch(setSearch(value))

}

const display = data.map((item,key) => {
  if (option === 'users') {
    return <ProfileCard key={key} user={item} />;
  } else if (option === 'repositories') {
    return <RepositoryCard key={key} repository={item} />;
  } else {
    return <IssueCard key={key} issue={item} />;
  }
});

  return (
    <>
    <div className={isdark ? 'bg-black min-h-screen p-4 md:p-10 lg:p-16 font-mono select-none cursor-default' : 'bg-white min-h-screen p-4 md:p-10 lg:p-16 font-mono select-none cursor-default'}>
      <div className=' flex flex-row items-center '>
      {isdark ? <FaGithub color='white' className='w-20 md:w-32 lg:w-40 h-auto p-2' /> : <FaGithub color='black' className='w-20 md:w-32 lg:w-40 h-auto p-2'/>}
      <div className='flex flex-col justify-center  lg:pl-12'>
     <h1 className={isdark ? "text-white font-bold text-xl md:text-3xl lg:text-5xl" : "text-black font-bold text-xl md:text-3xl lg:text-5xl"}>GitHub Searcher</h1>
     <p className={isdark ? "text-white text-sm md:text-1xl lg:text-2xl" : "text-black text-sm md:text-1xl lg:text-2xl"}>Search Users or repositories below</p>
     </div>
     {/* <button className={isdark ? "text-white" : "text-black" }onClick={()=>{setdark(!isdark)}}>toggle</button> */}
     <div className={isdark ?" ml-2 md:ml-10 lg:ml-16" :"ml-2 md:ml-10 lg:ml-16"}>
     <DarkModeSwitch
      onChange={()=> dispatch(toggle())}
      checked={isdark}
      size={window.innerWidth < 640 ? "60px" :window.innerWidth < 768 ? "80px" :"100px"}
      // className={isdark ? "bg-black" : "bg-white" }
    />
     </div>
    
      </div>
      <div>
        <div className='pb-10 pt-6 flex'>
        <input className={isdark  ? "border-white border-2 bg-black box-border text-gray-400 px-2 py-2 ml-2 lg:px-24  lg:py-3 w-[400px] lg:w-[700px] md:mr-4  lg:mr-4 text-xs lg:text-2xl " : "border-2 box-border px-2 py-2 ml-2 lg:px-24  lg:py-3 w-[400px] lg:w-[700px] md:mr-4  lg:mr-4 text-xs lg:text-2xl text-gray-400 "} type="text" name="search" id="search-box"  placeholder='Start Typing to search..' onChange={handleInputChange}  />
        <select 
                id="favColor" 
                name="favColor"
                className={isdark ? 'border-white border-2 bg-black w-100px  px-1 py-2 ml-2 lg:px-4 lg:py-3  text-xs lg:text-2xl text-gray-400':'w-100px border-2 px-1 py-2 ml-2 lg:px-4 lg:py-3  text-xs lg:text-2xl text-gray-400'}
                onChange={handleOptionChange}
            >
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
                <option value="issues">Issues</option>
            </select>
        </div>
        <div className='grid grid-cols-1 ml-4 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 '>
    {search.length < 3 ? '' : display}
</div>


      </div>
      
     
     
    
    </div>

    </>
  )
}

export default App
