import React from 'react';
import { useState,useEffect } from 'react';
import Card from '../card/Card';
import Wait from '../wait/Wait';
import { useOnKeyPress } from './useOnKeyPress';
import {searchIcon} from '../../assets';
import { getIdQuery, getMainQuery, getHeader, getUrl } from './query';

//main component, this contains the major functionality of the site, displays the search bar and returns the card component

const Main = () => {

    //to keep track of what the user types in the search bar
    const [val, setVal]= useState("");

    //state for the username of the github profile entered by the user
    const [user,setUser] = useState("");

    //state to store the fetched data and pass it to card component as a prop
    const [fetchedData, setFetchedData] = useState({});

    /* 
        state for the id of github profile entered by the user
        we need to fetch the id seperately because we need to filter the commits based on the id and the required filtering
        can be done only through id, sence we need a seperate fetch call to get the id of the user
    */
    const [id,setId] = useState(null);

    //state to decide whether to show the Wait component or not, set to true because useEffect runs and sets it to false at the first render
    const [showCard,setShowCard] = useState(true);

    //function to handle the click event on the search button
    const handleClick = () => {
        if(val!=="") setUser(val);
    }

    //function to handle the pressing of the ENTER key by the user by running the handleClick function
    useOnKeyPress(handleClick);

    //getting the api url to fetch the data from 
    const url = getUrl();
    //getting the query to fetch the id of the user
    const idQuery = getIdQuery(user);
    //getting the main query to fetch the required details of the user
    const mainQuery = getMainQuery(user,id);
    //getting the header for the fetch call
    const headers = getHeader();


    /*
    once the id has been, the main query is used to fetch all the details necessary and the fetchedData state is updated
    once the fetch is complete
     */
    useEffect(()=>{
        if(user!=="")
        {
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(mainQuery)
            })
            .then(res => res.json())
            .then(data => {
                setFetchedData(data.data)
                setShowCard(!showCard);
            })
            .catch(err => {
                console.error(err.message);
            });
        }
    },[id])

    /*
    runs when the user state is updated, fetches the id of the given user which is then used to filter commits by the user
    in the main query, if the username is invalid, the id can't be fetched and the user is set to '/' and an error message
    is displayed
    */
    useEffect(()=>{
         setShowCard(!showCard);
         if(user!=="")
         {
            fetch(url, {
                 method: 'POST',
                 headers: headers,
                 body: JSON.stringify(idQuery)
            })
             .then(res => res.json())
             .then(data => {
                     try{
                         setId(data.data.user.id);
                     }
                     catch(err){
                       setFetchedData({user: '/'});
                       setShowCard(false);
                     }
                     
            })
            .catch(err=>console.log(err.message));
        } 
    },[user])    

    return (  
      
        <div className='flex flex-col items-center mb-52'>
            <div className='flex h-11'>

                {/* search bar, keeps track of is being typed, and fetches the data when the button is clicked or enter is pressed */}
                    <img className='max-w-full max-h-full mr-2' src={searchIcon} alt="search" />

                    <input className='w-32 sm:w-72 focus:outline-none border-none font-Manrope p-2 text-base' type='text' placeholder=' Search User...' value={val} onChange={(e)=>setVal(e.target.value)}/>

                    <button className='border-none rounded-r text-primary hover:text-black hover:bg-secondary hover:duration-200 hover:ease-in' type='button' onClick={handleClick}>

                        <p className='font-Manrope text-base p-1 sm:text-lg sm:p-2'>Search</p>
                        
                    </button>
                    
            </div>

            {/* shows the Wait component while the data is being fetiched */}
            { showCard &&  <Wait /> }

            {/* displayed if no user of the searched up username exists */}
            { !showCard && fetchedData.user === '/' && 
                (
                    <div className='font-Manrope text-lg text-center my-48 text-primary'><p>We're sorry, but that username doesn't seem to exist :(</p></div>
                )
            }

            {/* if a valid user exists, the card component for that user is shown */}
            { !showCard && fetchedData.user!==undefined && fetchedData.user!=='/' && 
            
                <Card data={fetchedData} /> 
            
            }
           
                
        </div>
   
    );
}
 
export default Main;



