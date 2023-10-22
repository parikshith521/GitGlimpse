import React from 'react';
import {commits,issues,pullreqs,contributions,repository,commitPic} from '../../assets';
//tooltip for the contribution calendar is implemented with material ui
import Tooltip from '@mui/material/Tooltip';


//user card component
/*
 displays the data of a user which is fetched, accepts an object 'data' as a prop which contains the data fetched
*/
const Card = ({data}) => {


    {/*array to calculate the current month to be displayed on the contribution calednar */}
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const today = new Date();

    {/*contributionCalendarWeeks will contain an array representing each week of the contribution calendar, in case of any unexpected error it will be an empty array by default */}
   let contributionCalendarWeeks = [];
    try {
        contributionCalendarWeeks = data.user.contributionsCollection.contributionCalendar.weeks;
    }
    catch{}

    {/*repos will be contain an array of the repositories of the github profile, in case of any unexpected error, it will be an empty array by default */}
    let repos = [];
    try{
        repos = data.user.repositories.nodes;
    }
    catch{}

    return ( 
        
            <div className='flex flex-col items-center text-primary max-w-screen-lg mt-28'>

                {/* displays the avatar of the github profile */}
                <div className='mb-9'>
                    <img className='w-[200px] h-[200px] rounded-full'src={data.user.avatarUrl} alt="avatar" />
                </div>

                {/*displays name,bio,pronouns,company,location of the github profile */}

                <p className='text-gray font-Inter text-center text-2xl font-bold my-4 mx-3'>General Details</p>

                <div className='text-Manrope max-w-screen-sm mx-3 text-lg sm:text-xl mb-9'>
                    <p className='my-1'>Name: {data.user.name!=null?data.user.name:<span className='text-gray font-bold'>NA</span>}</p>
                    <p className='my-1'>Bio: {data.user.bio!=null?data.user.bio:<span className='text-gray font-bold'>NA</span>}</p>
                    <p className='my-1'>Pronouns: {data.user.pronouns!=""?data.user.pronouns:<span className='text-gray font-bold'>NA</span>}</p>
                    <p className='my-1'>Company: {data.user.company!=null?data.user.company:<span className='text-gray font-bold'>NA</span>}</p>
                    <p className='my-1'>Location: {data.user.location!=null?data.user.company:<span className='text-gray font-bold'>NA</span>}</p>
                    
                    <p>Followers: {data.user.followers.totalCount}</p>
                    <p>Following: {data.user.following.totalCount}</p>
                </div>

            {/* displays number of commits, pull requests, issues & contributions of the github profile */}
            <div className='flex flex-col items-center mb-9'>

                    <p className='text-gray font-Inter text-center text-2xl font-bold my-4 mx-3'>Github Stats</p>
                
                <div className=' font-Manrope  text-base sm:text-lg mx-3'>
                    <div className='flex items-center my-2 '>
                        <img className='w-[30px] h-[30px] mr-2'src={commits} alt="commits" />
                        <p>Total Commits (This Year): {data.user.contributionsCollection.totalCommitContributions}</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <img className='w-[30px] h-[30px] mr-2' src={pullreqs} alt="pullreqs" />
                        <p>Total Pull Requests: {data.user.pullRequests.totalCount}</p>
                    </div>
                    <div className='flex item-center my-2'>
                        <img className='w-[30px] h-[30px] mr-2' src={issues} alt="issues" />
                        <p>Total Issues: {data.user.issues.totalCount}</p>
                    </div>
                    <div className='flex item-center my-2'>
                        <img className='w-[30px] h-[30px] mr-2' src={contributions} alt="contributions" />
                        <p>Total Contributions (This Year): {data.user.contributionsCollection.contributionCalendar.totalContributions}</p>
                    </div>
                </div>

            </div>

            {/* the contribution calendar of the github user*/}
            <div className='flex flex-col items-center mb-9'>

                {/*contribution calendar header */}
                <div>
                    <p className='text-gray font-Inter text-center text-2xl font-bold my-4 mx-3'>Contribution Calendar</p>
                </div>

             
               <div className='flex flex-col overflow-x-auto bp:items-center w-[90vw]'>

                {/*the topmost row of the calendar displays the months over which the calendar spans, since by default, the calendar is for an year, both the starting and ending months will be the same, i.e the current month */}
                    <div className='flex w-[636px] justify-between ml-[25px] text-[11px]'>
                        <p>{months[today.getMonth()]}</p>
                        <p>{months[today.getMonth()]}</p>
                    </div>

                    <div className='flex'>

                {/* the calendar will also contain a column to the left specifying the days of the week for reference */}
                        <div className='w-[25px]'>
                            <p className='mt-[11px] text-[10px] text-right'>Mon</p>
                            <p className='mt-[8px] text-[10px] text-right'>Wed</p>
                            <p className='mt-[8px] text-[10px] text-right'>Fri</p>      
                        </div>

                {/*displaying the actual calendar */}
                        <div className='flex mx-[5px]'>
                        {
                            contributionCalendarWeeks!=null && 
                            contributionCalendarWeeks.map(days=>
                                    (
                                        /*each element of the contributionCalendarWeeks array will be an array itself containing seven objects, each representing a day of the week */
                                        <div className='h-[100px] w-[10px] flex flex-col m-[1px]'>
                                            {
                                                /*each object will contain the number of contributions made on that day and also the hex code of the color to be displayed on the calendar

                                                for each week, we can access the days, and for each day, the color and contribution count is displayed, using flexbox we can display this in the required format
                                                */
                                                days.contributionDays.map((day)=>
                                                    {
                                                        let contributionCount = "Contribution Count: " + day.contributionCount;
                                                        let contributionColor = day.color;
                                                        if(contributionColor=='#ebedf0') contributionColor = '#222526';
                                                        if(contributionColor=='#40c463') contributionColor = '#2F9A5f';
                                                        if(contributionColor=='#9be9a8') contributionColor = '#166634';
                                                        if(contributionColor=='#30a14e') contributionColor = '#26813E';

                                                    return (
                                                        <Tooltip title={contributionCount} arrow>
                                                            <div className='w-full h-[10px] block m-[1px] rounded' style={{backgroundColor: contributionColor}}></div>
                                                        </Tooltip>
                                                    )
                                                    }
                                                )
                                            }
                                        </div>
                                    )
                                )
                        }
                        </div>

                    </div>
                    </div> 
            </div>

            {/* displaying the recent repositories and recent commits to that repository by the user*/}
            <div className='mb-9 flex flex-col items-center'>

            <p className='text-gray font-Inter text-center text-2xl font-bold my-4 mx-3'>Recent Repositories & Commits</p>
            <div className='flex flex-col items-start max-w-2xl'>
                {
                   
                      //  repos is basically an array containing the repositories of the user
                    
                    repos.length !=0 &&  
                    repos.map((repo)=>{

                        /*
                        for each repository in repos, we try to get an array of objects containing the commits made by the user and store it in an array called commits, in case this fails, the commits array is empty by default
                        */
                        let commits=[];
                        try{
                            commits = repo.defaultBranchRef.target.history.nodes;
                        }
                        catch{}
                    
                        return (

                            <div className='mx-3'>

                                <div className='flex p-2 items-center text-lg '>
                                    <img className='w-9 h-9 rounded-full mr-3'src={repository} alt="repo" />
                                    <p className='text-lg sm:text-xl'>Repo: {repo.name} <span className='text-tertiary text-base'>- {repo.createdAt.substring(0,10)}</span></p>
                                </div>

                                {
                                    commits!=null &&  
                                    commits.map((commit) => (

                                        /*
                                            each object in the commits array, contains the commit message and the committed date,
                                            both are displayed
                                        */
                                        <div className='flex items-center p-3 ml-12'>

                                            <img className='w-7 h-7 rounded-full mr-3' src={commitPic} alt="commits" />
                                            <p className=' text-base sm:text-lg'>{commit.message} <span className='text-tertiary text-base'>- {commit.committedDate.substring(0,10)}</span></p>
                                            
                                        </div>
                                    ))
                                    
                                }
                            </div>
                        )
                            
                    })
                        
                }
                </div>    


                {/* message to displayed when github profile has no repositories */}
                {repos.length==0 && (<div className='font-Manrope text-primary font-bold text-xl' >User has no repositories</div>)}       
                    
                

            </div>
            
            {/* button that links to the github profile */}
            <div>
                <button className='border-none px-3 py-1 bg-tertiary hover:bg-secondary hover:duration-200 hover:ease-in'><a className='text-inherit no-underline' href={data.user.url} target='blank'><p className='font-Manrope text-base text-black font-medium'>Visit Profile</p></a></button>
            </div>


        </div>
  



     );
}
 
export default Card;