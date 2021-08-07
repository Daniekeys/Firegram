import React,{useState} from 'react'
import useStorage from '../hooks/useStorage'
import Progressbar from './Progressbar';

const Uploadfile = () => {

 const [file, setFile] = useState('');

 const [error,setError] = useState('');
 const changeHandler = (e) => {
  
  let selected = e.target.files[0];
  const types = ['image/png', 'image/jpeg'];

  if (selected && types.includes(selected.type)) {
   
   setFile(selected);
   setError('');
  } else {
   setFile(null);
    setError('Please select an image file (png or jpeg')
  }

  
 }
 return (
  <>
  <form >
    <label >
     <input type="file" onChange={changeHandler} />
     <span> + </span>
    </label>
  
   <div className="output">
   {error && <div className="error">{error} </div>}
   {file && <div className="file">{file.name} </div>}
   {file && <Progressbar file={file} setFile={setFile} /> }
   </div>
  </form>





  </>
 )
}

export default Uploadfile
