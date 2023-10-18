import React from 'react';
import NavBar from '../components/NavBar';
import "../app/globals.css"
import HomePageBody from '../components/HomePageBody';
import QuestionCard from '../components/QuestionCard';

const Home: React.FC = () => {


    let [searchQuestionText, setSearchQuestionText] = React.useState<string>("")
    return (
    <div className='' style={{
        background: "url('image.png')",
        
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        minHeight: '150vh', 
      }}>
    <NavBar loggedInStatus={true}></NavBar>

    <div style={{
        filter: "brightness(1)",
    }}>

      <div className='flex flex-row justify-around my-4'>
        <div style={{
            position:"relative"
        }} className='mx-6'>

            
            <p className='mx-8' style={{
                color: "#FFFCF1",
                fontSize: "60px",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: "normal",
                WebkitTextStroke:"2px #D2B863",
                display:"inline"
            
            }}> HACKTOMANIA</p>
            <img src='image 3.png' style={{
                width: "84px",
                height: "78px",
                marginTop:"-65px",
                flexShrink:0
                
            }}></img>
            
            <p style={{
                color: "#FFFCF1",
                fontSize: "30px",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: "normal",
                WebkitTextStroke:"2px #D2B863",
                left:"400px",
                position:"absolute",
                marginTop:"-42px"
            }}>2023</p>
        </div>

        <div style={{
            width: "500px",
            height: "50px",
            flexShrink:0,
            borderRadius: "20px",
border: "2px solid #D2B863",
background: "linear-gradient(180deg, #090D23 0%, rgba(37, 50, 120, 0.00) 100%)",
display:"flex",
alignItems:"center",
flexDirection:"row"
        }}>



            <input className='mx-4 flex-1'  style={{
                background: "linear-gradient(180deg, #090D23 0%, rgba(37, 50, 120, 0.00) 100%)",
                outline:"none",
                width: "327.655px",
height: "26.136px",
flexShrink:0
            }} placeholder='Type here to search questions'  value={searchQuestionText} onChange={(e)=>{

                setSearchQuestionText(e.target.value)



            }}></input>

         </div>


         <div style={{
            width: "150px",
            height: "50px",
            flexShrink:0,
            borderRadius: "20px",
border: "2px solid #D2B863",
background: "linear-gradient(180deg, #090A23 26.14%, rgba(19, 32, 108, 0.00) 72.73%)",
display:"flex",
alignItems:"center",
justifyContent:"center",
         }}>  

         Sign Up
         </div>
         <div style={{
            width: "150px",
            height: "50px",
            flexShrink:0,
            borderRadius: "20px",
border: "2px solid #D2B863",
background: "linear-gradient(180deg, #090A23 26.14%, rgba(19, 32, 108, 0.00) 72.73%)",
display:"flex",
alignItems:"center",
justifyContent:"center",


         }}>  

         Log In
         </div>



        </div>
    </div>
    <div style={{
        border:"1px solid #D2B863",
    }}></div>

    <HomePageBody></HomePageBody>
    </div>
    );
};

export default Home;
