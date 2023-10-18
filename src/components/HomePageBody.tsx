import React,{useState} from 'react'
import QuestionCard from './QuestionCard'

const HomePageBody = () => {



    let [questions,setQuestions]=useState([


        {question:"What are Strings ?",
        tags:["python","react"],
        likes:2,
        contributors:2,
        responses:0
    
    },
    {question:"What are Integers ?",
    tags:["python","react"],
    likes:2,
    contributors:2,
    responses:0

},   {question:"What are Doubles ?",
tags:["python","react"],
likes:2,
contributors:2,
responses:0

}
    ])



let [announcements,setAnnouncements]=useState(["Announcement-1","Announcement-2","Announcement-3","Announcement-4"])

let [blogs,setBlogs]=useState(["Blog-1","Blog-2","Blog-3","Blog-4"])

let shortcuts=

[{value:"Home",path:"home.png"},
{value:"Top Questions",path:"wizard.png"},
{value:"Top Users",path:"top-users.png"},
{value:"Trending Tags",path:"wizard.png"},
{value:"Stack Forums",path:"stack-forums.png"},
{value:"Doc Hub",path:"wizard.png"},
{value:"Github",path:"github.png"}]


    let section_1_liDesign= {
        color: "#FFFCF1",
fontSize: "17px",
fontStyle: "normal",
fontWeight: 500,
lineHeight: "normal",
marginTop:"20px",

    }
  return (
    <div className='flex flex-row justify-around'>


        <div className='section-1' style={{
            width:"25%",
            position:"relative",
            height:"127vh",
            borderRight:"2px solid #FFFCF1",
            
        }}>
            <ul style={{
                position:"absolute",
                right:"10%"
            }}>


                {shortcuts.map((x)=>(

                <li key={x.value} className='hover:underline' style={section_1_liDesign}> 
                <img src={x.path} style={{
                
                    flexShrink:0,
                    display:'inline'
                }} className='h-5 w-5'></img><span className='mx-2'>{x.value}</span></li>
                ))

            }
                
            </ul>


        </div>

        <div className='section-2 mx-2' style={{
            width:"50%",
            borderRight:"2px solid #FFFCF1",

        }}>



            <p className='mx-8 my-8' style={{
                width: "471px",
                height: "92px",
                flexShrink:0,
                color: "#D2B863",
fontSize: "47px",
fontStyle: "normal",
fontWeight: 700,
lineHeight: "normal"
            }}>Questions</p>

            <ul className='mx-2'>



            {questions.map((value)=>(
           
           <li className='my-4' key={value.question}>
           <QuestionCard question={value.question} tags={value.tags} likes={value.likes} contributors={value.contributors} responses={0} ></QuestionCard>

           </li>
            ))}


            </ul>


        </div>

        <div className='section-3' style={{
            width:"25%",

        }}>


        <div className='mx-2 my-4 rounded-xl' style={{
            background: "#090D23",
            width:"70%",
            border:"2px solid #D2B863"



        }}>

            <div className='mx-3 my-4'>
                <img src='announcements.png' className='h-5 w-5 mr-2 inline-block'></img>
            <span style={{color:"#D2B863"}} className='text-lg font-medium underline'>Announcements</span>
            <ul className='mx-5 my-4 underline'>


                {announcements.map((value)=>(
                    <li key={value} className='my-2'>{value}</li>
                ))}





            </ul>
            </div>
        </div>
        <div className='mx-2 my-4 rounded-xl' style={{
            background: "#090D23",
            width:"70%",
            border:"2px solid #D2B863"



        }}>

            <div className='mx-3 my-4'>
                <img src='announcements.png' className='h-5 w-5 mr-2 inline-block'></img>
            <span style={{color:"#D2B863"}} className='text-lg font-medium underline'>Blogs</span>
            <ul className='mx-5 my-4 underline'>


                {blogs.map((value)=>(
                    <li key={value} className='my-2'>{value}</li>
                ))}





            </ul>
            </div>
        </div>

        </div>

    </div>
  )
}

export default HomePageBody